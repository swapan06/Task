const initiallistState = {
    list: [],
};
const datainput = (state = initiallistState, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        name: data.addname,
                        phone: data.addphone,
                        age: data.age,
                        roll: data.rollnumber,
                        address: data.address,

                    },
                ],
            }
        case 'DELETE_DATA':

            const newlist = state.list.filter((elem) => elem.id !== action.id)
            return {
                ...state,
                list: newlist
            }

        default: return state

    }
}

export default datainput