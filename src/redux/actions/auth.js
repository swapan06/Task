import store from "../store";
import type from "../type"

const { dispatch } = store

export const Submit = (data) => {
    console.log(data, "yugyfgadscad------")
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
