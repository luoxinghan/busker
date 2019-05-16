import {actionTypes} from "./index";
import axios from "axios";

const changeLogin = (currentUser) => ({
    type: actionTypes.CHANGE_LOGIN,
    isLogged: true,
    currentUser: currentUser
});

export const changeLogout = () => ({
    type: actionTypes.CHANGE_LOGOUT,
    isLogged: false,
    currentUser: {}
});

export const login = (values) => {
    return (dispatch) => {
        axios.get("/api/login/login?username=" + values.username + "&password=" + values.password)
            .then((res)=>{
                const result = res.data.data;
                if (result.isLogged) {
                    dispatch(changeLogin(result.currentUser));
                } else {
                    alert('登录失败！');
                }
            })
    }
};