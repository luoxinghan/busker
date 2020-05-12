import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {
    Button,
    Form,
    Input,
    Upload,
    Icon,
    Tooltip
} from 'antd';

import {
    MomentAddWrapper,
    MomentFormWrapper
} from "./style";
import {actionCreators} from "./store";
import NotLoginPage from "../../common/components/NotLogin";
import moment from "moment";
import {deleteObjectNull} from "../../common/utils/dataUtils";

let id = 0;

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

class MomentAdd extends Component {
    state = {
        loading: false,
        resourceId: null,
        images: [],
        imgUrl: null
    };

    handleChange = info => {
        if (info.file.status === 'uploading') {
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                    imgUrl: info.file.response.data.url,
                    images: this.state.images.concat({
                        resourceId: info.file.response.data.resourceId,
                        url: info.file.response.data.url
                    })
                }),
            );
        }
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) {
                return;
            } else {
                let data = values;
                let videos = [];
                if (values.keys.length !== 0){
                    values.video.forEach(function (item) {
                        videos.push({url: item});
                    });
                }
                data = {
                    ...values,
                    'postTime': moment(new Date()).valueOf(),
                    'buskerId': this.props.currentUser.get("id"),
                    'videos': videos,
                    'images': this.state.images,
                    'tendency': 0
                };
                delete data.upload;
                delete data.keys;
                delete data.video;
                data = deleteObjectNull(data);
                this.props.creatMoment(data, this.props);
            }
        });
    };

    remove = k => {
        const {form} = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        // We need at least one passenger
        if (keys.length === 1) {
            return;
        }

        // can use data-binding to set
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    };

    add = () => {
        const {form} = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(id++);
        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
            keys: nextKeys,
        });
    };

    normFile = e => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    render() {
        const {getFieldDecorator, getFieldValue} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 4},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 20},
            },
        };
        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: {span: 24, offset: 0},
                sm: {span: 20, offset: 4},
            },
        };
        getFieldDecorator('keys', {initialValue: []});
        const keys = getFieldValue('keys');
        const formItems = keys.map((k, index) => (
            <Form.Item
                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                label={index === 0 ? <span>
                                Videos&nbsp;
                    <Tooltip title="Not Link! Only like NMPrrskDxZY!">
                                    <Icon type="question-circle-o"/>
                                </Tooltip>
                                </span> : ''}
                required={false}
                key={k}
            >
                {getFieldDecorator(`video[${k}]`, {
                    validateTrigger: ['onChange', 'onBlur'],
                    rules: [
                        {
                            required: true,
                            whitespace: true,
                            message: "Please input a Youtube video id.",
                        },
                    ],
                })(<Input placeholder="Video id" style={{width: '60%', marginRight: 8}}/>)}
                {keys.length > 1 ? (
                    <Icon
                        className="dynamic-delete-button"
                        type="minus-circle-o"
                        onClick={() => this.remove(k)}
                    />
                ) : null}
            </Form.Item>
        ));
        const {isLogged} = this.props;
        if (isLogged) {
            return (
                <MomentAddWrapper>
                    <MomentFormWrapper>
                        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                            <Form.Item label="Address">
                                {getFieldDecorator('address', {
                                    rules: [{required: true, message: 'Please input address!'}],
                                })(<Input placeholder="Address"/>)}
                            </Form.Item>
                            <Form.Item label="Content">
                                {getFieldDecorator('content', {
                                    rules: [{required: true, message: 'Please input content!'}],
                                })(<Input.TextArea placeholder="Content"/>)}
                            </Form.Item>
                            <Form.Item label="Upload" extra="Please only .jpg or .png">
                                {getFieldDecorator('upload', {
                                    valuePropName: 'fileList',
                                    getValueFromEvent: this.normFile,
                                })(
                                    <Upload name="logo" action="/api/image/upload"
                                            data={{type: 6}}
                                            onChange={this.handleChange}
                                            listType="picture">
                                        <Button>
                                            <Icon type="upload"/> Click to upload
                                        </Button>
                                    </Upload>,
                                )}
                            </Form.Item>
                            {formItems}
                            <Form.Item {...formItemLayoutWithOutLabel}>
                                <Button type="dashed" onClick={this.add} style={{width: '60%'}}>
                                    <Icon type="plus"/> Add a video
                                </Button>
                            </Form.Item>
                            <Form.Item {...formItemLayoutWithOutLabel}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </MomentFormWrapper>
                </MomentAddWrapper>
            )
        } else {
            return (
                <NotLoginPage/>
            )
        }
    }
}

const WrappedMomentAddForm = Form.create({name: 'time_related_controls'})(MomentAdd);

const mapStateToProps = (state) => {
    return {
        currentUser: state.get("login").get("currentUser"),
        isLogged: state.get("login").get("isLogged")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        creatMoment(data, props) {
            dispatch(actionCreators.addMoment(data, props));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(WrappedMomentAddForm));