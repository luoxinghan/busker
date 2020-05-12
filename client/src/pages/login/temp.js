import React, {Component} from "react";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import {actionCreators} from "./store";
import {
    Form, Input, Button, Checkbox, AutoComplete,
} from 'antd';
import {
    FormWrapper,
    CaptchaCode
} from "./style";
import md5 from "md5";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            codeLength: 4,
            fontSizeMin: 20,
            fontSizeMax: 22,
            backgroundColorMin: 240,
            backgroundColorMax: 250,
            colorMin: 10,
            colorMax: 20,
            lineColorMin: 40,
            lineColorMax: 180,
            contentWidth: 96,
            contentHeight: 38,
            showError: false
        };
    }

    componentDidMount() {
        this.canvas = React.createRef();
        this.drawPic();
    }

    handleSubmit = e => {
        e.preventDefault();
        this.drawPic();
        this.props.form.validateFields((err, values) => {
            if (!err && this.state.showError !== true) {
                //登录接口
                const {login} = this.props;

                values.tenDaysChecked = values.remember;
                delete values.remember;
                delete values.sendcode;
                values.password = md5(values.password);
                values.usertype = 1;
                login(values, this.props);

            }
        });
        this.props.form.setFieldsValue({
            sendCode: ''
        });
        this.setState({
            showError: false
        });
    };

    forget = () => {
       let path="/forget";
       this.props.history.push(path);
    };

    register = () => {
        let path="/register";
        this.props.history.push(path);
    };

    randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    drawPic = () => {
        this.randomCode();
    };

    randomColor(min, max) {
        const r = this.randomNum(min, max);
        const g = this.randomNum(min, max);
        const b = this.randomNum(min, max);
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }

    drawText(ctx, txt, i) {
        ctx.fillStyle = this.randomColor(this.state.colorMin, this.state.colorMax);
        let fontSize = this.randomNum(this.state.fontSizeMin, this.state.fontSizeMax);
        ctx.font = fontSize + 'px SimHei';
        let padding = 10;
        let offset = (this.state.contentWidth - 40) / (this.state.code.length - 1);
        let x = padding;
        if (i > 0) {
            x = padding + (i * offset);
        }
        let y = this.randomNum(this.state.fontSizeMax, this.state.contentHeight - 5);
        if (fontSize > 40) {
            y = 40;
        }
        let deg = this.randomNum(-10, 10);
        //修改坐标原点和旋转角度
        ctx.translate(x, y);
        ctx.rotate(deg * Math.PI / 180);
        ctx.fillText(txt, 0, 0);
        //回复坐标原点和旋转角度
        ctx.rotate(-deg * Math.PI / 180);
        ctx.translate(-x, -y);
    }

    drawLine(ctx) {
        //绘制干扰线
        for (let i = 0; i < 1; i++) {
            ctx.strokeStyle = this.randomColor(this.state.lineColorMin, this.state.lineColorMax);
            ctx.beginPath();
            ctx.moveTo(this.randomNum(0, this.state.contentWidth), this.randomNum(0, this.state.contentHeight));
            ctx.lineTo(this.randomNum(0, this.state.contentWidth), this.randomNum(0, this.state.contentHeight));
            ctx.stroke();
        }
    }

    drawDot(ctx) {
        //绘制干扰点
        for (let i = 0; i < 100; i++) {
            ctx.fillStyle = this.randomColor(0, 255);
            ctx.beginPath();
            ctx.arc(this.randomNum(0, this.state.contentWidth), this.randomNum(0, this.state.contentHeight), 1, 0, 2 * Math.PI);
            ctx.fill();
        }
    }

    reloadPic = () => {
        this.drawPic();
        this.props.form.setFieldsValue({
            sendcode: '',
        });
    };

    changeCode = e => {
        if (e.target.value.toLowerCase() !== '' && e.target.value.toLowerCase() !== this.state.code.toLowerCase()) {
            this.setState({
                showError: true
            })
        } else if (e.target.value.toLowerCase() === '') {
            this.setState({
                showError: false
            })
        } else if (e.target.value.toLowerCase() === this.state.code.toLowerCase()) {
            this.setState({
                showError: false
            })
        }
    };

    randomCode() {
        let random = '';
        // 去掉了I l i o O
        const str = 'QWERTYUPLKJHGFDSAZXCVBNMqwertyupkjhgfdsazxcvbnm1234567890';
        for (let i = 0; i < this.state.codeLength; i++) {
            let index = Math.floor(Math.random() * 57);
            random += str[index];
        }
        this.setState({
            code: random
        }, () => {
            let canvas = this.canvas.current;
            let ctx = canvas.getContext('2d');
            ctx.textBaseline = 'bottom';
            //绘制背景
            ctx.fillStyle = this.randomColor(this.state.backgroundColorMin, this.state.backgroundColorMax);
            ctx.fillRect(0, 0, this.state.contentWidth, this.state.contentHeight);
            //绘制文字
            for (let i = 0; i < this.state.code.length; i++) {
                this.drawText(ctx, this.state.code[i], i)
            }
            this.drawLine(ctx);
            this.drawDot(ctx);
        })
    }

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
        const suffix = <CaptchaCode>
            <canvas onClick={this.reloadPic}
                    ref={this.canvas}
                    width="100"
                    height="36">
            </canvas>
        </CaptchaCode>;
        return (
            <FormWrapper>
                <h1>Sign in</h1>
                <Form onSubmit={this.handleSubmit} className="login-form" style={{maxWidth: '398px', margin: '0 auto', fontSize: '12px'}}>
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{required: true, message: 'Please enter email!'}, {
                                pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                                message: 'E-mail format is incorrect!'
                            }],
                        })(
                            <AutoComplete
                                dataSource={this.state.dataSource}
                                size="large"
                                placeholder="Email"
                                onChange={this.handleEmailChange}
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Please enter password!'}, {
                                pattern: /^.{6,}$/,
                                message: 'The password must not be less than 6 digits.'
                            }],
                        })(
                            <Input.Password
                                size="large"
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('sendcode', {
                            rules: [{required: true, message: 'Please enter check code!'},],
                        })(
                            <Input
                                size="large"
                                // prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                suffix={suffix}
                                onChange={this.changeCode}
                                placeholder="Check code"
                            />,
                        )}
                        {
                            this.state.showError ? "Please enter correct check code!" : null
                        }
                    </Form.Item>
                    <Form.Item className={this.state.showError ? 'styles.inputBottom' : ''}>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>Remember me</Checkbox>)}
                        {/*<a onClick={this.forget}>
                            Forget Password
                        </a>*/}
                        <Button
                            size="large"
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            Sign in
                        </Button>
                        <Link to={"/register"}>Register</Link>
                        {/*<a onClick={this.register}>Register</a>*/}
                    </Form.Item>
                </Form>
            </FormWrapper>
        )
    }
}

const WrappedNormalLoginForm = Form.create({name: 'normal_login'})(Login);

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        login(values, props){
            dispatch(actionCreators.login(values, props));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(WrappedNormalLoginForm));