/*
import _ from 'lodash';
export const createLoadingSelector = (actions) => (state) => {
    console.log(state);
    console.log(_.get(state, ``));
    return _(actions)
        .some((action) => _.get(state, `api/${action}`))
};*/

export const createErrorMessageSelector = actions => (state) => {
    const errors = actions.map(action => state.error[action]);
    if (errors && errors[0]) {
        return errors[0];
    }
    return '';
};


export const createLoadingSelector = actions => state =>
    actions.some(action => state.get("loading")[action]);


/*
export const createLoadingSelector = actions => state => {
    console.log(state.get("loading")[actions])
};
*/
