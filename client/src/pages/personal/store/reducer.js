import {combineReducers} from "redux-immutable";
import { reducer as momentReducer } from "../../../common/container/momentManage/store";
import { reducer as trailReducer } from "../../../common/container/trailManage/store";
import { reducer as albumReducer } from "../../../common/container/albumManage/store";
const personalReducer = combineReducers({
    moment: momentReducer,
    trail: trailReducer,
    album: albumReducer
});

export default personalReducer;