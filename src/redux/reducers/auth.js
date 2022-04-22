import { setItem, LogoutData, getLogin } from "../../utils/utils";
import type from "../type";
const initialstate = {
    userData: {}
};
const userStatus = (state = initialstate, action) => {
    switch (action.type) {
        case type.LOGIN: {
            const data = action.payload;
            setItem(data)
            console.log("LoginData", data)
            return { ...state.userData, userData: data };
        }
        case type.USERLOGOUT: {
            LogoutData();
            getLogin().then((res) => {
                setItem(data)
                return {
                    ...state.userData,
                    userData: res
                }
            })
            return { userData: undefined }
        }
        default: return state;
    }
}
export default userStatus