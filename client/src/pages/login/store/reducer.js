import { fromJS } from "immutable";
import {actionTypes} from "./index";

const defaultState = fromJS({
    isLogged: true
});

export default (state=defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_LOGIN:
            return state.set("isLogged", action.isLogged);
        case actionTypes.CHANGE_LOGOUT:
            return state.set("isLogged", action.isLogged);
        default:
            return state;
    }
}