import React, {Component} from "react";
import {connect} from "react-redux";
import {actionCreators} from "./store";
import {withRouter} from "react-router-dom";
import {
    Form,
    Input,
    Button, Alert, Row, Col, Tabs, message, AutoComplete
} from 'antd';
import {
    RegisterWrapper,
    RegisterInfo
} from "./style";
import md5 from "md5";

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
            } else {
                if (values.captcha !== this.props.captcha) {
                    message.error("Captcha Incorrect!");
                    return;
                } else {
                    delete values.captcha;
                    delete values.confirm;
                    values.password = md5(values.password);
                    values.usertype = this.props.userType;
                    this.props.register(values, this.props);
                }
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
            case "1":
                this.props.switchUserType(1);
                break;
            case "3":
                this.props.switchUserType(3);
                break;
            default:
                break;
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
        let email = (this.props.form.getFieldValue('username'));
        if (!liked) {
            return;
        } else {
            this.props.sendCaptcha(email);
        }
        this.countDown();
    };

    handleEmailChange = value => {
        this.setState({
            dataSource:
                !value || value.indexOf('@') >= 0
                    ? []
                    : [`${value}@gmail.com`, `${value}@163.com`, `${value}@qq.com`],
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const {userType} = this.props;
        return (
            <RegisterWrapper>
                <RegisterInfo>
                    <Tabs onChange={this.changeUserType} defaultActiveKey={userType + ""}>
                        <TabPane tab={<span>Fans</span>} key="3">
                            <h1>Sign up as <span className="fans">Fans</span></h1>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Item>
                                    {getFieldDecorator('username', {
                                        rules: [{required: true, message: 'Please enter email!'}, {
                                            pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                                            message: 'E-mail format is incorrect!'
                                        }],
                                    })(<AutoComplete
                                        dataSource={this.state.dataSource}
                                        size="large"
                                        placeholder="Email"
                                        onChange={this.handleEmailChange}
                                    />)}
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
                                        rules: [{required: true, message: 'Please enter password!'}, {
                                            pattern: /^.{6,}$/,
                                            message: 'The password must not be less than 6 digits.'
                                        }, {
                                            validator: this.validateToNextPassword,
                                        }],
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
                                        Sign up
                                    </Button>
                                </Form.Item>
                            </Form>
                        </TabPane>
                        <TabPane tab={<span>Busker</span>} key="1">
                            <h1>Sign up as <span className="busker">Busker</span></h1>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Item>
                                    {getFieldDecorator('username', {
                                        rules: [{required: true, message: 'Please enter email!'}, {
                                            pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                                            message: 'E-mail format is incorrect!'
                                        }],
                                    })(<AutoComplete
                                        dataSource={this.state.dataSource}
                                        size="large"
                                        placeholder="Email"
                                        onChange={this.handleEmailChange}
                                    />)}
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
                                        rules: [{required: true, message: 'Please enter password!'}, {
                                            pattern: /^.{6,}$/,
                                            message: 'The password must not be less than 6 digits.'
                                        }, {
                                            validator: this.validateToNextPassword,
                                            }],
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
                                        Sign up
                                    </Button>
                                </Form.Item>
                            </Form>
                        </TabPane>
                    </Tabs>
                </RegisterInfo>
            </RegisterWrapper>
        );
    }
}

const WrappedRegistrationForm = Form.create({name: 'register'})(RegistrationForm);

const mapStateToProps = (state) => {
    return {
        userType: state.get("register").get("userType"),
        captcha: state.get("register").get("captcha")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        register(data, props) {
            dispatch(actionCreators.register(data, props));
        },
        switchUserType(userType) {
            dispatch(actionCreators.changeUserType(userType));
        },
        sendCaptcha(email) {
            dispatch(actionCreators.getCaptcha(email))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(WrappedRegistrationForm));