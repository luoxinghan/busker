import axios from "axios";
import {actionTypes} from "./index";
import {message} from "antd";

export const changeUserType = (userType) => ({
    type: actionTypes.CHANGE_USER_TYPE,
    userType
});

export const changeCaptcha = (captcha) => ({
    type: actionTypes.CHANGE_CAPTCHA_NUMBER,
    captcha
});

export const register = (data, props) => {
    return (dispatch) => {
        axios.post("/api/register", data)
        /*axios.get("/api/register/register")*/
            .then((res)=>{
                const result = res.data.data;
                if (res.data.success) {
                    props.history.push("/login");
                }
                message.info(result.message);
            }).catch((res)=>{
                console.log(res);
        })
    }
};

export const getCaptcha = (email) => {
    return (dispatch) => {
        axios.post("/api/captcha", {email})
            .then((res)=>{
                const result = res.data.data;
                if (res.data.success) {
                    dispatch(changeCaptcha(result.captcha));
                } else {
                    message.warning(result.message);
                }
            }).catch((res)=>{
            console.log(res);
        })
    }
};