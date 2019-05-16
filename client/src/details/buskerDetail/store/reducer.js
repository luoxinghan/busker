import {fromJS} from "immutable";
import {actionTypes} from "./index";

const defaultState = fromJS({
    busker: {}
});

export default (state=defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_BUSKER_DETAIL:
            return state.merge({
                busker: fromJS(action.busker)
            });
        default:
            return state;
    }
}