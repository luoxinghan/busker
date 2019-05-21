import {fromJS} from "immutable";
import {actionTypes} from "./index";

const defaultState = fromJS({
    momentList: [],
    momentPage: 1,
    totalNum: 0
});

export default (state=defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_MOMENT_LIST:
            return state.merge({
                totalNum: action.totalNum,
                momentList: fromJS(action.momentList),
                momentPage: 1,
            });
        case actionTypes.GET_MOMENT_MORE:
            return state.merge({
                totalNum: action.totalNum,
                momentList: state.get("momentList").concat(fromJS(action.momentList)),
                momentPage: action.nextPage
            });
        default:
            return state;
    }
}