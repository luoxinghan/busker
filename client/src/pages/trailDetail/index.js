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
    ShareArea,
    TrailExtraInfo,
    BuskersList
} from "./style";
import {actionCreators} from "./store";
import {createLoadingSelector} from "../../common/utils/selectors";
import {Button, Divider, Skeleton} from "antd";
import {WeiboShareButton, WeiboIcon,VKShareButton,VKIcon, TwitterShareButton, TwitterIcon} from "react-share";
import moment from "moment";
import {Title, HorizontalTitle} from "../../common/style";

class TrailDetail extends Component {
    componentDidMount() {
        const { getTrail } = this.props;
        getTrail();
    }

    render() {
        const { trail, isLoading } = this.props;
        let buskerLink = null;
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
        }
        return (
            <DetailWrapper>
                <TrailInfoArea>
                    <Skeleton loading={isLoading} active>
                        <TrailCard>
                            <TrailImg src={trail.get("imgUrl")}/>
                            <TrailContent>
                                <h1 className="trail-name">{trail.get("trailName")}</h1>
                                <p><span className="title">TIME: </span><time>{moment(trail.get("time")).format('LLLL')}</time></p>
                                <p><span className="title">Busker: </span>{buskerLink}</p>
                                <p><span className="title">Site: </span>{trail.get("site")}</p>
                                <p><span className="title">Address: </span>{trail.get("address")}</p>
                                <p><span className="title">Telephone: </span>{trail.get("telephone")}</p>
                                <p><span className="title">Likes: </span>{trail.get("likes")}</p>
                                <LikeArea>
                                    <Button type="primary" icon="heart">LIKE</Button>
                                </LikeArea>
                                <ShareArea>
                                    <TwitterShareButton url={window.location.href} title="Come to see this perform!" hashtags={["busker"]}><TwitterIcon size={30} round /></TwitterShareButton>
                                    <WeiboShareButton url={window.location.href}><WeiboIcon size={30} round /></WeiboShareButton>
                                    <VKShareButton url={window.location.href} title="Come to see this perform!"><VKIcon size={30} round/></VKShareButton>
                                </ShareArea>
                            </TrailContent>
                        </TrailCard>
                    </Skeleton>
                    <Divider/>
                    <TrailExtraInfo>
                        <Title><span>Performance Information</span></Title>
                        <Skeleton loading={isLoading} active>
                            <HorizontalTitle><span>Buskers</span></HorizontalTitle>
                            <BuskersList>
                                {performList}
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
        isLoading: loadingSelector(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTrail(){
            dispatch(actionCreators.getTrail(1))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TrailDetail));