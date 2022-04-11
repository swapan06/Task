import type from "../type"
export const Submit = () => {
    return {
        type: type.LOGIN
    }
}
export const AddSubmit = (data) => {
    return {
        type: type.ADD_DETAILS,
        payload: {
            id: Math.floor(Math.random() * 1000),
            data: data,
        }
    }
}