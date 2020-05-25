import React, {Component} from "react";
import {connect} from "react-redux";
import {Upload, Icon, Radio, Form, Input, DatePicker, Button, Tooltip} from 'antd';
import ImgCrop from "antd-img-crop";
import moment from 'moment';
import {actionCreators} from "./store";
import {withRouter} from "react-router-dom";
import {
    BuskerUpdateWrapper,
    ProfileUpdateWrapper,
    ProfileFormWrapper
} from "./style";
import NoPermission from "../../common/components/NoPermission";
import NotLoginPage from "../../common/components/NotLogin";

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

class UserUpdate extends Component {
    state = {
        imgUrl: null,
        loading: false
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
            // Should format date value before submit.
            let values;
            if (this.state.imgUrl){
                values = {
                    ...fieldsValue,
                    'userId': this.props.user.get("id"),
                    'dateOfBirth': fieldsValue['dateOfBirth'].valueOf(),
                    'imgUrl': this.state.imgUrl
                };
            } else {
                values = {
                    ...fieldsValue,
                    'userId': this.props.user.get("id"),
                    'dateOfBirth': fieldsValue['dateOfBirth'].valueOf(),
                    'imgUrl': this.props.user.get("imgUrl")
                };
            }
            this.props.updateUser(values, this.props);
        });
    };

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({loading: true});
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => {
                    this.setState({
                        imageUrl,
                        loading: false,
                        imgUrl: info.file.response.data.url
                    });
                }
            );
        }
    };

    getTheAvatar = (imageUrl, avatarUrl) => {
        if (!imageUrl && typeof avatarUrl !== "undefined"){//有用户头像，并且没有源头像，优先选择用户头像
            return (<img src={avatarUrl} alt="avatar" style={{width: '100%'}}/>);
        } else if (imageUrl){//有了源头像就选择源头像了
            return (<img src={imageUrl} alt="avatar" style={{width: '100%'}}/>);
        } else {
            return (
                <div>
                    <Icon type={this.state.loading ? 'loading' : 'plus'}/>
                    <div className="ant-upload-text">Upload</div>
                </div>
            )
        }
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 8},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 16},
            },
        };
        const {imageUrl} = this.state;
        const { user, currentUser, isLogged} = this.props;
        if (!isLogged) {
            return (
                <NotLoginPage/>
            )
        }

        if (user !== null) {
            if (user.get("id") !== currentUser.get("id")) {
                return (<NoPermission/>)
            } else {
                return (
                    <BuskerUpdateWrapper>
                        <ProfileUpdateWrapper>
                            <div className="avatar-upload">
                                <ImgCrop
                                    modalTitle="Edit Avatar"
                                    rotate
                                >
                                    <Upload
                                        name="avatar"
                                        listType="picture-card"
                                        className="avatar-uploader"
                                        action="/api/image/avatar"
                                        showUploadList={false}
                                        data={{type: 2}}
                                        onChange={this.handleChange}
                                    >
                                        {this.getTheAvatar(imageUrl, user.get("imgUrl"))}
                                    </Upload>
                                </ImgCrop>
                            </div>
                            <ProfileFormWrapper>
                                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                                    <Form.Item label="Sex">
                                        {getFieldDecorator('sex', {
                                            initialValue: user.get("sex") === null ? null : user.get("sex"),
                                            rules: [{required: true, message: 'Please select your sex!'}],
                                        })(
                                            <Radio.Group>
                                                <Radio value={1}>Man</Radio>
                                                <Radio value={2}>Woman</Radio>
                                            </Radio.Group>,
                                        )}
                                    </Form.Item>
                                    <Form.Item label="Birthday">
                                        {getFieldDecorator('dateOfBirth', {
                                            initialValue: user.get("dateOfBirth") === null ? null : moment(user.get("dateOfBirth")),
                                            rules: [{
                                                type: 'object',
                                                required: true,
                                                message: 'Please select your birthday!'
                                            }],
                                        })(<DatePicker/>)}
                                    </Form.Item>
                                    <Form.Item
                                        wrapperCol={{
                                            xs: {span: 24, offset: 0},
                                            sm: {span: 24, offset: 8},
                                        }}
                                    >
                                        <Button type="primary" htmlType="submit">
                                            Submit
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </ProfileFormWrapper>
                        </ProfileUpdateWrapper>
                    </BuskerUpdateWrapper>
                )
            }
        } else {
            return null;
        }
    }

    componentDidMount() {
        this.props.getUser(this.props.match.params.id);
    }
}

const WrappedTimeRelatedForm = Form.create({name: 'time_related_controls'})(UserUpdate);
const mapStateToProps = (state) => {
    return {
        user: state.get("userUpdate").get("user"),
        currentUser: state.get("login").get("currentUser"),
        isLogged: state.get("login").get("isLogged")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUser(id) {
            dispatch(actionCreators.getUser({userId: id, days: 10}));
        },
        updateUser(values, props) {
            dispatch(actionCreators.updateUser(values, props));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(WrappedTimeRelatedForm));