import axios from "axios";
import {actionTypes} from "./index";

const getTrailList = (result, perpage) => ({
    type: actionTypes.GET_TRAIL_LIST,
    trailList: result.trailList,
    perpage: perpage
});

export const changePage = (perpage, current) => ({
    type: actionTypes.CHANGE_TRAIL_PAGE,
    perpage,
    current
});

export const  getTrailInfo = (perpage) => {
    return (dispatch) => {
        axios.get("/api/trail/trailers").then((res)=>{
            dispatch(getTrailList(res.data.data, perpage));
        }).catch((e)=>{
            console.log(e);
        });
    }
};