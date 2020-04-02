import { fromJS } from "immutable";
import {actionTypes} from "./index";

const defaultState = fromJS({
    homeWebDes: "",
    homeImgList: [],
    homeAlbums: []
});

export default (state=defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME_IMG:
            return state.merge({
                homeWebDes: fromJS(action.homeWebDes),
                homeImgList: fromJS(action.homeImgList),
                homeAlbums: fromJS(action.homeAlbums)
            });
        default:
            return state;
    }
}