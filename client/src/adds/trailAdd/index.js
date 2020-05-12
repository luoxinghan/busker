import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {
    Button,
    DatePicker,
    Form,
    Input,
    Upload,
    Icon
} from 'antd';

import {
    TrailAddWrapper,
    TrailFormWrapper
} from "./style";
import NotLoginPage from "../../common/components/NotLogin";
import {actionCreators} from "./store";
import {deleteObjectNull} from "../../common/utils/dataUtils";

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

class TrailAdd extends Component {
    state = {
        loading: false,
        resourceId: null,
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
                    resourceId: info.file.response.data.resourceId
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
                delete data.upload;
                data.buskerId = this.props.currentUser.get("id");
                data.imgUrl = this.state.imgUrl;
                data.resourceId = this.state.resourceId;
                data.performingTime = data.performingTime.valueOf();
                data.publishedTime = (new Date()).valueOf();
                data.like = 0;
                data = deleteObjectNull(data);
                this.props.creatTrail(data, this.props);
            }
        });
    };
    normFile = e => {
        let fileList = [...e.fileList];
        fileList = fileList.slice(-1);//截取fileList最后一个元素
        return fileList;
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
        const {isLogged} = this.props;
        if (isLogged) {
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
                            <Form.Item label="Performing Time">
                                {getFieldDecorator('performingTime', {
                                    rules: [{type: 'object', required: true, message: 'Please select time!'}],
                                })(
                                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"/>,
                                )}
                            </Form.Item>
                            <Form.Item label="Describe">
                                {getFieldDecorator('details')(<Input.TextArea placeholder="Describe"/>)}
                            </Form.Item>
                            <Form.Item label="Upload" extra="Please only .jpg or .png">
                                {getFieldDecorator('upload', {
                                    rules: [{required: true, message: 'Please add a poster!'}],
                                    valuePropName: 'fileList',
                                    getValueFromEvent: this.normFile,
                                })(
                                    <Upload name="logo" action="/api/image/upload"
                                            data={{type: 7}}
                                            onChange={this.handleChange}
                                            listType="picture">
                                        <Button>
                                            <Icon type="upload"/> Click to upload
                                        </Button>
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
                <NotLoginPage/>
            )
        }
    }
}

const WrappedTrailAddForm = Form.create({name: 'time_related_controls'})(TrailAdd);

const mapStateToProps = (state) => {
    return {
        currentUser: state.get("login").get("currentUser"),
        isLogged: state.get("login").get("isLogged")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        creatTrail(data, props) {
            dispatch(actionCreators.addTrail(data, props));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(WrappedTrailAddForm));