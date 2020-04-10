import axios from "axios";
import {actionTypes} from "./index";

const getMomentList = (result, perpage) => ({
    type: actionTypes.GET_MOMENT_LIST,
    momentList: result.momentList,
    perpage: perpage
});

export const changePage = (perpage, current) => ({
    type: actionTypes.CHANGE_MOMENT_PAGE,
    perpage,
    current
});

export const getMomentData = (perpage) => {
  return (dispatch) => {
      axios.get("/api/moment/moments").then((res)=>{
          dispatch(getMomentList(res.data.data, perpage));
      }).catch(()=>{
          console.log("/api/moment/momentList not found!");
      })
  }
};