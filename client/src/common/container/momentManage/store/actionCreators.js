import axios from "axios";
import {actionTypes} from "./index";
import {message} from "antd";

const getMomentSuccess = (result) => ({
    type: actionTypes.GET_PERSONAL_BUSKER_MOMENT_SUCCESS,
    momentList: result.momentList
});

const getMomentRequest = () => ({
    type: actionTypes.GET_PERSONAL_BUSKER_MOMENT_REQUEST,
});

const deleteMoment = (momentId) => ({
    type: actionTypes.DELETE_BUSKER_MOMENT,
    momentId
});


export const getBuskerMoment = (buskerId) => {
    return (dispatch) => {
        dispatch(getMomentRequest);
        axios.post("/api/moment/buskerId", {buskerId}).then((res)=>{
            const result = res.data.data;
            dispatch(getMomentSuccess(result));
        }).catch((e)=>{
            console.log(e);
        });
    }
};

export const deleteBuskerMoment = (momentId) => {
    return (dispatch) => {
        axios.post("/api/moment/delete", {momentId}).then((res)=>{
            const success = res.data.success;
            if (success) {
                dispatch(deleteMoment(momentId));
                message.info(res.data.data.message);
            } else {
                message.error(res.data.data.message);
            }
        }).catch((e)=>{
            console.log(e);
        });
    }
};