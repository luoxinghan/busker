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

export const login = (values, props) => {
    return (dispatch) => {
        axios.post("/api/login", values)
            .then((res)=>{
                const result = res.data.data;
                if (result.isLogged) {
                    localStorage.setItem('currentUser', JSON.stringify(result.currentUser));
                    dispatch(changeLogin(result.currentUser));
                    props.history.push("/");
                } else {
                    alert('登录失败！');
                }
            })
    }
};