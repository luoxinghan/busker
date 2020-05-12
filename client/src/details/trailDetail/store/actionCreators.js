import axios from "axios";
import {actionTypes} from "./index";
import {message} from "antd";

const getTrailSuccess = (result) => ({
    type: actionTypes.GET_TRAIL_SUCCESS,
    trail: result.trail,
    isLike: result.isLike
});

const getTrailRequest = () => ({
    type: actionTypes.GET_TRAIL_REQUEST
});

const changeIsLike = () => ({
    type: actionTypes.CHANGE_TRAIL_IS_LIKE
});

export const getTrail = (trailId, userId) => {
    return (dispatch) => {
        dispatch(getTrailRequest());
        axios.post("/api/trail/detail", {trailId, userId})
            .then((res)=>{
                dispatch(getTrailSuccess(res.data.data));
            }).catch(()=>{
                console.log("/api/trailDetail 404");
        })
    }
};

export const likeTrail = (trailId, userId) => {
    return (dispatch) => {
        axios.post("/api/trail/like", {trailId, userId})
            .then((res)=>{
                message.info(res.data.data.message);
                dispatch(changeIsLike(res.data.data));
            }).catch(()=>{
                message.error("/api/trail/like 404");
            }
        )
    }
};