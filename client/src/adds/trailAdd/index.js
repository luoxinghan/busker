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
    message
} from 'antd';

import {
    TrailAddWrapper,
    TrailFormWrapper
} from "./style";
import NotLoginPage from "../../common/components/NotLogin";

class TrailAdd extends Component{
    state = {
        fileList: [],
        imageId: -1,
        redirect: false
    };

    handleChange = info => {
        if (info.file.status === 'uploading') {
            return;
        }
        if (info.file.status === 'done') {
            this.setState({
                fileList: info.fileList,
                imageId: info.file.response.imageId
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
                    'time': fieldsValue['time'].format('YYYY-MM-DD HH:mm:ss'),
                };
            let data = {
                "buskerId": this.props.currentUser.get("id"),
                "participant": values.participant,
                "time": values.time,
                "poster": this.state.imageId,
                "describe": values.describe,
                "address": values.address
            };
                /*axios.get("/api/trail/addTrail")*/
                axios.post("/api/trail/addTrail", data)
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
    normFile = e => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const { currentUser, isLogged } = this.props;
        const { fileList } = this.state;
        if(isLogged) {
            if (!this.state.redirect) {
                return (
                    <TrailAddWrapper>
                        <TrailFormWrapper>
                            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                                <Form.Item label="Participant">
                                    {getFieldDecorator('participant', {
                                        rules: [{required: true, message: 'Please input participant!'}],
                                    })(<Input placeholder="Participant"/>)}
                                </Form.Item>
                                <Form.Item label="Address">
                                    {getFieldDecorator('address', {
                                        rules: [{required: true, message: 'Please input address!'}],
                                    })(<Input placeholder="Address"/>)}
                                </Form.Item>
                                <Form.Item label="Time">
                                    {getFieldDecorator('time', {
                                        rules: [{type: 'object', required: true, message: 'Please select time!'}],
                                    })(
                                        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"/>,
                                    )}
                                </Form.Item>
                                <Form.Item label="Describe">
                                    {getFieldDecorator('describe')(<Input.TextArea placeholder="Describe"/>)}
                                </Form.Item>
                                <Form.Item label="Upload" extra="Please only .jpg or .png">
                                    {getFieldDecorator('upload', {
                                        rules: [{required: true, message: 'Please add a poster!'}],
                                        setFieldsInitialValue: fileList,
                                        valuePropName: 'fileList',
                                        getValueFromEvent: this.normFile,
                                    })(
                                        <Upload name="logo" action="/api/trail/addTrailImage"
                                                onChange={this.handleChange}
                                                listType="picture">
                                            {
                                                fileList.length >= 1 ? null :
                                                    <Button>
                                                        <Icon type="upload"/> Click to upload
                                                    </Button>
                                            }
                                        </Upload>,
                                    )}
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
                        </TrailFormWrapper>
                    </TrailAddWrapper>
                )
            } else {
                return (
                    <Redirect to={"/busker/detail/" + currentUser.get("id")}/>
                )
            }
        } else {
            return (
                <NotLoginPage/>
            )
        }
    }
}
const WrappedTrailAddForm = Form.create({ name: 'time_related_controls' })(TrailAdd);

const mapStateToProps = (state) => {
    return {
        currentUser: state.get("login").get("currentUser"),
        isLogged: state.get("login").get("isLogged")
    }
};

export default connect(mapStateToProps, null)(withRouter(WrappedTrailAddForm));