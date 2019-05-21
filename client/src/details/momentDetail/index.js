import React, {Component} from "react";
import {connect} from "react-redux";
import {actionCreators} from "./store";
import {Carousel} from "antd";
import YouTube from "react-youtube";
import {
    MomentDetailWrapper,
    DetailHeader,
    DetailBody,
    BuskerName,
    Tendency,
    MomentImgWrapper,
    ImgCarouselItem,
    MomentContent,
    MomentVideoWrapper,
    VideoItem,
    DetailBottom
} from "./style";

const opts = {
    height: '185',
    width: '320',
    playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
    }
};

class MomentDetail extends Component{
    render() {
        const {moment} = this.props;
        if (moment.size === 0) {
            return null;
        } else {
            return (
                <MomentDetailWrapper>
                    <DetailHeader>
                        <BuskerName><span className="iconfont">&#xe606;</span> {moment.get("buskerName")}</BuskerName>
                        <Tendency><span className="iconfont">&#xe72f;</span> {moment.get("tendency")}</Tendency>
                    </DetailHeader>
                    <DetailBody>
                        <MomentImgWrapper>
                            {moment.get("images").size === 0 ? "" : this.getImages(moment.get("buskerName"), moment.get("images"))}
                        </MomentImgWrapper>
                        <MomentContent>
                            {moment.get("describe")}
                        </MomentContent>
                    </DetailBody>
                    <MomentVideoWrapper>
                        {moment.get("videos").size === 0 ? "" : this.getVideos(moment.get("videos"))}
                    </MomentVideoWrapper>
                    <DetailBottom>
                        <BuskerName>{moment.get("address")}</BuskerName>
                        <Tendency>{MomentDetail.getAllTime(moment.get("time"))}</Tendency>
                    </DetailBottom>
                </MomentDetailWrapper>
            );
        }
    }
    componentDidMount() {
        this.props.getMomentDetail(this.props.match.params.id);
    }
    getImages(buskerName, images){
        return (
            <Carousel autoplay>
                {
                    images.map((item) => {
                        return (
                            <ImgCarouselItem key={item.get("id")} imgUrl={item.get("imageUrl")} >
                                <h3>{buskerName}</h3>
                            </ImgCarouselItem>
                        )
                    })
                }
            </Carousel>
        )
    }

    getVideos(videos) {
        return (
            videos.map((item)=>{
                return (
                    <VideoItem>
                    <YouTube
                        opts={opts}
                        videoId={item.get("videoUrl")}
                    />
                    </VideoItem>
                )
            })
        )
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
        moment: state.get("momentDetail").get("moment")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMomentDetail(id){
            dispatch(actionCreators.getMomentDetail(id));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MomentDetail);