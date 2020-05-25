import {actionTypes} from "./index";
import axios from "axios";
import {message} from "antd";

const getNoUser = () => ({
    type: actionTypes.NO_USER
});

const getHaveUser = (user) => ({
    type: actionTypes.HAVE_USER,
    user: user
});

export const getUser = (data) => {
    return (dispatch) => {
        axios.post("/api/user/detail", data)
            .then((res)=>{
                const result = res.data.data;
                if (result === null) {
                    dispatch(getNoUser());
                } else {
                    dispatch(getHaveUser(result.user));
                }
            })
    }
};

export const updateUser = (values, props) => {
    return (dispatch) => {
        axios.post("/api/user/update", values)
            .then((res)=>{
                const result = res.data;
                if (result.success) {
                    message.info(result.data.message);
                } else {
                    message.error(result.data.message);
                }
                props.history.push("/user/detail/" + values.userId);
            })
    }
};