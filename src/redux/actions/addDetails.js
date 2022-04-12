import type from "../type";

export const AddSubmit = (data) => {
    return {
        type: type.ADD_DETAILS,
        payload: {
            id: Math.floor(Math.random() * 100),
            data: data,
        }
    }
}