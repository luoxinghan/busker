export const loadingReducer = (state = {}, action) => {
    const { type } = action;
    const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);
    // If it is not * _REQUEST / * _SUCCESS / * _FAILURE actions, we will ignore them
    if (!matches) return state;

    const [, requestName, requestState] = matches;
    return {
        ...state,
        // Store whether a request is currently occurring
        // For example: when receiving GET_TODOS_REQUEST, loading is true
        // When receiving GET_TODOS_SUCCESS / GET_TODOS_FAILURE, loading is false
        [requestName]: requestState === 'REQUEST',
    };
};