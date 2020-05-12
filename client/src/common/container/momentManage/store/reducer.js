import {fromJS} from "immutable";
import {actionTypes} from "./index";

const defaultState = fromJS({
    momentList: []
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_PERSONAL_BUSKER_MOMENT_SUCCESS:
            return state.merge({
                momentList: fromJS(action.momentList)
            });
        case actionTypes.DELETE_BUSKER_MOMENT:
            const momentList = state.get("momentList").filter((item) => {
                return item.get("id") !== action.momentId;
            });
            return state.set("momentList", momentList);
        default:
            return state;
    }
}