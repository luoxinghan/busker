import React, {Component} from "react";
import {connect} from "react-redux";
import {Upload, Icon, message, Radio, Form, Input, DatePicker, Button, Tooltip} from 'antd';
import ImgCrop from "antd-img-crop";
import moment from 'moment';
import {actionCreators} from "./store";
import {Redirect,withRouter} from "react-router-dom";
import {
    BuskerUpdateWrapper,
    ProfileUpdateWrapper,
    ProfileFormWrapper
} from "./style";

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
}

class BuskerUpdate extends Component{
    state = {
        imageId: -1
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
            // Should format date value before submit.
            const values = {
                ...fieldsValue,
                'birth': fieldsValue['birth'].format('YYYY-MM-DD'),
            };
            this.props.changeBusker(this.props.match.params.id, values, this.state.imageId);
        });
    };

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.props.changeTheLoading(false);
            return;
        }
        if (info.file.status === 'done') {
            this.setState({
                imageId: info.file.response.imageId
            });
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.props.changeTheImageUrl(imageUrl, false)
            );
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
        const uploadButton = (
            <div>
                <Icon type={this.props.loading ? 'loading' : 'plus'}/>
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const {imageUrl, currentBusker, data, redirectTo, isLogged} = this.props;
        if (data.get("code") === 0) {
            return (
                <Redirect to={redirectTo + "/" + this.props.match.params.id}/>
            )
        } else {
            if(!isLogged){
                return (
                    <Redirect to="/login" />
                )
            }
            if (currentBusker !== null) {
                return (
                    <BuskerUpdateWrapper>
                        <ProfileUpdateWrapper>
                            <div className="avatar-upload">
                                <ImgCrop
                                    modalTitle="Edit Avatar"
                                    width={200}
                                    height={200}
                                    resize={false}>
                                    <Upload
                                        name="avatar"
                                        listType="picture-card"
                                        className="avatar-uploader"
                                        showUploadList={false}
                                        action="/api/busker/addBuskerIcon"
                                        beforeUpload={beforeUpload}
                                        onChange={this.handleChange}
                                    >
                                        {imageUrl ? <img src={imageUrl} alt="avatar"/> : uploadButton}
                                    </Upload>
                                </ImgCrop>
                            </div>
                            <ProfileFormWrapper>
                                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                                    <Form.Item label="Nickname">
                                        {getFieldDecorator('nickname', {
                                            initialValue: currentBusker.get("buskerName") === null ? null : currentBusker.get("buskerName"),
                                            rules: [{required: true, message: 'Please input your nickname!'}],
                                        })(<Input/>)}
                                    </Form.Item>
                                    <Form.Item label="Sex">
                                        {getFieldDecorator('sex', {
                                            initialValue: currentBusker.get("sex") === null ? null : currentBusker.get("sex"),
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
                                        {getFieldDecorator('birth', {
                                            initialValue: currentBusker.get("age") === null ? null : moment(currentBusker.get("age"), "YYYY-MM-DD"),
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
                                        {getFieldDecorator('instrument', {
                                            initialValue: currentBusker.get("instrument") === null ? null : currentBusker.get("instrument")
                                        })(<Input/>)}
                                    </Form.Item>
                                    <Form.Item label="Introduce">
                                        {getFieldDecorator('introduce', {
                                            initialValue: currentBusker.get("introduce") === null ? null : currentBusker.get("introduce")
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
            }else {
                return null;
            }
        }
    }
    componentDidMount() {
        this.props.getBusker(this.props.match.params.id);
    }
}
const WrappedTimeRelatedForm = Form.create({ name: 'time_related_controls' })(BuskerUpdate);
const mapStateToProps = (state) => {
    return {
        loading: state.get("buskerUpdate").get("loading"),
        imageUrl: state.get("buskerUpdate").get("imageUrl"),
        currentBusker: state.get("buskerUpdate").get("currentBusker"),
        data: state.get("buskerUpdate").get("data"),
        redirectTo: state.get("buskerUpdate").get("redirectTo"),
        isLogged: state.get("login").get("isLogged")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getBusker(id){
            dispatch(actionCreators.getBusker(id));
        },
        changeTheLoading(loading){
            dispatch(actionCreators.changeLoading(loading));
        },
        changeTheImageUrl(imageUrl, loading){
            dispatch(actionCreators.changeImageUrl(imageUrl, loading));
        },
        changeBusker(id, values, imageId){
            dispatch(actionCreators.updateBusker(id, values, imageId));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(WrappedTimeRelatedForm));