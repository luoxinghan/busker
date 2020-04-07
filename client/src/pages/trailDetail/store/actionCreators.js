import axios from "axios";
import {actionTypes} from "./index";

const getTrailSuccess = (result) => ({
    type: actionTypes.GET_TRAIL_SUCCESS,
    trail: result.trail
});

const getTrailRequest = () => ({
    type: actionTypes.GET_TRAIL_REQUEST
});

export const getTrail = (trailId) => {
    return (dispatch) => {
        dispatch(getTrailRequest());
        axios.post("/api/trail/trailDetail", {trailId})
            .then((res)=>{
                dispatch(getTrailSuccess(res.data.data));
            }).catch(()=>{
                console.log("/api/trailDetail 404");
        })
    }
};