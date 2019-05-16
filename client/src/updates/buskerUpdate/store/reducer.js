import { fromJS } from "immutable";
import {actionTypes} from "./index";

const defaultState = fromJS({
    imageUrl: null,
    loading: false,
    currentBusker: null,
    data: [],
    message: null
});

export default (state=defaultState, action) => {
    switch (action.type) {
        case actionTypes.NO_BUSKER:
            return state.merge({
                imageUrl: action.imageUrl,
                loading: action.loading,
                currentBusker: null
            });
        case actionTypes.HAVE_BUSKER:
            return state.merge({
                imageUrl: action.imageUrl,
                loading: action.loading,
                currentBusker: fromJS(action.currentBusker)
            });
        case actionTypes.CHANGE_LOADING:
            return state.set("loading", action.loading);
        case actionTypes.CHANGE_IMAGE_URL:
            return state.merge({
                imageUrl: action.imageUrl,
                loading: action.loading
            });
        case actionTypes.UPDATE_BUSKER_SUCCESS:
            return state.merge({
                data: fromJS(action.data),
                message: null,
                redirectTo: "/busker/detail"
            });
        case actionTypes.UPDATE_BUSKER_FAIL:
            return state.merge({
                message: action.message
            });
        case actionTypes.CLEAN_BUSKER_UPDATE:
            return state.merge({
                imageUrl: null,
                loading: false,
                currentBusker: null,
                data: fromJS([]),
                message: null
            });
        default:
            return state;
    }
}