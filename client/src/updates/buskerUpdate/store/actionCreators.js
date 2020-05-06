import {actionTypes} from "./index";
import axios from "axios";
import {message} from "antd";

const getNoBusker = () => ({
    type: actionTypes.NO_BUSKER
});

const getHaveBusker = (busker) => ({
    type: actionTypes.HAVE_BUSKER,
    busker: busker
});

export const getBusker = (data) => {
    return (dispatch) => {
        axios.post("/api/busker/detail", data)
            .then((res)=>{
                const result = res.data.data;
                if (result === null) {
                    dispatch(getNoBusker());
                } else {
                    dispatch(getHaveBusker(result.busker));
                }
            })
    }
};

export const updateBusker = (values, props) => {
    return (dispatch) => {
        axios.post("/api/busker/update", values)
            .then((res)=>{
                const result = res.data;
                if (result.success) {
                    message.info(result.data.message);
                } else {
                    message.error(result.data.message);
                }
                props.history.push("/busker/detail/" + values.buskerId);
            })
    }
};