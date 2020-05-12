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
    SingleBody,
    CommentsInfo,
    CommentWrite,
    CommentList
} from "./style";
import {actionCreators} from "./store";
import {createLoadingSelector} from "../../common/utils/selectors";
import {Button, Comment, Skeleton, Avatar, Rate, Input, Form} from "antd";
import moment from "moment";
import {GetDateStr} from "../../common/utils/dateUtils";
import {Title} from "../../common/style";
import {getCookie} from "../../common/utils/cookieUtils";
import AlbumSingle from "../../common/components/AlbumSingle";
import RootComment from "../../common/components/RootComment";

const { TextArea } = Input;

class AlbumDetail extends Component {
    state = {
        submitting: false,
        value: '',
        rate: 5,
        commentShow: false
    };
    constructor(props){
        super(props);
        this.subCommentElement = React.createRef();
    }
    componentDidMount() {
        const { getAlbum } = this.props;
        let isLogin = getCookie("isLogin");
        if (isLogin) {//如果登录则传用户id
            let currentUser = JSON.parse(localStorage.getItem('currentUser'));
            getAlbum(this.props.match.params.id, currentUser.id);
        } else {
            getAlbum(this.props.match.params.id, -1);
        }
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
            albumId: album.get("albumsId"),
            typeId: 4,
            content: this.state.value,
            star: this.state.rate,
            publishTime: moment(new Date()).valueOf(),
        };
        let userThing = {
            username: currentUser.get("username"),
            imgUrl: currentUser.get("imgUrl")
        };
        addComment(comment, userThing);

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

    getAlbumBuyButton = status => {
        let result;
        switch (status) {
            case 1: result=(<Button>BUY THIS</Button>); break;
            case 2: result=(<h3>Coming soon</h3>);break;
            case 3: result=(<h3>Off shelf</h3>);break;
            case 4: result=(<h3>Deleted</h3>); break;
            default: result=(<Button>BUY THIS</Button>);break;
        }
        return result;
    };

    render() {
        const { album, haveAlbum, comments, singles, isLoading, currentUser} = this.props;
        let oneDayBefore = GetDateStr(-3);
        return (
            <DetailWrapper>
                <AlbumInfoArea>
                    <Skeleton loading={isLoading} active>
                        <AlbumHead>
                            <AlbumAuthor>
                                <h2>{album.get("author")}</h2>
                                <h1>{album.get("albumsName")}</h1>
                                <p className="price">$ {album.get("price")}</p>
                                {haveAlbum ? <h3>Thank you for buying!</h3> : this.getAlbumBuyButton(album.get("albumStatus"))}
                            </AlbumAuthor>
                            <img className="album-img" alt={album.get("imgUrl")} src={album.get("imgUrl")}/>
                            <AlbumScoreCircle><div>{album.get("score")}</div></AlbumScoreCircle>
                        </AlbumHead>
                        <AlbumBody>
                            <AlbumTitle>
                                <p className="sales">{album.get("sales")} People Got</p>
                                <p className="busker">BY: <Link to={"/busker/detail/" + album.get("buskerId")}>{album.get("buskerName")}</Link></p>
                                <p className="time">{moment(album.get("publishTime")).isAfter(oneDayBefore) ? moment(album.get("publishTime"), "YYYYMMDD").fromNow() : moment(album.get("publishTime")).format('MMMM DD YYYY')}</p>
                            </AlbumTitle>
                            <AlbumInfo>
                                <p className="des">{album.get("describe")}</p>
                            </AlbumInfo>
                        </AlbumBody>
                        <SingleBody>
                            <Title><span>Singles</span></Title>
                            {singles.map((item) => {
                                return (
                                    <AlbumSingle key={item.get("singleId")} single={item} albumImg={album.get("imgUrl")} haveAlbum={haveAlbum}/>
                                )
                            })}
                        </SingleBody>
                        <CommentsInfo>
                            <Title><span>Comments</span></Title>
                            {!haveAlbum ? null : <CommentWrite>
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
                                                <Button htmlType="submit" loading={this.state.submitting} onClick={this.handleSubmit} style={{marginLeft: 20}} type="primary">
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
                                    <RootComment key={item.get("commentId")} comment={item} user={currentUser} albumId={album.get("albumsId")} haveAlbum={haveAlbum}/>
                                )
                            }, this)}
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
        haveAlbum: state.get("albumDetail").get("haveAlbum"),
        comments: state.get("albumDetail").get("comments"),
        singles: state.get("albumDetail").get("singles"),
        currentUser: state.get("login").get("currentUser"),
        isLogged: state.get("login").get("isLogged"),
        isLoading: loadingSelector(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAlbum(albumId, userId){
            dispatch(actionCreators.getAlbum(albumId, userId));
            dispatch(actionCreators.getAlbumComments(albumId));
            dispatch(actionCreators.getAlbumSingles(albumId));
        },
        addComment(comment, userThing){
            dispatch(actionCreators.addComment(comment, userThing));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AlbumDetail));