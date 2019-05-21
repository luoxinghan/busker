import axios from "axios";
import {actionTypes} from "./index";

const getTrailList = (result) => ({
    type: actionTypes.GET_TRAIL_LIST,
    trailList: result.trailList,
    totalNum: result.totalNum
});

const getListMore = (result, nextPage) => ({
    type: actionTypes.GET_TRAIL_LIST_MORE,
    trailList: result.trailList,
    nextPage: nextPage,
    totalNum: result.totalNum
});

export const getTrailInfo = () => {
    return (dispatch) => {
        axios.get("/api/trail/trailList?page=1").then((res)=>{
            dispatch(getTrailList(res.data.data));
        }).catch((e)=>{
            console.log(e);
        });
    }
};

export const getTrailMore = (trailPage) => {
    return (dispatch) => {
        axios.get("/api/trail/trailList?page=" + (trailPage + 1))
            .then((res)=>{
                dispatch(getListMore(res.data.data, trailPage + 1));
            }).catch(()=>{
            console.log("/api/trailList 404");
        })
    }
};