import {fromJS} from "immutable";
import {actionTypes} from "./index";
import {getTotalPage, pagination} from "../../../common/utils/pagination";
import {findImmutableJSList, sortImmutableList} from "../../../common/utils/dataUtils";

const defaultState = fromJS({
    buskerList: [],
    buskerShow: [],
    recommendBusker: [],
    totalPage: 0,
    current: 1
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_BUSKER_LIST:
            return state.merge({
                current: 1,
                buskerList: fromJS(action.buskerList),
                buskerShow: pagination(fromJS(action.buskerList), action.perpage, 1),
                totalPage: getTotalPage(action.buskerList, action.perpage)
            });
        case actionTypes.SET_RECOMMEND_BUSKER:
            return state.merge({
                recommendBusker: fromJS(action.recommendBusker)
            });
        case actionTypes.CHANGE_BUSKER_PAGE:
            return state.merge({
                buskerShow: pagination(state.get("buskerList"), action.perpage, action.current),
                current: action.current
            });
        case actionTypes.SORT_BUSKER_BY_AGE:
            return state.merge({
                buskerList: state.get("buskerList").sort(sortImmutableList("age", action.as)),
                buskerShow: state.get("buskerShow").sort(sortImmutableList("age", action.as))
            });
        case actionTypes.SORT_BUSKER_BY_TENDENCY:
            return state.merge({
                buskerList: state.get("buskerList").sort(sortImmutableList("tendencyAllHot", action.as)),
                buskerShow: state.get("buskerShow").sort(sortImmutableList("tendencyAllHot", action.as))
            });
        case actionTypes.SEARCH_BUSKER:
            return state.merge({
                buskerShow: state.get("buskerList").filter(findImmutableJSList("buskerName", action.value))
            });
        default:
            return state;
    }
}