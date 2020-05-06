import axios from "axios";
import {actionTypes} from "./index";
import {message} from "antd";

const getAlbumSuccess = (result) => ({
    type: actionTypes.GET_ALBUM_SUCCESS,
    album: result.album,
    haveAlbum: result.haveAlbum
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

const getAlbumSinglesSuccess = (result) => ({
    type: actionTypes.GET_ALBUM_SINGLES_SUCCESS,
    singles: result.singles
});

const getAlbumSinglesRequest = () => ({
    type: actionTypes.GET_ALBUM_SINGLES_REQUEST
});

const addAlbumComment = (comment) => ({
    type: actionTypes.ADD_ALBUM_COMMENT,
    comment
});


export const getAlbum = (albumId, userId) => {
    return (dispatch) => {
        dispatch(getAlbumRequest());
        axios.post("/api/album/detail", {albumId, userId})
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
        axios.post("/api/album/comments", {albumId})
            .then((res)=>{
                dispatch(getAlbumCommentsSuccess(res.data.data));
            }).catch(()=>{
            console.log("/api/album/comments 404");
        })
    }
};

export const getAlbumSingles = (albumId) => {
    return (dispatch) => {
        dispatch(getAlbumSinglesRequest());
        axios.post("/api/album/singles", {albumId})
            .then((res)=>{
                dispatch(getAlbumSinglesSuccess(res.data.data));
            }).catch(()=>{
            console.log("/api/album/singles 404");
        })
    }
};

export const addComment = (comment, userThing) => {
    return (dispatch) => {
        axios.post("/api/comment/add", comment)
            .then((res) => {
                if (res.data.success) {
                    let newComment = {
                        ...comment,
                        userName: userThing.username,
                        imgUrl: userThing.imgUrl
                    };
                    dispatch(addAlbumComment(newComment));
                    message.info(res.data.data.message);
                } else {
                    message.error("Sorry, it cannot be added temporarily, please check the network.");
                }
            })
    }
};