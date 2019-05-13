import React, {Component} from "react";
import {connect} from "react-redux";
import { Typography, Empty } from 'antd';
import { actionCreators } from "./store";
import "antd/dist/antd.css";
import {
    PerformanceWrapper,
    PerformanceList,
    PerformanceItem,
    PerformanceInfo,
    PerformanceListMore
} from "./style";

const { Paragraph } = Typography;

class Performance extends Component{
    render() {
        const { performanceList, performancePage, getListMore } = this.props;
        return (
            <PerformanceWrapper>
                <PerformanceList>
                    { performanceList.size === 0 ?
                        <PerformanceItem>
                            <Empty/>
                        </PerformanceItem> : performanceList.map((item, index)=>{
                            return (
                            <PerformanceItem key={index}>
                                <img
                                    className="poster-pic"
                                    alt="haibao"
                                    src={item.get("imgUrl")}
                                />
                                <PerformanceInfo>
                                    <p className="time">{item.get("time")}</p>
                                    <h3 className="busker-name">{item.get("name")}</h3>
                                    <p className="address">{item.get("address")}</p>
                                    <Paragraph ellipsis={{ rows: 4, expandable: false }} className="des">
                                        {item.get("describe")}
                                    </Paragraph>
                                </PerformanceInfo>
                            </PerformanceItem>
                            )
                        })}
                </PerformanceList>
                <PerformanceListMore  onClick={()=> getListMore(performancePage)}>
                    ······
                </PerformanceListMore>
            </PerformanceWrapper>
        );
    }
    componentDidMount() {
        this.props.getPerformanceData();
    }
}

const mapStateToProps = (state) => {
    return {
        performanceList: state.get("performance").get("performanceList"),
        performancePage: state.get("performance").get("performancePage")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPerformanceData(){
            dispatch(actionCreators.getPerformanceInfo());
        },
        getListMore(performancePage){
            dispatch(actionCreators.getPerformanceMore(performancePage))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Performance);