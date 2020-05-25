import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from "../common/header/store";
import { reducer as homeReducer } from "../pages/home/store";
import { reducer as buskerReducer } from "../pages/busker/store";
import { reducer as trailReducer } from "../pages/trail/store";
import { reducer as trailDetailReducer } from "../details/trailDetail/store";
import { reducer as momentReducer } from "../pages/moment/store";
import { reducer as loginReducer } from "../pages/login/store";
import { reducer as momentDetailReducer } from "../details/momentDetail/store";
import { reducer as buskerDetailReducer } from "../details/buskerDetail/store";
import { reducer as userDetailReducer } from "../details/userDetail/store";
import { reducer as registerReducer } from "../adds/register/store";
import { reducer as buskerUpdateReducer } from "../updates/buskerUpdate/store";
import { reducer as userUpdateReducer } from "../updates/userUpdate/store";
import { reducer as albumReducer } from "../pages/album/store";
import { reducer as albumDetailReducer } from "../details/albumDetail/store";
import { reducer as personalReducer } from "../pages/personal/store";
import {loadingReducer} from "../common/utils/loadingReducer";

/*
    使用combineReducer对reducer进行管理
    以避免所有reducer下载一个文件造成不好维护
*/
const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    busker: buskerReducer,
    buskerDetail: buskerDetailReducer,
    userDetail: userDetailReducer,
    trail: trailReducer,
    trailDetail: trailDetailReducer,
    moment: momentReducer,
    momentDetail: momentDetailReducer,
    login: loginReducer,
    register: registerReducer,
    buskerUpdate: buskerUpdateReducer,
    userUpdate: userUpdateReducer,
    album: albumReducer,
    albumDetail: albumDetailReducer,
    personal: personalReducer,
    loading: loadingReducer
});

export default reducer;