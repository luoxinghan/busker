import {fromJS} from "immutable";
import {actionTypes} from "./index";

const defaultState = fromJS({
    album: {},
    comments: []
});

export default (state=defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALBUM_SUCCESS:
            return state.merge({
                album: fromJS(action.album)
            });
        case actionTypes.GET_ALBUM_COMMENTS_SUCCESS:
            return state.merge({
                comments: fromJS(action.comments)
            });
        case actionTypes.ADD_ALBUM_COMMENT:
            let comment = action.comment;
            comment.commentId = 0;
            delete comment.albumId;
            return state.merge({
                comments: fromJS(state.get("comments").toJS().concat(comment))
            });
        default:
            return state;
    }
}