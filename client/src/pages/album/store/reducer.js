import { fromJS } from "immutable";
import {actionTypes} from "./index";

const defaultState = fromJS({
    albumsList: []
});

export default (state=defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALBUM_LIST_SUCCESS:
            return state.merge({
                albumsList: fromJS(action.albumsList)
            });
        default:
            return state;
    }
}