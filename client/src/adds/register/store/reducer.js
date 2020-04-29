import { fromJS } from "immutable";
import {actionTypes} from "./index";

const defaultState = fromJS({
    data: [],
    redirectTo: '', // 完成之后跳到哪里
    message: '', // 错误消息
    isRegister: false // 是否登录
});

export default (state=defaultState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_SUCCESS:
            return state.merge({
                data: fromJS(action.data),
                redirectTo: "/login",
                isRegister: true
            });
        case actionTypes.REGISTER_FAIL:
            return state.merge({
                message: action.message
            });
        case actionTypes.CLEAN_REGISTER:
            return state.merge({
                isRegister: false
            });
        default:
            return state;
    }
}