import React, {Component} from "react";
import {connect} from "react-redux";
import {Button, Row, Col} from "antd";
import "antd/dist/antd.css";
import {actionCreators} from "./store";
import {actionCreators as registerAC} from "../../adds/register/store";
import {
    HomeWrapper,
    HomeVideoWrapper,
    AlbumsWrapper,
    AlbumsItem,
    AlbumsImg,
    AlbumsInfo,
    InfoName,
    Score,
    HomeWebDes, VideoSection
} from "./style";
import {Title} from "../../common/style";
import YouTube from "react-youtube";
import {Link} from "react-router-dom";
import HomeVideo from "../../statics/video/tbp_01.mp4"

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
    changeToRegister = (userType) => {
        if (userType === 1) {
            this.props.switchUserType(1);
        }
        if (userType === 3){
            this.props.switchUserType(3);
        }
        this.props.history.push("/register");
    };
    render() {
        const {homeWebDes, homeAlbums} = this.props;
        return (
            <HomeWrapper>
                {/*<HomeCarousel>
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
                </HomeCarousel>*/}
                <VideoSection>
                    <div className="video-mask"/>
                    <video autoPlay loop>
                        <source src={HomeVideo} type="video/mp4"/>
                    </video>
                    <div className="container">
                        <h1>Descover amazing street performers</h1>
                        <Row gutter={16} justify="space-around" type="flex">
                            <Col span={10}>
                                <Button onClick={()=>{this.changeToRegister(1)}}>JOIN AS A BUSKER</Button>
                            </Col>
                            <Col span={10}>
                                <Button onClick={()=>{this.changeToRegister(3)}}>JOIN AS A FAN</Button>
                            </Col>
                        </Row>
                    </div>
                </VideoSection>
                <AlbumsWrapper>
                    <Title><span>Recommended for you</span></Title>
                    { homeAlbums.map((item) => {
                        return (
                            <Link to={"/album/detail/" + item.get("id")} key={item.get("id")}>
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
                            </Link>
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
        },
        switchUserType(userType) {
            dispatch(registerAC.changeUserType(userType));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);