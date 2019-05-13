import {fromJS} from "immutable";
import {actionTypes} from "./index";

const defaultState = fromJS({
    momentList: [],
    momentPage: 0
});

export default (state=defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_MOMENT_LIST:
            return state.set("momentList", fromJS(action.momentList));
        case actionTypes.GET_MOMENT_MORE:
            return state.merge({
                momentList: state.get("momentList").concat(fromJS(action.momentList)),
                momentPage: action.nextPage
            });
        default:
            return state;
    }
}