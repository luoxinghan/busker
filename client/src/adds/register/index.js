import React,{ Component} from "react";
import {connect} from "react-redux";
import {actionCreators} from "./store";
import { Redirect } from "react-router-dom";
import {
    Form,
    Input,
    Button, Alert,
} from 'antd';
import {
    RegisterWrapper
} from "./style";

class RegistrationForm extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.register(values);
            }
        });
    };

    handleConfirmBlur = e => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
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
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const { message, redirectTo, data} = this.props;
        if (data.get("code") !== 0) {
            return (
                <RegisterWrapper>
                    <h3>Register</h3>
                    {message !== "" ? <Alert message={message} type="error" showIcon closable /> : null}
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                        <Form.Item label="Username">
                            {getFieldDecorator('username', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ],
                            })(<Input/>)}
                        </Form.Item>
                        <Form.Item label="Password">
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                    {
                                        validator: this.validateToNextPassword,
                                    },
                                ],
                            })(<Input.Password allowClear />)}
                        </Form.Item>
                        <Form.Item label="Confirm Password">
                            {getFieldDecorator('confirm', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    {
                                        validator: this.compareToFirstPassword,
                                    },
                                ],
                            })(<Input.Password allowClear onBlur={this.handleConfirmBlur}/>)}
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                </RegisterWrapper>
            );
        } else {
            return (
                <Redirect to={redirectTo}/>
            )
        }
    }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

const mapStateToProps = (state) => {
    return {
        message: state.get("register").get("message"),
        redirectTo: state.get("register").get("redirectTo"),
        data: state.get("register").get("data")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        register(values) {
            dispatch(actionCreators.register(values));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WrappedRegistrationForm );