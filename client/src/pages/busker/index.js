import React, {Component} from "react";
import {connect} from "react-redux";
import {Button,Pagination} from "antd";
import "antd/dist/antd.css";
import {
    BuskerWrapper,
    BuskerSort,
    BuskerList,
    BuskerItem,
    BuskerInfo
} from "./style";
import {actionCreators} from "./store";
import {Link} from "react-router-dom";

class Busker extends Component{
    render() {
        const { buskerList, buskerPage, handlePageChange } = this.props;
        return (
            <BuskerWrapper>
                <BuskerSort>
                    <h2>SORT BY: </h2>
                    <Button icon="caret-up">Age</Button>
                    <Button icon="caret-up">Tendency</Button>
                    <Button icon="caret-down">Video</Button>
                </BuskerSort>
                <BuskerList>
                    {buskerList.map((item) => {
                        return (
                            <Link to={'/busker/detail/' + item.get("id")}>
                                <BuskerItem key={item.get("id")}>
                                    <img alt="" className="busker-avator" src={item.get("imgUrl")} />
                                    <BuskerInfo className="busker-info">
                                        <h2 className="name">{item.get("buskerName")}</h2>
                                        <p className="text">
                                            <span>Age: </span>{item.get("age")}<br/>
                                            <span>Tendency: </span>{item.get("tendencyAllHot")}<br/>
                                            <span>instrument: </span>{item.get("instrument")}<br/>
                                        </p>
                                    </BuskerInfo>
                                </BuskerItem>
                            </Link>
                        )
                    })}
                </BuskerList>
                <Pagination onChange={handlePageChange} current={buskerPage} pageSize={15} total={50} />
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
        buskerList: state.get("busker").get("buskerList"),
        buskerPage: state.get("busker").get("buskerPage")
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