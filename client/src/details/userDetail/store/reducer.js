import {fromJS} from "immutable";
import {actionTypes} from "./index";

const defaultState = fromJS({
    user: {}
});

export default (state=defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_USER_DETAIL_SUCCESS:
            return state.merge({
                user: fromJS(action.user)
            });
        default:
            return state;
    }
}