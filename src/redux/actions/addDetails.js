import type from "../type";

export const AddSubmit = (data) => {
    console.log(data)
    return {
        type: type.ADD_DETAILS,
        payload: data
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