import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
    logged: false
});

export default (state = defaultState, action) => {
    if (action.type === actionTypes.LOG_IN_ACTION) {
        return state.set("logged", true);
    } else if (action.type === actionTypes.LOG_OUT_ACTION) {
        return state.set("logged", false);
    }
    return state;
}