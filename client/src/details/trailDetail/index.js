import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter, Link} from "react-router-dom";
import {
    DetailWrapper,
    TrailInfoArea,
    TrailCard,
    TrailImg,
    TrailContent,
    LikeArea,
    TrailExtraInfo,
    BuskersList
} from "./style";
import {actionCreators} from "./store";
import {createLoadingSelector} from "../../common/utils/selectors";
import {Button, Divider, message, Skeleton} from "antd";
import moment from "moment";
import {Title, HorizontalTitle} from "../../common/style";
import {getCookie} from "../../common/utils/cookieUtils";

class TrailDetail extends Component {
    componentDidMount() {
        const { getTrail } = this.props;
        let isLogin = getCookie("isLogin");
        if (isLogin) {//如果登录则传用户id
            let currentUser = JSON.parse(localStorage.getItem('currentUser'));
            getTrail(this.props.match.params.id, currentUser.id);
        } else {
            getTrail(this.props.match.params.id, -1);
        }
    }

    likeTrail = (trailId) => {
        let isLogin = getCookie("isLogin");
        if (!isLogin) {//如果登录则传用户id
            this.props.changeTrailLike(trailId, this.props.currentUser.get("id"));
        } else {
            message.info("Please login first.");
        }
    };

    render() {
        const { trail, isLoading, isLike } = this.props;
       /* let buskerLink = null;
        let performList = null;
        if (typeof trail.get("buskers") !== "undefined"){
            buskerLink = trail.get("buskers").map((item) => {
                return (
                    <Link to={"/busker/detail/" + item.get("id")} key={item.get("id")}>
                        {item.get("buskerName")} &nbsp;
                    </Link>
                )
            });

            performList = trail.get("buskers").map((item) => {
                return (
                    <div key={item.get("id")} className="busker-item">
                        <Link to={"/busker/detail/" + item.get("id")}>
                            <img alt={item.get("imgUrl")} src={item.get("imgUrl")} />
                            <p className="busker-name">{item.get("buskerName")}</p>
                        </Link>
                    </div>
                )
            })
        }*/
        return (
            <DetailWrapper>
                <TrailInfoArea>
                    <Skeleton loading={isLoading} active>
                        <TrailCard>
                            <TrailImg src={trail.get("imgUrl")}/>
                            <TrailContent>
                                <h1 className="trail-name">{trail.get("participant")}</h1>
                                <p><span className="title">TIME: </span><time>{moment(trail.get("performingTime")).format('LLLL')}</time></p>
                                <p><span className="title">Busker: </span><Link to={"/busker/detail/" + trail.get("buskerId")} key={trail.get("buskerId")}>{trail.get("buskerName")}</Link></p>
                                <p><span className="title">Address: </span>{trail.get("performAddress")}</p>
                                <p><span className="title">Likes: </span>{trail.get("likes")}</p>
                                <LikeArea>
                                    {isLike ? <Button type="primary" icon="smile" disabled>LIKE</Button> : <Button type="primary" icon="smile" onClick={()=>this.likeTrail(trail.get("id"))}>LIKE</Button>}
                                </LikeArea>
                                {/*<ShareArea>
                                    <TwitterShareButton url={window.location.href} title="Come to see this perform!" hashtags={["busker"]}><TwitterIcon size={30} round /></TwitterShareButton>
                                    <WeiboShareButton url={window.location.href}><WeiboIcon size={30} round /></WeiboShareButton>
                                    <VKShareButton url={window.location.href} title="Come to see this perform!"><VKIcon size={30} round/></VKShareButton>
                                </ShareArea>*/}
                            </TrailContent>
                        </TrailCard>
                    </Skeleton>
                    <Divider/>
                    <TrailExtraInfo>
                        <Title><span>Performance Information</span></Title>
                        <Skeleton loading={isLoading} active>
                            <HorizontalTitle><span>Buskers</span></HorizontalTitle>
                            <BuskersList>
                                <div key={trail.get("buskerId")} className="busker-item">
                                    <Link to={"/busker/detail/" + trail.get("buskerId")}>
                                        <img alt={trail.get("buskerImg")} src={trail.get("buskerImg")} />
                                        <p className="busker-name">{trail.get("buskerName")}</p>
                                    </Link>
                                </div>
                            </BuskersList>
                            <HorizontalTitle><span>Details</span></HorizontalTitle>
                            <div className="des">{trail.get("describe")}</div>
                        </Skeleton>
                    </TrailExtraInfo>
                </TrailInfoArea>
            </DetailWrapper>
        )
    }
}

const loadingSelector = createLoadingSelector(['GET_TRAIL']);
const mapStateToProps = (state) => {
    return {
        trail: state.get("trailDetail").get("trail"),
        isLike: state.get("trailDetail").get("isLike"),
        currentUser: state.get("login").get("currentUser"),
        isLoading: loadingSelector(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTrail(trailId, userId){
            dispatch(actionCreators.getTrail(trailId, userId))
        },
        changeTrailLike(trailId, userId){
            dispatch(actionCreators.likeTrail(trailId, userId))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TrailDetail));