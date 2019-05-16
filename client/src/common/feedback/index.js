import React, {Component} from "react";
import {Form, Input} from 'antd';
import {
    FeedbackWrapper,
    FeedbackHeader
} from "./style";

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
                <FeedbackHeader>
                    <h3>Feedback</h3>
                </FeedbackHeader>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item>
                        {getFieldDecorator('feedback')(<Input.TextArea
                            onPressEnter={this.handleSubmit}
                            rows={10}
                            placeholder="Please explain your question or share your thoughts. (Enter to submit)"/>)}
                    </Form.Item>
                </Form>
            </FeedbackWrapper>
        )
    }
}

export default Form.create({ name: 'feedback_form' })(Feedback);