import type from "../type";

const initiallistState = {
    list: [],
};
const datainput = (state = initiallistState, action) => {
    switch (action.type) {
        case type.ADD_DETAILS: {
            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        name: data.name,
                        phone: data.phone,
                        age: data.age,
                        roll: data.roll,
                        address: data.address,

                    },
                ],
            }
        }

        case 'DELETE_DATA': {
            const newlist = state.list.filter((elem) => elem.id !== action.id)
            return {
                ...state,
                list: newlist
            }
        }

        case 'EDIT_DATA': {
            console.log("update data", action.payload)
            let data = action.payload;
            let updateArry = state.list.map((val, i) => {
                if (val?.id == data?.editById) {
                    return data
                }
                return val
            })

            console.log("update array", updateArry)

            return {
                ...state,
                list: updateArry
            }
        }

        default: return state

    }
}





export default datainput