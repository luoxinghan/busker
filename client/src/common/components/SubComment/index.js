import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import axios from "axios";
import {Avatar, Button, Comment, Input, message, Skeleton, Tooltip} from "antd";
import moment from "moment";
import {fromJS} from "immutable";
import {CommentInputArea} from "../RootComment/style";

class SubComment extends Component {
    state = {
        comment: null,
        reply: false,
        submitting: false,
        value: '',
        loading: false
    };
    changeSubState = (commentId) => {
        let comment = null;
        this.setState({loading: true});
        axios.post("/api/comment/sub", {commentId})
            .then((res)=>{
                comment = res.data.data.subcomments;
                this.setState({
                    loading: false,
                    comment: fromJS(comment)
                });
            }).catch(()=>{
                message.error("/api/comment/sub 404");
        });
    };
    clickReply = () => {
        this.setState({
            reply: !this.state.reply
        })
    };

    handleSubmit = (commentId) => {
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
            parentId: commentId,
            publishTime: moment(new Date()).valueOf(),
        };

        axios.post("/api/comment/subAdd", comment)
            .then((res)=>{
                comment = res.data.data.subcomments;
                this.setState({
                    submitting: false,
                    value: ''
                });
                window.location.reload()
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
        let hasReplies = Boolean(this.props.comment.get("hasReplies"));
        const {submitting, value} = this.state;
        if (hasReplies){
            const replyNum = this.props.comment.get("hasReplies");
            return (
                <div>
                    <Skeleton loading={this.state.loading} active>
                        <div>
                            <a onClick={() => this.changeSubState(this.props.comment.get("commentId"))}>
                                View {replyNum === 1 ? (replyNum  + " reply") : (replyNum  + " replies")}
                            </a>
                        </div>
                        {this.state.comment ? this.state.comment.map((item)=>{
                            return (
                                <div key={item.get("commentId")}>
                                    <Comment
                                        actions={this.props.haveAlbum ? [<span key="comment-nested-reply-to" onClick={()=>this.clickReply()}>{this.state.reply ? "Cancel" : "Reply to"}</span>] : null}
                                        key = {item.get("commentId")}
                                        author={<a>{item.get("userName")}</a>}
                                        avatar={
                                            <Avatar
                                                src={item.get("imgUrl")}
                                                alt={item.get("userName")}
                                                size={50}
                                            />
                                        }
                                        content={
                                            <p>
                                                {item.get("content")}
                                            </p>
                                        }
                                        datetime={
                                            <Tooltip title={moment(item.get("publishTime")).format("YYYY-MM-DD, hh:mm:ss")}>
                                                <span>{moment(item.get("publishTime")).format("lll")}</span>
                                            </Tooltip>
                                        }
                                    >
                                        <CommentInputArea className="root-comment" display={this.state.reply ? "block" : "none"}>
                                            <Input onChange={this.handleChange} value={value} />
                                            <Button htmlType="submit" loading={submitting} onClick={()=>this.handleSubmit(item.get("commentId"))} type="primary">
                                                Send
                                            </Button>
                                        </CommentInputArea>
                                        <SubComment comment={item} user={this.props.user} albumId={this.props.albumId}/>
                                    </Comment>
                                </div>
                            )
                        }): null}
                    </Skeleton>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default withRouter(SubComment);