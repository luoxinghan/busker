import { fromJS } from "immutable";
import {actionTypes} from "./index";

const defaultState = fromJS({
    userType: 3, //用户类型
    captcha: ''
});

export default (state=defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_USER_TYPE:
            return state.merge({
                userType: action.userType
            });
        case actionTypes.CHANGE_CAPTCHA_NUMBER:
            return state.merge({
                captcha: action.captcha
            });
        default:
            return state;
    }
}