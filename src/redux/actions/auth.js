import { SIGNUP } from "../../config/urls";
import { apiPost } from "../../utils/utils";
import store from "../store";
import type from "../type"

const { dispatch } = store

export const Submit = (data) => {
    console.log(data)
    dispatch({
        type: type.LOGIN,
        payload: data
    })
};

export function signUp(data) {
    return apiPost(SIGNUP, data);
}

export const logout = () => {

    dispatch({
        type: type.USERLOGOUT,

    })
};
