import axios from "axios";
import {actionTypes} from "./index";

const getBuskerList = (result,buskerPage) => ({
    type: actionTypes.GET_BUSKER_LIST,
    recommendBusker: result.recommendBusker,
    buskerList: result.buskerList,
    buskerPage: buskerPage,
    totalNum: result.totalNum
});

export const getBuskerInfo = (buskerPage) => {
    return (dispatch) => {
        axios.get("/api/busker/buskerList?page="+buskerPage).then((res)=>{
            dispatch(getBuskerList(res.data.data, buskerPage));
        }).catch((e)=>{
            console.log(e);
        });
    }
};