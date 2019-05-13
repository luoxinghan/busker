import {fromJS} from "immutable";
import {actionTypes} from "./index";

const defaultState = fromJS({
    performanceList: [],
    performancePage: 1,
});

export default (state=defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_PERFORMANCE_LIST:
            return state.set("performanceList", fromJS(action.performanceList));
        case actionTypes.GET_PERFORMANCE_LIST_MORE:
            return state.merge({
                performanceList: state.get("performanceList").concat(fromJS(action.performanceList)),
                performancePage: action.nextPage
            });
        default:
            return state;
    }
}