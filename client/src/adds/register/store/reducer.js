import { fromJS } from "immutable";
import {actionTypes} from "./index";

const defaultState = fromJS({
    data: [],
    redirectTo: '', // 完成之后跳到哪里
    message: '', // 错误消息
    isLogin: false // 是否登录
});

export default (state=defaultState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_SUCCESS:
            return state.merge({
                data: fromJS(action.data),
                message: "",
                redirectTo: "/login"
            });
        case actionTypes.REGISTER_FAIL:
            return state.merge({
                message: action.message
            });
        default:
            return state;
    }
}