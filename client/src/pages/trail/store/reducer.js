import {fromJS} from "immutable";
import {actionTypes} from "./index";

const defaultState = fromJS({
    trailList: [],
    trailPage: 1,
    totalNum: 0
});

export default (state=defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_TRAIL_LIST:
            return state.merge({
                trailList: fromJS(action.trailList),
                trailPage: 1,
                totalNum: action.totalNum
            });
        case actionTypes.GET_TRAIL_LIST_MORE:
            return state.merge({
                totalNum: action.totalNum,
                trailList: state.get("trailList").concat(fromJS(action.trailList)),
                trailPage: action.nextPage
            });
        default:
            return state;
    }
}