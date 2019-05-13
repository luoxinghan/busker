import {actionTypes} from "./index";
import axios from "axios";

const getHomeImgAction = (result) => ({
    type: actionTypes.GET_HOME_IMG,
    homeImgList: result.homeImgList,
    homeWebDes: result.homeWebDes
});

export const getHomeData = () => {
    return (dispatch) => {
        axios.get("/api/homeImgList.json")
            .then((res)=>{
                dispatch(getHomeImgAction(res.data.data));
            }).catch(()=>{
            console.log("/api/homeImgList.json 404");
        })
    }
};