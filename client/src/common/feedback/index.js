import React, {Component} from "react";
import {Form, Input, Button} from 'antd';
import {
    FeedbackWrapper,
    FeedbackInfo,
    FeedbackImg,
    FeedbackContent
} from "./style";
import {Content, Title} from "../style";
import email from "../../statics/email.png";

class Feedback extends Component{
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
            console.log('Received values of form: ', fieldsValue);
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return(
            <FeedbackWrapper>
                <Content>
                    <Title>
                        <span>Feedback</span>
                    </Title>
                    <FeedbackInfo>
                        <FeedbackImg className="email-img"><img src={email} alt="feedback"/></FeedbackImg>
                        <FeedbackContent>
                            <Form className="feedback-form" onSubmit={this.handleSubmit}>
                                <Form.Item>
                                    {getFieldDecorator('fname', {
                                        rules: [{ required: true, message: 'Please input your first name!', whitespace: true }],
                                    })(<Input placeholder="First Name" />)}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('lname', {
                                        rules: [{ required: true, message: 'Please input your last name!', whitespace: true }],
                                    })(<Input placeholder="Last Name" />)}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('email', {
                                        rules: [
                                            {
                                                type: 'email',
                                                message: 'The input is not valid E-mail!',
                                            },
                                            {
                                                required: true,
                                                message: 'Please input your E-mail!',
                                            },
                                        ],
                                    })(<Input placeholder="What's your email?"/>)}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('feedback')(<Input.TextArea
                                        onPressEnter={this.handleSubmit}
                                        rows={4}
                                        placeholder="Please explain your question or share your thoughts. (Enter to submit)"/>)}
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">
                                        SEND
                                    </Button>
                                </Form.Item>
                            </Form>
                        </FeedbackContent>
                    </FeedbackInfo>
                </Content>
            </FeedbackWrapper>
        )
    }
}

export default Form.create({ name: 'feedback_form' })(Feedback);