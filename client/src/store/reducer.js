import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from "../common/header/store";
import { reducer as homeReducer } from "../pages/home/store";
import { reducer as buskerReducer } from "../pages/busker/store";
import { reducer as performanceReducer } from "../pages/performance/store";
import { reducer as momentReducer } from "../pages/moment/store";
import { reducer as loginReducer } from "../pages/login/store";
import { reducer as momentDetailReducer } from "../details/momentDetail/store";

/*
    使用combineReducer对reducer进行管理
    以避免所有reducer下载一个文件造成不好维护
*/
const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    busker: buskerReducer,
    performance: performanceReducer,
    moment: momentReducer,
    momentDetail: momentDetailReducer,
    login: loginReducer
});

export default reducer;