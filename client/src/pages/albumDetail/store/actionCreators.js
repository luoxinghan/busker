import axios from "axios";
import {actionTypes} from "./index";
import {message} from "antd";

const getAlbumSuccess = (result) => ({
    type: actionTypes.GET_ALBUM_SUCCESS,
    album: result.album
});

const getAlbumRequest = () => ({
    type: actionTypes.GET_ALBUM_REQUEST
});

const getAlbumCommentsSuccess = (result) => ({
    type: actionTypes.GET_ALBUM_COMMENTS_SUCCESS,
    comments: result.comments
});

const getAlbumCommentsRequest = () => ({
    type: actionTypes.GET_ALBUM_COMMENTS_REQUEST
});

const addAlbumComment = (comment) => ({
    type: actionTypes.ADD_ALBUM_COMMENT,
    comment
});


export const getAlbum = (albumId) => {
    return (dispatch) => {
        dispatch(getAlbumRequest());
        axios.post("/api/album/detail", {albumId})
            .then((res)=>{
                dispatch(getAlbumSuccess(res.data.data));
            }).catch(()=>{
                console.log("/api/album/detail 404");
        })
    }
};

export const getAlbumComments = (albumId) => {
    return (dispatch) => {
        dispatch(getAlbumCommentsRequest());
        axios.post("/api/album/comment", {albumId})
            .then((res)=>{
                dispatch(getAlbumCommentsSuccess(res.data.data));
            }).catch(()=>{
            console.log("/api/album/comment 404");
        })
    }
};

export const addComment = (comment) => {
    return (dispatch) => {
        axios.post("/api/comment/add", {comment})
            .then((res) => {
                console.log(res.data);
                if (res.data.success) {
                    dispatch(addAlbumComment(comment));
                    message.info(res.data.data.message)
                } else {
                    message.error("Sorry, it cannot be added temporarily, please check the network.");
                }
            })
    }
};