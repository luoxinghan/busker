import { fromJS } from "immutable";
import {actionTypes} from "./index";

const defaultState = fromJS({
    busker: null
});

export default (state=defaultState, action) => {
    switch (action.type) {
        case actionTypes.NO_BUSKER:
            return state.merge({
                busker: null
            });
        case actionTypes.HAVE_BUSKER:
            return state.merge({
                busker: fromJS(action.busker)
            });
        default:
            return state;
    }
}