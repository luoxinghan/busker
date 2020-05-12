import React, {Component} from "react";
import {connect} from "react-redux";
import {actionCreators} from "./store";
import {Redirect} from "react-router-dom";
import {
    Form,
    Input,
    Button, Alert, Row, Col, Tabs
} from 'antd';
import {
    RegisterWrapper,
    RegisterInfo
} from "./style";

const {TabPane} = Tabs;

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 60,
            liked: true
        }
    }

    state = {
        confirmDirty: false,
        autoCompleteResult: []
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (err) {
                return;
            } else{
                console.log(values);
                /*this.props.register(values);*/
            }
        });
    };

    handleConfirmBlur = e => {
        const value = e.target.value;
        this.setState({confirmDirty: this.state.confirmDirty || !!value});
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
            form.validateFields(['confirm'], {force: true});
        }
        callback();
    };

    changeUserType = (type) => {
        switch (type) {
            case "1": this.props.switchUserType(3); break;
            case "3": this.props.switchUserType(1); break;
            default: break;
        }
    };

    countDown() {
        const {count} = this.state;
        if (count === 1) {
            this.setState({
                count: 60,
                liked: true
            });
        } else {
            this.setState({
                count: count - 1,
                liked: false
            });
            setTimeout(this.countDown.bind(this), 1000)
        }
    }

    handleClick = () => {
        const {liked} = this.state;
        console.log("some", liked);
        if (!liked) {
            return;
        }
        this.countDown();
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const {message, redirectTo, isRegister, userType} = this.props;
        if (!isRegister) {
            return (
                <RegisterWrapper>
                    <RegisterInfo>
                        <Tabs onChange={this.changeUserType} defaultActiveKey={userType + ""}>
                            <TabPane tab={<span>Fans</span>} key="3">
                                <h1>Sign up as <span className="fans">Fans</span></h1>
                                {message !== "" ? <Alert message={message} type="error" showIcon closable/> : null}
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Item>
                                        {getFieldDecorator('username', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'Please input your email!',
                                                },
                                            ],
                                        })(<Input placeholder="Email"/>)}
                                    </Form.Item>
                                    <Form.Item extra="We must make sure that your are a human.">
                                        <Row gutter={16}>
                                            <Col span={8}>
                                                {getFieldDecorator('captcha', {
                                                    rules: [{
                                                        required: true,
                                                        message: 'Please input the captcha you got!'
                                                    }],
                                                })(<Input placeholder="Captcha"/>)}
                                            </Col>
                                            <Col span={16}>
                                                {this.state.liked ?
                                                    <Button onClick={this.handleClick}>Get captcha</Button> :
                                                    <Button disabled>{this.state.count}s Resend Captcha</Button>}
                                            </Col>
                                        </Row>
                                    </Form.Item>
                                    <Form.Item>
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
                                        })(<Input.Password allowClear placeholder="Password"/>)}
                                    </Form.Item>
                                    <Form.Item>
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
                                        })(<Input.Password allowClear onBlur={this.handleConfirmBlur}
                                                           placeholder="Confirm password"/>)}
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit">
                                            Sign in
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </TabPane>
                            <TabPane tab={<span onClick={()=>this.changeUserType(1)}>Busker</span>} key="1">
                                <h1>Sign up as <span className="busker">Busker</span></h1>
                                {message !== "" ? <Alert message={message} type="error" showIcon closable/> : null}
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Item>
                                        {getFieldDecorator('username', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'Please input your email!',
                                                },
                                            ],
                                        })(<Input placeholder="Email"/>)}
                                    </Form.Item>
                                    <Form.Item extra="We must make sure that your are a human.">
                                        <Row gutter={16}>
                                            <Col span={8}>
                                                {getFieldDecorator('captcha', {
                                                    rules: [{
                                                        required: true,
                                                        message: 'Please input the captcha you got!'
                                                    }],
                                                })(<Input placeholder="Captcha"/>)}
                                            </Col>
                                            <Col span={16}>
                                                {this.state.liked ?
                                                    <Button onClick={this.handleClick}>Get captcha</Button> :
                                                    <Button disabled>{this.state.count}s Resend Captcha</Button>}
                                            </Col>
                                        </Row>
                                    </Form.Item>
                                    <Form.Item>
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
                                        })(<Input.Password allowClear placeholder="Password"/>)}
                                    </Form.Item>
                                    <Form.Item>
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
                                        })(<Input.Password allowClear onBlur={this.handleConfirmBlur}
                                                           placeholder="Confirm password"/>)}
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit">
                                            Sign in
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </TabPane>
                        </Tabs>
                    </RegisterInfo>
                </RegisterWrapper>
            );
        } else {
            return (
                <Redirect to={redirectTo}/>
            )
        }
    }
}

const WrappedRegistrationForm = Form.create({name: 'register'})(RegistrationForm);

const mapStateToProps = (state) => {
    return {
        message: state.get("register").get("message"),
        redirectTo: state.get("register").get("redirectTo"),
        data: state.get("register").get("data"),
        isRegister: state.get("register").get("isRegister"),
        userType: state.get("register").get("userType")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        register(data) {
            dispatch(actionCreators.register(data));
        },
        switchUserType(userType) {
            dispatch(actionCreators.changeUserType(userType));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WrappedRegistrationForm);