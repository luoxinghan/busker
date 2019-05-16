import { fromJS } from "immutable";
import {actionTypes} from "./index";

const defaultState = fromJS({
    isLogged: false,
    currentUser: {}
});

export default (state=defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_LOGIN:
            return state.merge({
                isLogged: action.isLogged,
                currentUser: fromJS(action.currentUser)
            });
        case actionTypes.CHANGE_LOGOUT:
            return state.merge({
                isLogged: action.isLogged,
                currentUser: fromJS(action.currentUser)
            });
        default:
            return state;
    }
}