import axios from "axios";
import {actionTypes} from "./index";

const getMomentList = (result) => ({
    type: actionTypes.GET_MOMENT_LIST,
    momentList: result.momentList
});

const getMomentMore = (result, nextPage) => ({
   type: actionTypes.GET_MOMENT_MORE,
   momentList: result.momentList,
   nextPage: nextPage
});

export const getMomentData = () => {
  return (dispatch) => {
      axios.get("/api/moment/momentList").then((res)=>{
          dispatch(getMomentList(res.data.data));
      }).catch(()=>{
          console.log("/api/moment/momentList not found!");
      })
  }
};

export const getListMore = (page) => {
    return (dispatch) => {
        axios.get("/api/moment/momentList?page=" + page).then((res)=>{
            dispatch(getMomentMore(res.data.data, page + 1))
        }).catch((e)=>{
            console.log(e);
        })
    }
};