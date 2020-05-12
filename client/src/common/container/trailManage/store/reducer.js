import {fromJS} from "immutable";
import {actionTypes} from "./index";

const defaultState = fromJS({
    trailList: []
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_PERSONAL_BUSKER_TRAIL_SUCCESS:
            return state.merge({
                trailList: fromJS(action.trailList)
            });
        case actionTypes.DELETE_BUSKER_TRAIL:
            const trailList = state.get("trailList").filter((item) => {
                return item.get("id") !== action.trailId;
            });
            return state.set("trailList", trailList);
        default:
            return state;
    }
}