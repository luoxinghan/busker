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

/*function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}*/

class BuskerUpdate extends Component {
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
                    'buskerId': this.props.currentUser.get("id"),
                    'dateOfBirth': fieldsValue['dateOfBirth'].valueOf(),
                    'imgUrl': this.state.imgUrl
                };
            } else {
                values = {
                    ...fieldsValue,
                    'buskerId': this.props.currentUser.get("id"),
                    'dateOfBirth': fieldsValue['dateOfBirth'].valueOf(),
                    'imgUrl': this.props.busker.get("imgUrl")
                };
            }
            this.props.updateBusker(values, this.props);
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
        const { busker, currentUser, isLogged} = this.props;
        if (!isLogged) {
            return (
                <NotLoginPage/>
            )
        }

        if (busker !== null) {
            if (busker.get("id") !== currentUser.get("id")) {
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
                                        {this.getTheAvatar(imageUrl, busker.get("imgUrl"))}
                                    </Upload>
                                </ImgCrop>
                            </div>
                            <ProfileFormWrapper>
                                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                                    <Form.Item label="Nickname">
                                        {getFieldDecorator('nickName', {
                                            initialValue: busker.get("buskerName") === null ? null : busker.get("buskerName"),
                                            rules: [{required: true, message: 'Please input your nickname!'}],
                                        })(<Input/>)}
                                    </Form.Item>
                                    <Form.Item label="Sex">
                                        {getFieldDecorator('sex', {
                                            initialValue: busker.get("sex") === null ? null : busker.get("sex"),
                                            rules: [{required: true, message: 'Please select your sex!'}],
                                        })(
                                            <Radio.Group>
                                                <Radio value={0}>Secret</Radio>
                                                <Radio value={1}>Man</Radio>
                                                <Radio value={2}>Woman</Radio>
                                            </Radio.Group>,
                                        )}
                                    </Form.Item>
                                    <Form.Item label="Birthday">
                                        {getFieldDecorator('dateOfBirth', {
                                            initialValue: busker.get("age") === null ? null : moment(busker.get("age"), "YYYY-MM-DD"),
                                            rules: [{
                                                type: 'object',
                                                required: true,
                                                message: 'Please select your birthday!'
                                            }],
                                        })(<DatePicker/>)}
                                    </Form.Item>
                                    <Form.Item label={
                                        <span>
                              Instruments&nbsp;
                                            <Tooltip title="Guitar, Piano, etc.">
                                            <Icon type="question-circle-o"/>
                                        </Tooltip>
                                </span>}
                                    >
                                        {getFieldDecorator('instruments', {
                                            initialValue: busker.get("instrument") === null ? null : busker.get("instrument")
                                        })(<Input/>)}
                                    </Form.Item>
                                    <Form.Item label="Introduce">
                                        {getFieldDecorator('introduction', {
                                            initialValue: busker.get("introduce") === null ? null : busker.get("introduce")
                                        })(<Input.TextArea/>)}
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
        this.props.getBusker(this.props.match.params.id);
    }
}

const WrappedTimeRelatedForm = Form.create({name: 'time_related_controls'})(BuskerUpdate);
const mapStateToProps = (state) => {
    return {
        busker: state.get("buskerUpdate").get("busker"),
        currentUser: state.get("login").get("currentUser"),
        isLogged: state.get("login").get("isLogged")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getBusker(id) {
            dispatch(actionCreators.getBusker({buskerId: id, days: 10}));
        },
        updateBusker(values, props) {
            dispatch(actionCreators.updateBusker(values, props));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(WrappedTimeRelatedForm));