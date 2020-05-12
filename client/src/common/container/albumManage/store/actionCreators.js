import axios from "axios";
import {actionTypes} from "./index";
import {message} from "antd";

const getAlbumSuccess = (result) => ({
    type: actionTypes.GET_PERSONAL_BUSKER_ALBUM_SUCCESS,
    albumList: result.albumsList
});

const getAlbumRequest = () => ({
    type: actionTypes.GET_PERSONAL_BUSKER_ALBUM_REQUEST,
});

const getAlbumSinglesSuccess = (result) => ({
    type: actionTypes.GET_PERSONAL_ALBUM_SINGLES_SUCCESS,
    singles: result.singles
});

const getAlbumSinglesRequest = () => ({
    type: actionTypes.GET_PERSONAL_ALBUM_SINGLES_REQUEST,
});

const deleteAlbum = (albumId) => ({
    type: actionTypes.DELETE_BUSKER_ALBUM,
    albumId
});

const deleteSingle = (singleId) => ({
    type: actionTypes.DELETE_ALBUM_SINGLE,
    singleId
});

const changeStatus = (albumId, albumStatus) => ({
    type: actionTypes.CHANGE_BUSKER_ALBUM_STATUS,
    albumId,
    albumStatus
});

const getSingleTypesSuccess = (result) => ({
    type: actionTypes.GET_SINGLE_TYPES_SUCCESS,
    singleTypes: result.singleTypes
});

const getSingleTypesRequest = () => ({
    type: actionTypes.GET_SINGLE_TYPES_REQUEST
});

export const getBuskerAlbum = (buskerId) => {
    return (dispatch) => {
        dispatch(getAlbumRequest());
        axios.post("/api/album/buskerId", {buskerId}).then((res)=>{
            const result = res.data.data;
            dispatch(getAlbumSuccess(result));
        }).catch((e)=>{
            console.log(e);
        });
    }
};

export const getAlbumSingles = (albumId) => {
    return (dispatch) => {
        dispatch(getAlbumSinglesRequest());
        axios.post("/api/album/singles", {albumId}).then((res)=>{
            const result = res.data.data;
            dispatch(getAlbumSinglesSuccess(result));
        }).catch((e)=>{
            console.log(e);
        });
    }
};

export const getSingleTypes = () => {
    return (dispatch) => {
        dispatch(getSingleTypesRequest());
        axios.get("/api/single/type").then((res)=>{
            const result = res.data.data;
            dispatch(getSingleTypesSuccess(result));
        }).catch((e)=>{
            console.log(e);
        });
    }
};

export const changeAlbumStatus = (albumId, albumStatus) => {
    return (dispatch) => {
        axios.post("/api/album/status", {albumId, albumStatus}).then((res)=>{
            const success = res.data.success;
            if (success) {
                dispatch(changeStatus(albumId, albumStatus));
                message.info(res.data.data.message);
            } else {
                message.error(res.data.data.message);
            }
        }).catch((e)=>{
            console.log(e);
        });
    }
};

export const deleteBuskerAlbum = (albumId) => {
    return (dispatch) => {
        axios.post("/api/album/delete", {albumId}).then((res)=>{
            const success = res.data.success;
            if (success) {
                dispatch(deleteAlbum(albumId));
                message.info(res.data.data.message);
            } else {
                message.error(res.data.data.message);
            }
        }).catch((e)=>{
            console.log(e);
        });
    }
};

export const deleteAlbumSingle = (singleId) => {
    return (dispatch) => {
        axios.post("/api/single/delete", {singleId}).then((res)=>{
            const success = res.data.success;
            if (success) {
                dispatch(deleteSingle(singleId));
                message.info(res.data.data.message);
            } else {
                message.error(res.data.data.message);
            }
        }).catch((e)=>{
            console.log(e);
        });
    }
};

export const addSingle = (data) => {
    return (dispatch) => {
        axios.post("/api/single/add", data)
            .then((res)=>{
                const result = res.data.data;
                if (res.data.success){
                    message.info(result.message);
                } else {
                    message.error(result.message);
                }
            })
    }
};