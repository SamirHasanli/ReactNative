const INITIAL_STATE = { id: '' }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'NEWS_QUERY_CHANGED':
            return { ...state, id: action.payload };
        default:
            return state;
    }
};