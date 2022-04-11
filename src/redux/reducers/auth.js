import type from "../type";
const initialstate = false;
const userStatus = (state = initialstate, action) => {
    switch (action.type) {
        case type.LOGIN: return state = true;
        // case type.ADD_DETAILS: return state = false;
        default: return state;
    }
}
export default userStatus