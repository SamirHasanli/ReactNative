import { USER_ADDER_IN_CHANGE } from '../structs/typesRedux';


export const userAdderInputChange = ({ props, value }) => {
    return (dispatch) => {
        dispatch({
            type: USER_ADDER_IN_CHANGE,
            payload: { props, value}
        });
    };
};