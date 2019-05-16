import React, {Component} from "react";
import {connect} from "react-redux";
import {actionCreators} from "./store";
import {actionCreators as updateActionCreator} from "../../updates/buskerUpdate/store";
import {Button} from "antd";
import {Link, withRouter} from "react-router-dom";
import {
    BuskerDetailWrapper,
    BuskerProfileWrapper,
    ProfileInfo,
    BuskerTrailWrapper,
    BuskerMomentWrapper,
    Title,
    TrailList,
    TrailItem,
    MomentList,
    MomentItem,
    MomentInfo
} from "./style";

class BuskerDetail extends Component{
    render() {
        const {busker, currentUser,currentUpdateBusker,cleanBuskerUpdate} = this.props;
        if (currentUpdateBusker!==null){
            cleanBuskerUpdate()
        }
        return (
            <BuskerDetailWrapper>
                <BuskerProfileWrapper>
                    <img
                        className="profile-pic"
                        alt={busker.get("imgUrl")}
                        src={busker.get("imgUrl")} />
                    <ProfileInfo>
                        <h3 className="name">{busker.get("buskerName")}</h3>
                        <p>{busker.get("sex") === 1 ? "♂" : "♀"} 23</p>
                        <p>{busker.get("instrument")}</p>
                        <p>{busker.get("introduce")}</p>
                    </ProfileInfo>
                    {currentUser.get("id") === busker.get("id") ? <Link to={"/busker/update/" + busker.get("id")}><Button>Edit Profile</Button></Link> : null}
                </BuskerProfileWrapper>
                <BuskerTrailWrapper>
                    <Title>
                        <h3>Trails</h3>
                        {currentUser.get("id") === busker.get("id") ? <Link to={"/trail/add"}><Button>New Trail</Button></Link> :null}
                    </Title>
                    <TrailList>
                        {
                            typeof(busker.get("trails")) == "undefined" ? "" :
                            busker.get("trails").map((item) => {
                                return (
                                    <TrailItem key={item.get("id")}>
                                        <img
                                            className="trail-pic"
                                            alt={item.get("imgUrl")}
                                            src={item.get("imgUrl")}/>
                                        <p className="time">{BuskerDetail.getSomeTime(item.get("time"))}</p>
                                        <p className="address">{item.get("address")}</p>
                                    </TrailItem>
                                )
                            })
                        }
                    </TrailList>
                </BuskerTrailWrapper>
                <BuskerMomentWrapper>
                    <Title>
                        <h3>Moments</h3>
                        {currentUser.get("id") === busker.get("id") ? <Button>New Moment</Button> : null}
                    </Title>
                    <MomentList>
                        {
                            typeof(busker.get("moments")) == "undefined" ? "" :
                                busker.get("moments").map((item) => {
                                    return (
                                        <Link key={item.get("id")} to={'/moment/detail/' + item.get("id")}>
                                            <MomentItem>
                                                <img
                                                    className="moment-pic"
                                                    alt={item.get("id")}
                                                    src={BuskerDetail.getImgUrl(item.get("images"), item.get("videos"))}/>
                                                <MomentInfo>
                                                    <div>
                                                        <p className="tendency"><span className="iconfont">&#xe72f;</span>{item.get("tendency")}</p>
                                                        <p className="add-time">{item.get("address")} {BuskerDetail.getAllTime(item.get("time"))}</p>
                                                    </div>
                                                    <p className="content">{item.get("describe")}</p>
                                                </MomentInfo>
                                            </MomentItem>
                                        </Link>
                                    )
                                })
                        }
                    </MomentList>
                </BuskerMomentWrapper>
            </BuskerDetailWrapper>
        );
    }
    componentDidMount() {
        this.props.getBuskerDetail(this.props.match.params.id);
    }
    static getImgUrl(images, videos){
        let imgUrl = "";
        if (images.size === 0 && videos.size === 0){
            imgUrl = "";
        } else if (videos.size === 0) {
            imgUrl = images.get(0).get("imageUrl");
        } else {
            imgUrl = "https://img.youtube.com/vi/"+ videos.get(0).get("videoUrl") +"/mqdefault.jpg";
        }
        return imgUrl;
    }

    static getSomeTime(time){
        let lastIndex = time.lastIndexOf("T");
        time = time.substring(0, lastIndex);
        return time;
    }

    static getAllTime(time){
        let lastIndex = time.lastIndexOf(".");
        time = time.substring(0, lastIndex);
        time = time.replace("T"," ");
        return time;
    }
}

const mapStateToProps = (state) => {
    return {
        busker: state.get("buskerDetail").get("busker"),
        currentUser: state.get("login").get("currentUser"),
        currentUpdateBusker: state.get("buskerUpdate").get("currentBusker")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getBuskerDetail(id){
            dispatch(actionCreators.getBuskerDetail(id));
        },
        cleanBuskerUpdate(){
            dispatch(updateActionCreator.cleanBuskerUpdate());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BuskerDetail));