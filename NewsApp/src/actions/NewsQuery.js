export const NewsQueryChanged = (id) => {
    return (dispatch) => {
        dispatch({
            type: 'NEWS_QUERY_CHANGED',
            payload: id
        });
    }
};