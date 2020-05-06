import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import axios from "axios";
import {Avatar, Comment, message, Rate, Skeleton, Tooltip} from "antd";
import moment from "moment";
import SubComment from "../SubComment";
import {CommentInputArea} from "./style";
import {Form, Input, Button} from "antd";


class RootComment extends Component {
    state = {
        reply: false,
        submitting: false,
        value: ''
    };

    clickReply = () => {
        this.setState({
            reply: !this.state.reply
        })
    };

    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }

        this.setState({
            submitting: true,
        });
        let user = this.props.user;
        let comment = {
            userId: user.get("id"),
            albumId: this.props.albumId,
            typeId: 4,
            content: this.state.value,
            parentId: this.props.comment.get("commentId"),
            publishTime: moment(new Date()).valueOf(),
        };
        // let userThing = {
        //     username: user.get("username"),
        //     imgUrl: user.get("imgUrl")
        // };

        axios.post("/api/comment/subAdd", comment)
            .then((res)=>{
                comment = res.data.data.subcomments;
                this.setState({
                    submitting: false,
                    value: ''
                });
                window.location.reload();
            }).catch(()=>{
                message.error("/api/comment/subAdd 404");
        });
    };

    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        let rootComment = this.props.comment;
        const {submitting, value} = this.state;
        return (
            <Comment
                actions={[<span><Rate disabled defaultValue={rootComment.get("star")}/> {this.props.haveAlbum ? <span key="comment-nested-reply-to" onClick={()=>this.clickReply()}>{this.state.reply ? "Cancel" : "Reply to"}</span> : null}</span>]}
                key={rootComment.get("commentId")}
                author={<a>{rootComment.get("userName")}</a>}
                avatar={
                    <Avatar
                        src={rootComment.get("imgUrl")}
                        alt={rootComment.get("userName")}
                        size={50}
                    />
                }
                content={
                    <p>
                        {rootComment.get("content")}
                    </p>
                }
                datetime={
                    <Tooltip title={moment(rootComment.get("publishTime")).format("YYYY-MM-DD, hh:mm:ss")}>
                        <span>{moment(rootComment.get("publishTime")).format("lll")}</span>
                    </Tooltip>
                }
            >
                <CommentInputArea className="root-comment" display={this.state.reply ? "block" : "none"}>
                    <Input onChange={this.handleChange} value={value} />
                    <Button htmlType="submit" loading={submitting} onClick={this.handleSubmit} type="primary">
                        Send
                    </Button>
                </CommentInputArea>
                <SubComment comment={rootComment} user={this.props.user} albumId={this.props.albumId} haveAlbum={this.props.haveAlbum}/>
            </Comment>
        )
    }
}

export default withRouter(RootComment);