import React, {Component} from "react";
import {connect} from "react-redux";
import {Button, Pagination, Row, Col, Input} from "antd";
import "antd/dist/antd.css";
import {
    BuskerWrapper,
    RecommendBusker,
    BuskerSort,
    BuskerList,
    BuskerItem,
    BuskerInfo
} from "./style";
import {actionCreators} from "./store";
import {Link} from "react-router-dom";
import {Title} from "../../common/style";

const { Search } = Input;

class Busker extends Component{
    render() {
        const {recommendBusker, buskerList, buskerPage, handlePageChange, totalNum } = this.props;
        return (
            <BuskerWrapper>
                <RecommendBusker>
                    <Title><span>Popular buskers</span></Title>
                    <Row justify="space-between" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        {recommendBusker.map((item) => {
                            return (
                                <Link key={item.get("id")} to={'/busker/detail/' + item.get("id")}>
                                    <Col span={4}>
                                        <BuskerItem key={item.get("id")}>
                                            <img alt="" className="busker-avator" src={item.get("imgUrl")} />
                                            <BuskerInfo className="busker-info">
                                                <h2 className="name">{item.get("buskerName")}</h2>
                                                <p className="text">
                                                    <span className="title">Age: </span>{item.get("age")}<br/>
                                                    <span className="title">Tendency: </span>{item.get("tendencyAllHot")}<br/>
                                                    <span className="title">instrument: </span>{item.get("instrument")}<br/>
                                                </p>
                                            </BuskerInfo>
                                        </BuskerItem>
                                    </Col>
                                </Link>
                            )
                        })}
                    </Row>
                </RecommendBusker>
                <BuskerSort>
                    <h2>SORT BY: </h2>
                    <Button icon="caret-up">Age</Button>
                    <Button icon="caret-up">Tendency</Button>
                    <Search
                        placeholder="Please input text"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                    />
                </BuskerSort>
                <BuskerList>
                    <Row justify="space-between" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    {buskerList.map((item) => {
                        return (
                            <Link key={item.get("id")} to={'/busker/detail/' + item.get("id")}>
                                <Col span={4}>
                                    <BuskerItem key={item.get("id")}>
                                        <img alt="" className="busker-avator" src={item.get("imgUrl")} />
                                        <BuskerInfo className="busker-info">
                                            <h2 className="name">{item.get("buskerName")}</h2>
                                            <p className="text">
                                                <span className="title">Age: </span>{item.get("age")}<br/>
                                                <span className="title">Tendency: </span>{item.get("tendencyAllHot")}<br/>
                                                <span className="title">instrument: </span>{item.get("instrument")}<br/>
                                            </p>
                                        </BuskerInfo>
                                    </BuskerItem>
                                </Col>
                            </Link>
                        )
                    })}
                    </Row>
                    <Pagination onChange={handlePageChange} current={buskerPage} pageSize={10} total={totalNum} />
                </BuskerList>
            </BuskerWrapper>
        );
    }
    componentDidMount() {
        const {getBuskerData, buskerPage} = this.props;
        getBuskerData(buskerPage);
    }
}

const mapStateToProps = (state) => {
    return {
        recommendBusker: state.get("busker").get("recommendBusker"),
        buskerList: state.get("busker").get("buskerList"),
        buskerPage: state.get("busker").get("buskerPage"),
        totalNum: state.get("busker").get("totalNum")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getBuskerData(buskerPage){
            dispatch(actionCreators.getBuskerInfo(buskerPage));
        },
        handlePageChange(page){
            dispatch(actionCreators.getBuskerInfo(page));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Busker);