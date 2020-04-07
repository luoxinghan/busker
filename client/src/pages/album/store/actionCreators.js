import axios from "axios";
import {actionTypes} from "./index";

const getBuskerList = (result) => ({
    type: actionTypes.GET_ALBUM_LIST_SUCCESS,
    albumsList: result.albumsList
});

const getAlbumsRequest = () => ({
    type: "GET_ALBUM_LIST_REQUEST"
});

export const getAllAlbums = () => {
    return (dispatch) => {
        dispatch(getAlbumsRequest());
        axios.get("/api/album/albumsList.json").then((res)=>{
            dispatch(getBuskerList(res.data.data));
        }).catch((e)=>{
            console.log(e);
        });
    }
};