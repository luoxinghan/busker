import { fromJS } from "immutable";
import {actionTypes} from "./index";

const defaultState = fromJS({
    buskerList: [],
    buskerPage: 1,
    totalNum: 0
});

export default (state=defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_BUSKER_LIST:
            return state.merge({
                buskerList: fromJS(action.buskerList),
                buskerPage: action.buskerPage,
                totalNum: action.totalNum
            });
        default:
            return state;
    }
}