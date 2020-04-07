import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from "../common/header/store";
import { reducer as homeReducer } from "../pages/home/store";
import { reducer as buskerReducer } from "../pages/busker/store";
import { reducer as trailReducer } from "../pages/trail/store";
import { reducer as trailDetailReducer } from "../pages/trailDetail/store";
import { reducer as momentReducer } from "../pages/moment/store";
import { reducer as loginReducer } from "../pages/login/store";
import { reducer as momentDetailReducer } from "../details/momentDetail/store";
import { reducer as buskerDetailReducer } from "../details/buskerDetail/store";
import { reducer as registerReducer } from "../adds/register/store";
import { reducer as buskerUpdateReducer } from "../updates/buskerUpdate/store";
import { reducer as albumReducer } from "../pages/album/store";
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
    trail: trailReducer,
    trailDetail: trailDetailReducer,
    moment: momentReducer,
    momentDetail: momentDetailReducer,
    login: loginReducer,
    register: registerReducer,
    buskerUpdate: buskerUpdateReducer,
    album: albumReducer,
    loading: loadingReducer
});

export default reducer;