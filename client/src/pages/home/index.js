import React, {Component} from "react";
import {connect} from "react-redux";
import {Carousel} from "antd";
import "antd/dist/antd.css";
import {actionCreators} from "./store";
import {
    HomeCarousel,
    HomeCarouselItem,
    HomeWebDes
} from "./style";


class Home extends Component {
    render() {
        const {homeImgList, homeWebDes} = this.props;
        return (
            <div>
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
                <HomeWebDes>
                    <h2 className="title">ABOUT BUSKER</h2>
                    <div className="des">{homeWebDes}</div>
                </HomeWebDes>
            </div>
        );
    }
    componentDidMount() {
        this.props.getHomeData();
    }
}

const mapStateToProps = (state) => {
    return {
        homeImgList: state.get("home").get("homeImgList"),
        homeWebDes: state.get("home").get("homeWebDes")
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