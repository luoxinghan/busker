import axios from "axios";
import {actionTypes} from "./index";

const changeBuskerDetail = (result) => ({
    type: actionTypes.GET_BUSKER_DETAIL_SUCCESS,
    busker: result.busker
});

const changeBuskerTrails = (result) => ({
    type: actionTypes.GET_BUSKER_TRAILS_SUCCESS,
    trailList: result.trailList
});

const changeBuskerAlbums = (result) => ({
    type: actionTypes.GET_BUSKER_ALBUMS_SUCCESS,
    albumsList: result.albumsList
});

const changeBuskerMoments = (result) => ({
    type: actionTypes.GET_BUSKER_MOMENTS_SUCCESS,
    momentList: result.momentList
});

const getBuskerDetailRequest = () => ({
    type: actionTypes.GET_BUSKER_DETAIL_REQUEST
});

const getBuskerTrailsRequest = () => ({
    type: actionTypes.GET_BUSKER_TRAILS_REQUEST
});
const getBuskerMomentsRequest = () => ({
    type: actionTypes.GET_BUSKER_MOMENTS_REQUEST
});

const getBuskerAlbumsRequest = () => ({
   type: actionTypes.GET_BUSKER_ALBUMS_REQUEST
});

export const getBuskerDetail = (data) => {
    return (dispatch) => {
        dispatch(getBuskerDetailRequest());
        axios.post("/api/busker/detail", data)
            .then((res)=>{
                const result = res.data.data;
                dispatch(changeBuskerDetail(result));
            })
    }
};

export const getTrails = (buskerId) => {
    return (dispatch) => {
        dispatch(getBuskerTrailsRequest());
        axios.post("/api/trail/buskerId", buskerId)
            .then((res)=>{
                const result = res.data.data;
                dispatch(changeBuskerTrails(result));
            })
    }
};

export const getAlbums = (buskerId) => {
    return (dispatch) => {
        dispatch(getBuskerAlbumsRequest());
        axios.post("/api/album/buskerId", buskerId)
            .then((res)=>{
                const result = res.data.data;
                dispatch(changeBuskerAlbums(result));
            })
    }
};

export const getMoments = (buskerId) => {
    return (dispatch) => {
        dispatch(getBuskerMomentsRequest());
        axios.post("/api/moment/buskerId", buskerId)
            .then((res)=>{
                const result = res.data.data;
                dispatch(changeBuskerMoments(result));
            })
    }
};