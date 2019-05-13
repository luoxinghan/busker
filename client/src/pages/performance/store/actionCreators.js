import axios from "axios";
import {actionTypes} from "./index";

const getPerformanceList = (result) => ({
    type: actionTypes.GET_PERFORMANCE_LIST,
    performanceList: result.performanceList
});

const getListMore = (result, nextPage) => ({
    type: actionTypes.GET_PERFORMANCE_LIST_MORE,
    performanceList: result.performanceList,
    nextPage: nextPage
});

export const getPerformanceInfo = () => {
    return (dispatch) => {
        axios.get("/api/performanceList.json").then((res)=>{
            dispatch(getPerformanceList(res.data.data));
        }).catch((e)=>{
            console.log(e);
        });
    }
};

export const getPerformanceMore = (performancePage) => {
    return (dispatch) => {
        axios.get("/api/performanceList.json?page=" + performancePage)
            .then((res)=>{
                dispatch(getListMore(res.data.data, performancePage + 1));
            }).catch(()=>{
            console.log("/api/performanceList.json 404");
        })
    }
};