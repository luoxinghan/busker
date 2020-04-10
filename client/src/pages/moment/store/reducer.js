import {fromJS} from "immutable";
import {actionTypes} from "./index";
import {getTotalPage, pagination} from "../../../common/utils/pagination";

const defaultState = fromJS({
    momentList: [],
    momentShow: [],
    totalPage: 0,
    current: 1
});

export default (state=defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_MOMENT_LIST:
            return state.merge({
                current: 1,
                momentList: fromJS(action.momentList),
                momentShow: pagination(fromJS(action.momentList), action.perpage, 1),
                totalPage: getTotalPage(action.momentList, action.perpage)
            });
        case actionTypes.CHANGE_MOMENT_PAGE:
            return state.merge({
                momentShow: state.get("momentShow").concat(pagination(state.get("momentList"), action.perpage, action.current)),
                current: action.current
            });
        default:
            return state;
    }
}