import React, {Component} from "react";
import {connect} from "react-redux";
import {Carousel} from "antd";
import "antd/dist/antd.css";
import {actionCreators} from "./store";
import {
    HomeWrapper,
    HomeCarousel,
    HomeCarouselItem,
    HomeVideoWrapper,
    AlbumsWrapper,
    AlbumsItem,
    AlbumsImg,
    AlbumsInfo,
    InfoName,
    Score,
    HomeWebDes
} from "./style";
import {Title} from "../../common/style";
import YouTube from "react-youtube";

const opts = {
    width: '100%',
    height: '630',
    playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        iv_load_policy: 3,
        loop: 1
    }
};

class Home extends Component {
    render() {
        const {homeImgList, homeWebDes, homeAlbums} = this.props;
        return (
            <HomeWrapper>
                <HomeCarousel>
                    <Carousel autoplay>
                        {
                            homeImgList.map((item) => {
                                return (
                                    <HomeCarouselItem key={item.get("id")} imgUrl={item.get("imgUrl")}>
                                        <h3>{item.get("content")}</h3>
                                    </HomeCarouselItem>
                                )
                            })
                        }
                    </Carousel>
                </HomeCarousel>
                <AlbumsWrapper>
                    <Title><span>Recommended for you</span></Title>
                    { homeAlbums.map((item) => {
                        return (
                            <AlbumsItem>
                                <AlbumsImg>
                                    <img className="album-img" src={item.get("imgUrl")} alt={item.get("imgUrl")}/>
                                    <p>By: <span className="busker-name">{item.get("buskerName")}</span></p>
                                </AlbumsImg>
                                <AlbumsInfo>
                                    <InfoName>
                                        <div className="left-info">
                                            <h2>{item.get("author")}</h2>
                                            <h1>{item.get("albumName")}</h1>
                                        </div>
                                        <Score>
                                            {item.get("score")}
                                        </Score>
                                    </InfoName>
                                    <p>{item.get("describe")}</p>
                                </AlbumsInfo>
                            </AlbumsItem>
                        )
                    })}
                </AlbumsWrapper>
                <HomeVideoWrapper>
                    <YouTube
                        opts={opts}
                        videoId="94kGI60J-k4"
                    />
                </HomeVideoWrapper>
                <HomeWebDes>
                    <Title><span>About Busker</span></Title>
                    <p className="des">{homeWebDes}</p>
                </HomeWebDes>
            </HomeWrapper>
        );
    }
    componentDidMount() {
        this.props.getHomeData();
    }
}

const mapStateToProps = (state) => {
    return {
        homeImgList: state.get("home").get("homeImgList"),
        homeWebDes: state.get("home").get("homeWebDes"),
        homeAlbums: state.get("home").get("homeAlbums")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getHomeData(){
            dispatch(actionCreators.getHomeData());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);