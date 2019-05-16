import axios from "axios";
import {actionTypes} from "./index";

const changeMomentDetail = (result) => ({
    type: actionTypes.CHANGE_MOMENT_DETAIL,
    moment: result.moment
});

export const getMomentDetail = (id) => {
    return (dispatch) => {
        axios.get("/api/moment/momentDetail?id=" + id)
            .then((res)=>{
                const result = res.data.data;
                dispatch(changeMomentDetail(result));
            })
    }
};