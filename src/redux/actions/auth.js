import store from "../store";
import type from "../type"

const { dispatch } = store

export const Submit = (data) => {

    dispatch({
        type: type.LOGIN,
        payload: data
    })
};

export const logout = () => {

    dispatch({
        type: type.USERLOGOUT,

    })
};
