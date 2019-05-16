import axios from "axios";
import {actionTypes} from "./index";

const changeBuskerDetail = (result, list) => ({
    type: actionTypes.CHANGE_BUSKER_DETAIL,
    busker: result.busker
});

export const getBuskerDetail = (id) => {
    return (dispatch) => {
        axios.get("/api/busker/buskerDetail?id=" + id)
            .then((res)=>{
                const result = res.data.data;
                dispatch(changeBuskerDetail(result));
            })
    }
};
