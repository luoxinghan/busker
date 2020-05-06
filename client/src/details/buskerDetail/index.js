import React, {Component} from "react";
import {connect} from "react-redux";
import {actionCreators} from "./store";
import {actionCreators as updateActionCreator} from "../../updates/buskerUpdate/store";
import {Button, Col, Row, Skeleton, Tooltip} from "antd";
import {Link, withRouter} from "react-router-dom";
import moment from "moment";
import {
    BuskerDetailWrapper,
    BuskerProfileWrapper,
    ProfileInfo,
    BuskerTrailWrapper,
    BuskerMomentWrapper,
    BuskerAlbumWrapper,
    Title,
    TrailsList,
    TrailItem,
    MomentList,
    MomentItem,
    MomentInfo,
    AlbumsList
} from "./style";
import {createLoadingSelector} from "../../common/utils/selectors";
import {AlbumExtra, AlbumImage, AlbumItem} from "../../pages/album/style";
import {GetDateStr} from "../../common/utils/dateUtils";
import {fromJS} from "immutable";

class BuskerDetail extends Component {

    getFilterStyle = item => {
        let filter = "";
        let status = "In stock";
        switch (item.get("albumStatus")) {
            case 1: filter = "none"; break;
            case 2: filter = "blur(2px)";status = "Coming soon";break;
            case 3: filter = "grayscale(60%)";status="Off shelf";break;
            case 4: filter = "opacity(20%)";status="Deleted"; break;
            default: filter = "none;";break;
        }

        return (
            <Tooltip title={status}>
                <AlbumItem filter={filter}>
                    <Link to={"/album/detail/" + item.get("albumsId")}>
                        <AlbumImage>
                            <img alt={item.get("albumsName")} src={item.get("imgUrl")}/>
                            <div className="title">
                                <p className="author">{item.get("author")}</p>
                                <h2 className="album-name">{item.get("albumsName")}</h2>
                            </div>
                        </AlbumImage>
                    </Link>
                    <AlbumExtra><p className="busker-name">Single Number: {item.get("singleNumber")}</p></AlbumExtra>
                    <time className="pub-date">{moment(item.get("publishTime")).isAfter(GetDateStr(-3)) ? moment(item.get("publishTime"), "YYYYMMDD").fromNow() : moment(item.get("publishTime")).format('MMMM DD YYYY')}</time>
                </AlbumItem>
            </Tooltip>
        );
    };

    isUndefined = data => {
        console.log("判断是否undefined",data);
    };

    render() {
        const {busker, trailList, albumsList, momentList, currentUser, loading} = this.props;
        return (
            <BuskerDetailWrapper>
                <Skeleton loading={loading}>
                    <BuskerProfileWrapper>
                        <img
                            className="profile-pic"
                            alt={busker.get("imgUrl")}
                            src={busker.get("imgUrl")}/>
                        <ProfileInfo>
                            <h1 className="name">{busker.get("buskerName")}</h1>
                            <p>{busker.get("age")} Year Old {busker.get("sex") === 1 ? "Male" : "Female"}</p>
                            <p><span>INSTRUMENT: </span>{busker.get("instrument")}</p>
                            <p><span>INTRODUCE: </span>{busker.get("introduce")}</p>
                            <p><span>HOT POINT: </span>{busker.get("tendencyAllHot")}</p>
                        </ProfileInfo>
                        {currentUser.get("id") === busker.get("id") ?
                            <Link to={"/busker/update/" + busker.get("id")}><Button>Edit Profile</Button></Link> : null}
                    </BuskerProfileWrapper>
                    <BuskerTrailWrapper>
                        <Title>
                            <h2>Trails</h2>
                            {currentUser.get("id") === busker.get("id") ?
                                <Link to={"/trail/add"}><Button>New Trail</Button></Link> : null}
                        </Title>
                        <TrailsList>
                            {
                                typeof (trailList) == "undefined" ? "" :
                                    trailList.map((item) => {
                                        return (
                                            <TrailItem key={item.get("id")}>
                                                <img
                                                    className="trail-pic"
                                                    alt={item.get("imgUrl")}
                                                    src={item.get("imgUrl")}/>
                                                <h3>{item.get("buskers")}</h3>
                                                <p><span>TIME: </span>{moment(item.get("performingTime")).fromNow()}</p>
                                                <p><span>ADDRESS: </span>{item.get("performAddress")}</p>
                                                <p><span>LIKES: </span>{item.get("likes")}</p>
                                            </TrailItem>
                                        )
                                    })
                            }
                        </TrailsList>
                    </BuskerTrailWrapper>
                    <BuskerAlbumWrapper>
                        <Title>
                            <h2>Albums</h2>
                            {currentUser.get("id") === busker.get("id") ?
                                <Link to={"/album/add"}><Button>New Album</Button></Link> : null}
                        </Title>
                        <AlbumsList>
                            <Row className="flow" justify="space-between" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                {albumsList.map((item) => {
                                    return (
                                        <Col key={item.get("albumsId")} className="item" span={4}>
                                            {this.getFilterStyle(item)}
                                        </Col>
                                    )
                                })}
                            </Row>
                        </AlbumsList>
                    </BuskerAlbumWrapper>
                    <BuskerMomentWrapper>
                        <Title>
                            <h2>Moments</h2>
                            {currentUser.get("id") === busker.get("id") ?
                                <Link to={"/moment/add"}><Button>New Moment</Button></Link> : null}
                        </Title>
                        <MomentList>
                            {
                                typeof (momentList) == "undefined" ? "" :
                                    momentList.map((item) => {
                                        return (
                                            <Link key={item.get("id")} to={'/moment/detail/' + item.get("id")}>
                                                <MomentItem>
                                                    <img
                                                        className="moment-pic"
                                                        alt={item.get("id")}
                                                        src={BuskerDetail.getImgUrl(item.get("images"), item.get("videos"))}/>
                                                    <MomentInfo>
                                                        <h2>{item.get("buskerName")}</h2>
                                                        <div>
                                                            <p className="tendency"><span
                                                                className="iconfont">&#xe72f;</span>{item.get("tendency")}
                                                            </p>
                                                            <p className="add-time">{moment(item.get("time")).format("llll")}</p>
                                                        </div>
                                                        <p className="content">{item.get("describe")}</p>
                                                        <p className="address"><span>ADDRESS: </span>{item.get("address")}</p>
                                                    </MomentInfo>
                                                </MomentItem>
                                            </Link>
                                        )
                                    })
                            }
                        </MomentList>
                    </BuskerMomentWrapper>
                </Skeleton>
            </BuskerDetailWrapper>
        );
    }

    componentDidMount() {
        let buskerId = this.props.match.params.id;
        let days = 10;
        this.props.getBuskerDetail({buskerId, days});
    }

    static getImgUrl(images, videos) {
        let imgUrl = "";
        if (typeof images === "undefined" && typeof videos === "undefined"){
            return imgUrl;
        } else if (typeof images === "undefined"){
            images = fromJS([]);
        } else if (typeof videos === "undefined"){
            videos = fromJS([]);
        }

        if (images.size === 0 && videos.size === 0) {
            imgUrl = "";
        } else if (videos.size === 0) {
            imgUrl = images.get(0).get("imageUrl");
        } else {
            imgUrl = "https://img.youtube.com/vi/" + videos.get(0).get("videoUrl") + "/mqdefault.jpg";
        }
        return imgUrl;
    }
}

const loadingSelector = createLoadingSelector(['GET_BUSKER_DETAIL', 'GET_BUSKER_TRAILS','GET_BUSKER_ALBUMS','GET_BUSKER_MOMENTS']);
const mapStateToProps = (state) => {
    return {
        busker: state.get("buskerDetail").get("busker"),
        trailList: state.get("buskerDetail").get("trailList"),
        albumsList: state.get("buskerDetail").get("albumsList"),
        momentList: state.get("buskerDetail").get("momentList"),
        currentUser: state.get("login").get("currentUser"),
        loading: loadingSelector(state),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getBuskerDetail(data) {
            dispatch(actionCreators.getBuskerDetail(data));
            dispatch(actionCreators.getTrails({buskerId: data.buskerId}));
            dispatch(actionCreators.getAlbums({buskerId: data.buskerId}));
            dispatch(actionCreators.getMoments({buskerId: data.buskerId}));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BuskerDetail));