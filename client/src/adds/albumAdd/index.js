import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {
    Button,
    DatePicker,
    Form,
    Input,
    Upload,
    InputNumber,
    Icon
} from 'antd';

import {
    AlbumAddWrapper,
    AlbumFormWrapper
} from "./style";
import NotLoginPage from "../../common/components/NotLogin";
import {deleteObjectNull} from "../../common/utils/dataUtils";
import {actionCreators} from "./store";

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

class AlbumAdd extends Component {
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
                data.image = this.state.resourceId;
                if (typeof data.publishTime !== "undefined") {
                    data.publishTime = data.publishTime.valueOf();
                } else {
                    data.publishTime = (new Date()).valueOf();
                }
                data = deleteObjectNull(data);
                this.props.createAlbum(data, this.props);
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
            labelCol: {span: 6},
            wrapperCol: {span: 14},
        };
        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: {span: 20, offset: 4},
                sm: {span: 16, offset: 8},
            },
        };
        const {isLogged} = this.props;
        if (isLogged) {
            return (
                <AlbumAddWrapper>
                    <AlbumFormWrapper>
                        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                            <Form.Item label="Album name">
                                {getFieldDecorator('albumName', {
                                    rules: [{required: true, message: "Please input the album name!"}],
                                })(<Input placeholder="Album name"/>)}
                            </Form.Item>
                            <Form.Item label="Image" extra="Please only .jpg or .png">
                                {getFieldDecorator('upload', {
                                    valuePropName: 'fileList',
                                    getValueFromEvent: this.normFile,
                                    rules: [{required: true, message: 'The album needs a cover art.'}]
                                })(
                                    <Upload name="logo" action="/api/image/upload"
                                            data={{type: 2}}
                                            onChange={this.handleChange}
                                            listType="picture">
                                        <Button>
                                            <Icon type="upload"/> Click to upload
                                        </Button>
                                    </Upload>,
                                )}
                            </Form.Item>
                            <Form.Item label="Number of singles">
                                {getFieldDecorator('singles', {
                                    rules: [{
                                        required: true,
                                        message: "Please enter the number of singles for this album."
                                    }],
                                })(<InputNumber min={1} max={20} placeholder="Singles"/>)}
                            </Form.Item>
                            <Form.Item label="Price">
                                {getFieldDecorator('price', {
                                    rules: [{required: true, message: "Please enter the price."}],
                                })(<InputNumber min={0} step={0.1} placeholder="Price"/>)}
                            </Form.Item>
                            <Form.Item label="Author">
                                {getFieldDecorator('author')(<Input placeholder="Author"/>)}
                            </Form.Item>
                            <Form.Item label="Describe">
                                {getFieldDecorator('describe')(<Input.TextArea placeholder="Content"/>)}
                            </Form.Item>
                            <Form.Item label="Post Time">
                                {getFieldDecorator('publishTime')(
                                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"/>,
                                )}
                            </Form.Item>
                            <Form.Item {...formItemLayoutWithOutLabel}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </AlbumFormWrapper>
                </AlbumAddWrapper>
            )
        } else {
            return (
                <NotLoginPage/>
            )
        }
    }
}

const WrappedAlbumAddForm = Form.create({name: 'time_related_controls'})(AlbumAdd);

const mapStateToProps = (state) => {
    return {
        currentUser: state.get("login").get("currentUser"),
        isLogged: state.get("login").get("isLogged")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createAlbum(data, props) {
            dispatch(actionCreators.addAlbum(data, props));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(WrappedAlbumAddForm));