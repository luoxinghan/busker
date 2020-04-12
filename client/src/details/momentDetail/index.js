import React, {Component} from "react";
import {connect} from "react-redux";
import {actionCreators} from "./store";
import {Carousel, Skeleton} from "antd";
import YouTube from "react-youtube";
import {
    MomentDetailWrapper,
    MomentDetailInfo,
    BuskerDetail,
    MomentDescribe,
    BuskerName,
    MomentImgWrapper,
    ImgCarouselItem,
    MomentContent,
    MomentVideo,
    VideoItem
} from "./style";
import {createLoadingSelector} from "../../common/utils/selectors";
import moment from "moment";
import {Title} from "../../common/style";
import {Link} from "react-router-dom";

const opts = {
    height: '185',
    width: '320',
    playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
    }
};

class MomentDetail extends Component{
    render() {
        const {momentDetail, isLoading} = this.props;
        if (momentDetail.size === 0) {
            return (
                <MomentDetailWrapper>
                    <MomentDetailInfo>
                        <Skeleton loading={isLoading} active/>
                    </MomentDetailInfo>
                </MomentDetailWrapper>
            );
        } else {
            return (
                <MomentDetailWrapper>
                    <MomentDetailInfo>
                        <Skeleton loading={isLoading} active>
                            <MomentImgWrapper>
                                {momentDetail.get("images").size === 0 ? "" : this.getImages(momentDetail.get("buskerName"), momentDetail.get("images"))}
                            </MomentImgWrapper>
                            <MomentContent>
                                <BuskerDetail>
                                    <BuskerName>By: <Link to={"/busker/detail/" + momentDetail.get("buskerId")}><span>{momentDetail.get("buskerName")}</span></Link></BuskerName>
                                    <p>Views: <span>{momentDetail.get("tendency")}</span></p>
                                    <p>{momentDetail.get("address")}</p>
                                    <p><span>{moment(momentDetail.get("time")).format("llll")}</span></p>
                                </BuskerDetail>

                                <MomentDescribe><p>{momentDetail.get("describe")}</p></MomentDescribe>
                            </MomentContent>
                            <Title><span>Videos</span></Title>
                            <MomentVideo>
                                {momentDetail.get("videos").size === 0 ? "" : this.getVideos(momentDetail.get("videos"))}
                            </MomentVideo>
                        </Skeleton>
                    </MomentDetailInfo>
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
                    <VideoItem key={item.get("id")}>
                        <YouTube
                            opts={opts}
                            videoId={item.get("videoUrl")}
                        />
                    </VideoItem>
                )
            })
        )
    }
}

const loadingSelector = createLoadingSelector(['GET_MOMENT_DETAIL']);
const mapStateToProps = (state) => {
    return {
        momentDetail: state.get("momentDetail").get("moment"),
        isLoading: loadingSelector(state)
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