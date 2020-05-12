import {fromJS} from "immutable";
import {actionTypes} from "./index";

const defaultState = fromJS({
    trail: {},
    isLike: false
});

export default (state=defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_TRAIL_SUCCESS:
            return state.merge({
                trail: fromJS(action.trail),
                isLike: action.isLike
            });
        case actionTypes.CHANGE_TRAIL_IS_LIKE:
            return state.merge({
                isLike: true
            });
        default:
            return state;
    }
}