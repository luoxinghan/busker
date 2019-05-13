import { fromJS } from "immutable";
import {actionTypes} from "./index";

const defaultState = fromJS({
    homeWebDes: "",
    homeImgList: []
});

export default (state=defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME_IMG:
            return state.merge({
                homeWebDes: fromJS(action.homeWebDes),
                homeImgList: fromJS(action.homeImgList)
            });
        default:
            return state;
    }
}