import axios from "axios";
import {actionTypes} from "./index";
import {message} from "antd";

const getTrailSuccess = (result) => ({
    type: actionTypes.GET_PERSONAL_BUSKER_TRAIL_SUCCESS,
    trailList: result.trailList
});

const getTrailRequest = () => ({
    type: actionTypes.GET_PERSONAL_BUSKER_TRAIL_REQUEST,
});

const deleteTrail = (trailId) => ({
    type: actionTypes.DELETE_BUSKER_TRAIL,
    trailId
});


export const getBuskerTrail = (buskerId) => {
    return (dispatch) => {
        dispatch(getTrailRequest());
        axios.post("/api/trail/buskerId", {buskerId}).then((res)=>{
            const result = res.data.data;
            dispatch(getTrailSuccess(result));
        }).catch((e)=>{
            console.log(e);
        });
    }
};

export const deleteBuskerTrail = (trailId) => {
    return (dispatch) => {
        axios.post("/api/trail/delete", {trailId}).then((res)=>{
            const success = res.data.success;
            if (success) {
                dispatch(deleteTrail(trailId));
                message.info(res.data.data.message);
            } else {
                message.error(res.data.data.message);
            }
        }).catch((e)=>{
            console.log(e);
        });
    }
};