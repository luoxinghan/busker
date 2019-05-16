import {fromJS} from "immutable";
import {actionTypes} from "./index";

const defaultState = fromJS({
    trailList: [],
    trailPage: 1,
});

export default (state=defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_TRAIL_LIST:
            return state.set("trailList", fromJS(action.trailList));
        case actionTypes.GET_TRAIL_LIST_MORE:
            return state.merge({
                trailList: state.get("trailList").concat(fromJS(action.trailList)),
                trailPage: action.nextPage
            });
        default:
            return state;
    }
}