import {fromJS} from "immutable";
import {actionTypes} from "./index";

const defaultState = fromJS({
    trail: {}
});

export default (state=defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_TRAIL_SUCCESS:
            return state.merge({
                trail: fromJS(action.trail)
            });
        default:
            return state;
    }
}