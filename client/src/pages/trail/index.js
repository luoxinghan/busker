import React, {Component} from "react";
import {connect} from "react-redux";
import { Typography, Empty } from 'antd';
import { actionCreators } from "./store";
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
        const { trailList, trailPage, getListMore } = this.props;
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
                                    <p className="time">{item.get("time")}</p>
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
                <TrailListMore  onClick={()=> getListMore(trailPage)}>
                    ······
                </TrailListMore>
            </TrailWrapper>
        );
    }
    componentDidMount() {
        this.props.getTrailData();
    }
}

const mapStateToProps = (state) => {
    return {
        trailList: state.get("trail").get("trailList"),
        trailPage: state.get("trail").get("trailPage")
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

export default connect(mapStateToProps, mapDispatchToProps)(Trail);