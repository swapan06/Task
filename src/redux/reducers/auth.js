import { setItem, storeLogin, LogoutData, getLogin } from "../../utils/utils";
import type from "../type";
const initialstate = {
    userData: {}
};
const userStatus = (state = initialstate, action) => {
    switch (action.type) {
        case type.LOGIN: {
            const data = action.payload
            console.log("Logindata----", data)
            setItem(data)
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
            return { ...state.userData, userData: undefined }
        }
        default: return state;
    }
}
export default userStatus