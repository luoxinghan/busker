import axios from "axios";
import {actionTypes} from "./index";

const getBuskerList = (result,buskerPage) => ({
    type: actionTypes.GET_BUSKER_LIST,
    buskerList: result.buskerList,
    buskerPage: buskerPage
});

export const getBuskerInfo = (buskerPage) => {
    return (dispatch) => {
        axios.get("/api/buskerList.json?page="+buskerPage).then((res)=>{
            dispatch(getBuskerList(res.data.data, buskerPage));
        }).catch((e)=>{
            console.log(e);
        });
    }
};