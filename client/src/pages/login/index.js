import React, {Component} from "react";
import {connect} from "react-redux";
import {Link, Redirect} from "react-router-dom";
import {actionCreators} from "./store";
import {actionCreators as registerActionCreators} from "../../adds/register/store";
import {
    Form, Icon, Input, Button, Checkbox, Radio,
} from 'antd';
import {
    LoginWrapper,
    FormWrapper
} from "./style";


class Login extends Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.login(values);
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const {isLogged, isRegister, cleanTheRegister} = this.props;
        if (!isLogged) {
            if(isRegister){
                cleanTheRegister()
            }
            return (
                <LoginWrapper>
                    <FormWrapper>
                        <h2>Busker Life</h2>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{required: true, message: 'Please input your username!'}],
                                })(
                                    <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                           placeholder="Username"/>
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{required: true, message: 'Please input your Password!'}],
                                })(
                                    <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                           type="password" placeholder="Password"/>
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('usertype', {
                                    rules: [{required: true, message: 'Please select your user type!'}],
                                })(
                                    <Radio.Group defaultValue="3">
                                        <Radio value="3">Register</Radio>
                                        <Radio value="1">Busker</Radio>
                                        <Radio value="2">Admin</Radio>
                                    </Radio.Group>,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>Remember me</Checkbox>
                                )}
                                <a className="login-form-forgot" href="/">Forgot password</a><br/>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button><br/>
                                Or <Link to="/register">register now!</Link>
                            </Form.Item>
                        </Form>
                    </FormWrapper>
                </LoginWrapper>
            );
        } else {
            return <Redirect to="/"/>
        }
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

const mapStateToProps = (state) => {
    return {
        isLogged: state.get("login").get("isLogged"),
        isRegister: state.get("register").get("isRegister")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login(values){
            dispatch(actionCreators.login(values));
        },
        cleanTheRegister(){
            dispatch(registerActionCreators.cleanRegister());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);