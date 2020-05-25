import axios from "axios";
import {actionTypes} from "./index";

const changeUserDetail = (result) => ({
    type: actionTypes.GET_USER_DETAIL_SUCCESS,
    user: result.user
});

const getUserDetailRequest = () => ({
    type: actionTypes.GET_USER_DETAIL_REQUEST
});

export const getUserDetail = (data) => {
    console.log(data);
    return (dispatch) => {
        dispatch(getUserDetailRequest());
        axios.post("/api/user/detail", data)
            .then((res)=>{
                const result = res.data.data;
                dispatch(changeUserDetail(result));
            })
    }
};