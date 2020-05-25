import { fromJS } from "immutable";
import {actionTypes} from "./index";

const defaultState = fromJS({
    user: {}
});

export default (state=defaultState, action) => {
    switch (action.type) {
        case actionTypes.NO_USER:
            return state.merge({
                user: null
            });
        case actionTypes.HAVE_USER:
            return state.merge({
                user: fromJS(action.user)
            });
        default:
            return state;
    }
}