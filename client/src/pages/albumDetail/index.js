import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter, Link} from "react-router-dom";
import {
    DetailWrapper,
    AlbumInfoArea,
    AlbumHead,
    AlbumAuthor,
    AlbumScoreCircle,
    AlbumBody,
    AlbumTitle,
    AlbumInfo,
    CommentsInfo,
    CommentWrite,
    CommentList
} from "./style";
import {actionCreators} from "./store";
import {createLoadingSelector} from "../../common/utils/selectors";
import {Button, Comment, Divider, Skeleton, Tooltip, Avatar, Rate, Input, Form} from "antd";
import moment from "moment";
import {GetDateStr} from "../../common/utils/dateUtils";
import {Title} from "../../common/style";

const { TextArea } = Input;

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <div>
        <Form.Item>
            <TextArea rows={2} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Rate defaultValue={5}/>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                Add Comment
            </Button>
        </Form.Item>
    </div>
);

class AlbumDetail extends Component {
    state = {
        submitting: false,
        value: '',
        rate: 5
    };
    componentDidMount() {
        const { getAlbum, getAlbumComments } = this.props;
        getAlbum(this.props.match.params.id);
    }

    handleSubmit = () => {
        const {album, addComment, currentUser} = this.props;
        if (!this.state.value || !this.state.rate) {
            return;
        }
        this.setState({
            submitting: true,
        });
        let comment = {
            userId: currentUser.get("id"),
            userName: currentUser.get("username"),
            imgUrl: currentUser.get("imgUrl"),
            albumId: album.get("albumsId"),
            content: this.state.value,
            star: this.state.rate,
            publishTime: moment(new Date()).format("YYYY-MM-DD hh:mm:ss"),
        };
        addComment(comment);

        setTimeout(() => {
            this.setState({
                submitting: false,
                value: ''
            });
        }, 1000);
    };

    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    handleRateChange = value => {
        this.setState({rate: value})
    };

    render() {
        const { album, comments, isLoading, currentUser} = this.props;
        let oneDayBefore = GetDateStr(-3);
        return (
            <DetailWrapper>
                <AlbumInfoArea>
                    <Skeleton loading={isLoading} active>
                        <AlbumHead>
                            <AlbumAuthor>
                                <h2>{album.get("author")}</h2>
                                <h1>{album.get("albumsName")}</h1>
                                <Button>BUY THIS</Button>
                            </AlbumAuthor>
                            <img className="album-img" alt={album.get("imgUrl")} src={album.get("imgUrl")}/>
                            <AlbumScoreCircle><div>{album.get("score")}</div></AlbumScoreCircle>
                        </AlbumHead>
                        <AlbumBody>
                            <AlbumTitle>
                                <p className="busker">BY: <Link to={"/busker/detail/" + album.get("buskerId")}>{album.get("buskerName")}</Link></p>
                                <p className="time">{moment(album.get("publishTime")).isAfter(oneDayBefore) ? moment(album.get("publishTime"), "YYYYMMDD").fromNow() : moment(album.get("publishTime")).format('MMMM DD YYYY')}</p>
                            </AlbumTitle>
                            <AlbumInfo>
                                <p className="des">{album.get("describe")}</p>
                            </AlbumInfo>
                        </AlbumBody>
                        <CommentsInfo>
                            <Title><span>Comments</span></Title>
                            {currentUser.size === 0 ? null : <CommentWrite>
                                <Comment
                                    avatar={
                                        <Avatar
                                            src={currentUser.get("imgUrl")}
                                            alt={currentUser.get("imgUrl")}
                                            size={50}
                                        />
                                    }
                                    content={
                                        <div>
                                            <Form.Item>
                                                <TextArea rows={2} onChange={this.handleChange} value={this.state.value} />
                                            </Form.Item>
                                            <Form.Item>
                                                <Rate onChange={this.handleRateChange} defaultValue={this.state.rate}/>
                                                <Button htmlType="submit" loading={this.state.submitting} onClick={this.handleSubmit} type="primary">
                                                    Add Comment
                                                </Button>
                                            </Form.Item>
                                        </div>
                                    }
                                />
                            </CommentWrite>}

                            <CommentList>
                            {comments.map((item) => {
                                return (
                                    <Comment
                                        actions={[<span><Rate disabled defaultValue={item.get("star")}/></span>]}
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
                                            <Tooltip title={item.get("publishTime")}>
                                                <span>{moment(item.get("publishTime")).format("lll")}</span>
                                            </Tooltip>
                                        }
                                    />
                                )
                            })}
                            </CommentList>
                        </CommentsInfo>
                    </Skeleton>
                </AlbumInfoArea>
            </DetailWrapper>
        )
    }
}

const loadingSelector = createLoadingSelector(['GET_ALBUM', 'GET_ALBUM_COMMENTS']);
const mapStateToProps = (state) => {
    return {
        album: state.get("albumDetail").get("album"),
        comments: state.get("albumDetail").get("comments"),
        currentUser: state.get("login").get("currentUser"),
        isLoading: loadingSelector(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAlbum(albumId){
            dispatch(actionCreators.getAlbum(albumId));
            dispatch(actionCreators.getAlbumComments(albumId));
        },
        addComment(comment){
            dispatch(actionCreators.addComment(comment));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AlbumDetail));