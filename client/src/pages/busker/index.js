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

let perpage = 12;
class Busker extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ageSort: true,
            tenSort: true
        }
    }
    render() {
        const {recommendBusker, buskerList, buskerShow, handlePageChange, current } = this.props;
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
                    <Button onClick={()=> this.sortBuskerByAge()} icon={this.state.ageSort ? "caret-up" : "caret-down"}>Age</Button>
                    <Button onClick={()=> this.sortBuskerByTendency()} icon={this.state.tenSort ? "caret-up" : "caret-down"}>Tendency</Button>
                    <Search
                        placeholder="Busker name"
                        onSearch={(value) => this.findBusker(value)}
                        style={{ width: 200 }}
                    />
                    {/*<AutoComplete
                        dataSource={buskerList.map({})}
                        style={{width: 200}}
                        />*/}
                </BuskerSort>
                <BuskerList>
                    <Row justify="space-between" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    {buskerShow.map((item) => {
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
                    <Pagination onChange={handlePageChange} current={current} pageSize={perpage} total={buskerList.size} />
                </BuskerList>
            </BuskerWrapper>
        );
    }
    componentDidMount() {
        const {getBuskerData} = this.props;
        getBuskerData(perpage);
    }
    sortBuskerByAge(){
        this.setState({
            ageSort: !this.state.ageSort
        });
        this.props.sortByAge(!this.state.ageSort);
    }
    sortBuskerByTendency(){
        this.setState({
            tenSort: !this.state.tenSort
        });
        this.props.sortByTendency(!this.state.tenSort);
    }
    findBusker(value){
        if(value === ""){
            return
        }
        this.props.findBusker(value);
    }
}

const mapStateToProps = (state) => {
    return {
        recommendBusker: state.get("busker").get("recommendBusker"),
        buskerList: state.get("busker").get("buskerList"),
        buskerShow: state.get("busker").get("buskerShow"),
        totalPage: state.get("busker").get("totalPage"),
        current: state.get("busker").get("current")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getBuskerData(perpage){
            dispatch(actionCreators.getBuskerInfo(perpage));
            dispatch(actionCreators.getRecommendBusker());
        },
        handlePageChange(current){
            dispatch(actionCreators.changePage(perpage, current));
        },
        sortByAge(as){
            dispatch(actionCreators.sortByAge(as));
        },
        sortByTendency(as){
            dispatch(actionCreators.sortByTendency(as));
        },
        findBusker(value){
            dispatch(actionCreators.searchBusker(value));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Busker);