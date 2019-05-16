import {fromJS} from "immutable";
import {actionTypes} from "./index";

const defaultState = fromJS({
    moment: {}
});

export default (state=defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_MOMENT_DETAIL:
            return state.set("moment", fromJS(action.moment));
        default:
            return state;
    }
}