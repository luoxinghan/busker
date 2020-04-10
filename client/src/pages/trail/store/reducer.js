import {fromJS} from "immutable";
import {actionTypes} from "./index";
import {pagination, getTotalPage} from "../../../common/utils/pagination";

const defaultState = fromJS({
    trailList: [],
    trailShow: [],
    totalPage: 0,
    current: 1
});

export default (state=defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_TRAIL_LIST:
            return state.merge({
                current: 1,
                trailList: fromJS(action.trailList),
                trailShow: pagination(fromJS(action.trailList), action.perpage, 1),
                totalPage: getTotalPage(action.trailList, action.perpage)
            });
        case actionTypes.CHANGE_TRAIL_PAGE:
            return state.merge({
                trailShow: state.get("trailShow").concat(pagination(state.get("trailList"), action.perpage, action.current)),
                current: action.current
            });
        default:
            return state;
    }
}