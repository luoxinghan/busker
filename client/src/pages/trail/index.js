import React, {Component} from "react";
import {connect} from "react-redux";
import { Typography, Empty } from 'antd';
import { actionCreators } from "./store";
import {Link, withRouter} from "react-router-dom";
import "antd/dist/antd.css";
import {
    TrailWrapper,
    TrailList,
    TrailItem,
    TrailInfo,
    TrailListMore
} from "./style";
import moment from "moment";

const { Paragraph } = Typography;

let perpage = 2;

class Trail extends Component{
    render() {
        const { trailShow, current, totalPage} = this.props;
        return (
            <TrailWrapper>
                <TrailList>
                    { trailShow.size === 0 ?
                        <TrailItem>
                            <Empty/>
                        </TrailItem> : trailShow.map((item, index)=>{
                            return (
                            <Link key={item.get("id")} to={"/trail/detail/" + item.get("id")}>
                                <TrailItem>
                                    <img
                                        className="poster-pic"
                                        alt="haibao"
                                        src={item.get("imgUrl")}
                                    />
                                    <TrailInfo>
                                        <h3 className="busker-name">{item.get("trailName")}</h3>
                                        <p className="time">{moment(item.get("time")).format("LLLL")}</p>
                                        <p className="address">{item.get("address")} <span>{item.get("site")}</span></p>
                                        <Paragraph ellipsis={{ rows: 4, expandable: false }} className="des">
                                            {item.get("describe")}
                                        </Paragraph>
                                    </TrailInfo>
                                </TrailItem>
                            </Link>
                            )
                        })}
                </TrailList>
                {
                    (current >= totalPage) ? null :
                        <TrailListMore  onClick={()=> this.nextPage()}>
                            ······
                        </TrailListMore>
                }
            </TrailWrapper>
        );
    }
    componentDidMount() {
        this.props.getTrailData(perpage);
    }

    nextPage(){
        const { current } = this.props;
        this.props.changePage(perpage, current + 1);
    }
}

const mapStateToProps = (state) => {
    return {
        trailList: state.get("trail").get("trailList"),
        trailShow: state.get("trail").get("trailShow"),
        totalPage: state.get("trail").get("totalPage"),
        current: state.get("trail").get("current")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTrailData(perpage){
            dispatch(actionCreators.getTrailInfo(perpage));
        },
        changePage(perpage, current){
            dispatch(actionCreators.changePage(perpage, current))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Trail));