import React, {Component} from "react";
import {connect} from "react-redux";
import { Typography, Empty } from 'antd';
import { actionCreators } from "./store";
import { withRouter } from "react-router-dom";
import "antd/dist/antd.css";
import {
    TrailWrapper,
    TrailList,
    TrailItem,
    TrailInfo,
    TrailListMore
} from "./style";

const { Paragraph } = Typography;

class Trail extends Component{
    render() {
        const { trailList, trailPage, getListMore, totalNum } = this.props;
        return (
            <TrailWrapper>
                <TrailList>
                    { trailList.size === 0 ?
                        <TrailItem>
                            <Empty/>
                        </TrailItem> : trailList.map((item, index)=>{
                            return (
                            <TrailItem key={index}>
                                <img
                                    className="poster-pic"
                                    alt="haibao"
                                    src={item.get("imgUrl")}
                                />
                                <TrailInfo>
                                    <p className="time">{Trail.getAllTime(item.get("time"))}</p>
                                    <h3 className="busker-name">{item.get("name")}</h3>
                                    <p className="address">{item.get("address")}</p>
                                    <Paragraph ellipsis={{ rows: 4, expandable: false }} className="des">
                                        {item.get("describe")}
                                    </Paragraph>
                                </TrailInfo>
                            </TrailItem>
                            )
                        })}
                </TrailList>
                {
                    (Trail.isOver(totalNum, trailPage, 5)) ? null :
                        <TrailListMore  onClick={()=> getListMore(trailPage)}>
                            ······
                        </TrailListMore>
                }
            </TrailWrapper>
        );
    }
    componentDidMount() {
        this.props.getTrailData();
    }
    static isOver(totalNum, trailPage, pageSize ){
        const totalPage = parseInt((totalNum + pageSize - 1) / pageSize);
        console.log(totalNum, trailPage, totalPage);
        return trailPage >= totalPage;
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
        trailList: state.get("trail").get("trailList"),
        trailPage: state.get("trail").get("trailPage"),
        totalNum: state.get("trail").get("totalNum")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTrailData(){
            dispatch(actionCreators.getTrailInfo());
        },
        getListMore(trailPage){
            dispatch(actionCreators.getTrailMore(trailPage))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Trail));