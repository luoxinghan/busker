import {fromJS} from "immutable";
import {actionTypes} from "./index";

const defaultState = fromJS({
    busker: {},
    trailList: [],
    momentList: [],
    albumsList: []
});

export default (state=defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_BUSKER_DETAIL_SUCCESS:
            return state.merge({
                busker: fromJS(action.busker)
            });
        case actionTypes.GET_BUSKER_TRAILS_SUCCESS:
            return state.merge({
                trailList: fromJS(action.trailList)
            });
        case actionTypes.GET_BUSKER_ALBUMS_SUCCESS:
            return state.merge({
                albumsList: fromJS(action.albumsList)
            });
        case actionTypes.GET_BUSKER_MOMENTS_SUCCESS:
            return state.merge({
                momentList: fromJS(action.momentList)
            });
        default:
            return state;
    }
}