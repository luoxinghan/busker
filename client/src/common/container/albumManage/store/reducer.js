import {fromJS} from "immutable";
import {actionTypes} from "./index";

const defaultState = fromJS({
    albumList: [],
    singles: [],
    singleTypes: []
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_PERSONAL_BUSKER_ALBUM_SUCCESS:
            return state.merge({
                albumList: fromJS(action.albumList)
            });
        case actionTypes.GET_PERSONAL_ALBUM_SINGLES_SUCCESS:
            return state.merge({
                singles: fromJS(action.singles)
            });
        case actionTypes.DELETE_BUSKER_ALBUM:
            const albumList = state.get("albumList").filter((item) => {
                return item.get("albumsId") !== action.albumId;
            });
            return state.set("albumList", albumList);
        case actionTypes.DELETE_ALBUM_SINGLE:
            const singles = state.get("singles").filter((item) => {
                return item.get("singleId") !== action.singleId;
            });
            return state.set("singles", singles);
        case actionTypes.CHANGE_BUSKER_ALBUM_STATUS:
            return state.set("albumList", state.get("albumList").map((item) => {
                if (item.get("albumsId") === action.albumId) {
                    item = item.toJS();
                    item.albumStatus = action.albumStatus;
                    return fromJS(item);
                } else {
                    return item;
                }
            }));
        case actionTypes.GET_SINGLE_TYPES_SUCCESS:
            return state.merge({
                singleTypes: fromJS(action.singleTypes)
            });
        default:
            return state;
    }
}