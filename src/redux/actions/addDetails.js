import type from "../type";

export const AddSubmit = (data) => {
    return {
        type: type.ADD_DETAILS,
        payload: {
            id: Math.floor(Math.random() * 100),
            data: data,
        },
    };

}
export const deleteDetails = (id) => {
    return {
        type: 'DELETE_DATA',
        id

    };
};
export const editDetails = (data) => {
    return {
        type: 'EDIT_DATA',
        payload: data
    }
}