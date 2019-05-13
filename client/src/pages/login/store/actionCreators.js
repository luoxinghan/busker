import {actionTypes} from "./index";
import axios from "axios";

const changeLogin = () => ({
    type: actionTypes.CHANGE_LOGIN,
    isLogged: true
});

export const changeLogout = () => ({
    type: actionTypes.CHANGE_LOGOUT,
    isLogged: false
});

export const login = (values) => {
    return (dispatch) => {
        axios.get("/api/login/login.json?username=" + values.username + "&password=" + values.password)
            .then((res)=>{
                const result = res.data.data;
                if (result) {
                    dispatch(changeLogin());
                } else {
                    alert('登录失败！');
                }
            })
    }
}