import axios from "axios";
import {actionTypes} from "./index";

const getBuskerList = (result, perpage) => ({
    type: actionTypes.GET_BUSKER_LIST,
    buskerList: result.buskerList,
    perpage: perpage
});

const setRecommendBusker = (result) => ({
    type: actionTypes.SET_RECOMMEND_BUSKER,
    recommendBusker: result.recommendBusker
});

export const changePage = (perpage, current) => ({
    type: actionTypes.CHANGE_BUSKER_PAGE,
    perpage,
    current
});

export const sortByAge = (as) => ({
    type: actionTypes.SORT_BUSKER_BY_AGE,
    as
});

export const sortByTendency = (as) => ({
    type: actionTypes.SORT_BUSKER_BY_TENDENCY,
    as
});

export const searchBusker = (value) => ({
    type: actionTypes.SEARCH_BUSKER,
    value
});


export const getBuskerInfo = (perpage) => {
    return (dispatch) => {
        axios.get("/api/busker/buskers").then((res)=>{
            dispatch(getBuskerList(res.data.data, perpage));
        }).catch((e)=>{
            console.log(e);
        });
    }
};

export const getRecommendBusker = () => {
    return (dispatch) => {
        axios.get("/api/busker/recommend").then((res)=>{
            dispatch(setRecommendBusker(res.data.data));
        }).catch((e)=>{
            console.log(e);
        });
    }
};