import { combineReducers} from "redux-immutable";
import { reducer as headerReducer } from '../common/header/store';

/*
    使用combineReducer对reducer进行管理
    以避免所有reducer下载一个文件造成不好维护
*/
const reducer = combineReducers({
    header: headerReducer
});

export default reducer;