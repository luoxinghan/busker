import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
    logged: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.LOG_IN_ACTION:
            return state.set("logged", true);
        case actionTypes.LOG_OUT_ACTION:
            return state.set("logged", false);
        default:
            return state;
    }
}