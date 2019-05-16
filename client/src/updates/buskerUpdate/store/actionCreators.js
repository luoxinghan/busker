import {actionTypes} from "./index";
import axios from "axios";

const getNoBusker = () => ({
    type: actionTypes.NO_BUSKER,
    imageUrl: null,
    loading: false
});

const getHaveBusker = (imageUrl, currentBusker) => ({
    type: actionTypes.HAVE_BUSKER,
    imageUrl:  imageUrl,
    loading: false,
    currentBusker: currentBusker
});

const updateBuskerSuccess = (data) => ({
    type: actionTypes.UPDATE_BUSKER_SUCCESS,
    data
});

const updateBuskerFail = (message) => ({
    type: actionTypes.UPDATE_BUSKER_FAIL,
    message
});


export const changeLoading = (loading) => ({
    type: actionTypes.CHANGE_LOADING,
    loading
});

export const changeImageUrl = (imageUrl, loading) => ({
    type: actionTypes.CHANGE_IMAGE_URL,
    imageUrl,
    loading
});

export const cleanBuskerUpdate = () => ({
    type: actionTypes.CLEAN_BUSKER_UPDATE
});

export const getBusker = () => {
    return (dispatch) => {
        axios.get("/api/busker/getBusker?id=" + 3)
            .then((res)=>{
                const result = res.data.data;
                if (result === null) {
                    dispatch(getNoBusker());
                } else {
                    dispatch(getHaveBusker(result.busker.imgUrl, result.busker));
                }
            })
    }
};

export const updateBusker = (id, values, iconId) => {
    return (dispatch) => {
        let data = {
            "buskerId":id,
            "nickName": values.nickname,
            "dateOfBirth": values.birth,
            "instruments": values.instrument,
            "introduction": values.introduce,
            "sex": values.sex,
            "iconId": iconId
        };
        /*console.log(data);*/
        axios.post("/api/busker/addBusker", data)
        /*axios.get("/api/busker/addBusker")*/
            .then((res)=>{
                const result = res.data.data;
                if (result.code === 0 && res.status === 200) {
                    dispatch(updateBuskerSuccess(result));
                } else {
                    dispatch(updateBuskerFail(result.message));
                }
            })
    }
};