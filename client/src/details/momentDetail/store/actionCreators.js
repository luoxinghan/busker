import axios from "axios";
import {actionTypes} from "./index";

const changeMomentDetail = (result) => ({
    type: actionTypes.GET_MOMENT_DETAIL_SUCCESS,
    moment: result.moment
});

const getMomentDetailRequest = () => ({
    type: actionTypes.GET_MOMENT_DETAIL_REQUEST
});

export const getMomentDetail = (momentId) => {
    return (dispatch) => {
        dispatch(getMomentDetailRequest());
        axios.post("/api/moment/detail", {momentId})
            .then((res)=>{
                const result = res.data.data;
                dispatch(changeMomentDetail(result));
            })
    }
};