import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import axios from "axios";
import {
    Button,
    DatePicker,
    Form,
    Input,
    Upload,
    Icon,
    message,
    Tooltip
} from 'antd';

import {
    MomentAddWrapper,
    MomentFormWrapper
} from "./style";

let id = 0;

class MomentAdd extends Component{
    state = {
        fileList: [],
        imageId: -1,
        imageIdList: [],
        redirect: false
    };

    handleChange = info => {
        if (info.file.status === 'uploading') {
            return;
        }
        if (info.file.status === 'done') {
            this.setState({
                fileList: info.fileList,
                imageId: info.file.response.data[0].imageId,
                imageIdList: this.state.imageIdList.concat(info.file.response.data[0].imageId)
            });
        }
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            } else {
                const values = {
                    ...fieldsValue,
                    'postTime': fieldsValue['postTime'].format('YYYY-MM-DD HH:mm:ss'),
                };
                let videoList = [];
                let imageList = [];
                values.video.forEach(function(item) {
                    let video = {};
                    video.videoPath = item;
                    videoList.push(video);
                });
                this.state.imageIdList.forEach(function(item) {
                    let image = {};
                    image.id = item;
                    imageList.push(image);
                });
                let data = {
                    "buskerId": this.props.currentUser.get("id"),
                    "postTime": values.postTime,
                    "video": videoList,
                    "image": imageList,
                    "content": values.content,
                    "address": values.address
                };
                axios.post("/api/moment/addMoment", data)
                    .then((res)=>{
                        const result = res.data.data;
                        if (result.code === 0 && res.status === 200) {
                            this.setState({
                                redirect: true
                            });
                        } else {
                            message.error('Server request update failed!')
                        }
                    }).catch((e)=>{
                    console.log(e);
                    message.error("Api request failed or api error!");
                });
            }
        });
    };
    remove = k => {
        const { form } = this.props;
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
        const { form } = this.props;
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
        const { getFieldDecorator, getFieldValue } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        };
        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 20, offset: 4 },
            },
        };
        getFieldDecorator('keys', { initialValue: [] });
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
                })(<Input placeholder="Video id" style={{ width: '60%', marginRight: 8 }} />)}
                {keys.length > 1 ? (
                    <Icon
                        className="dynamic-delete-button"
                        type="minus-circle-o"
                        onClick={() => this.remove(k)}
                    />
                ) : null}
            </Form.Item>
        ));
        const { currentUser, isLogged } = this.props;
        if(isLogged) {
            if (!this.state.redirect) {
                return (
                    <MomentAddWrapper>
                        <MomentFormWrapper>
                            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                                <Form.Item label="Post Time">
                                    {getFieldDecorator('postTime', {
                                        rules: [{type: 'object', required: true, message: 'Please select post time!'}],
                                    })(
                                        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"/>,
                                    )}
                                </Form.Item>
                                <Form.Item label="Address">
                                    {getFieldDecorator('address', {
                                        rules: [{required: true, message: 'Please input address!'}],
                                    })(<Input placeholder="Address"/>)}
                                </Form.Item>
                                <Form.Item label="Content">
                                    {getFieldDecorator('content',{
                                        rules: [{required: true, message: 'Please input content!'}],
                                    })(<Input.TextArea placeholder="Content"/>)}
                                </Form.Item>
                                <Form.Item label="Upload" extra="Please only .jpg or .png">
                                    {getFieldDecorator('upload', {
                                        valuePropName: 'fileList',
                                        getValueFromEvent: this.normFile,
                                    })(
                                        <Upload name="logo" action="/api/moment/addMomentImages"
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
                                    <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
                                        <Icon type="plus" /> Add a video
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
                    <Redirect to={"/busker/detail/" + currentUser.get("id")}/>
                )
            }
        } else {
            return (
                <Redirect to="/login"/>
            )
        }
    }
}
const WrappedMomentAddForm = Form.create({ name: 'time_related_controls' })(MomentAdd);

const mapStateToProps = (state) => {
    return {
        currentUser: state.get("login").get("currentUser"),
        isLogged: state.get("login").get("isLogged")
    }
};

export default connect(mapStateToProps, null)(withRouter(WrappedMomentAddForm));