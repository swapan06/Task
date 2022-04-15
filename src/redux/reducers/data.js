import { getItem, setItem } from "../../utils/utils";
import type from "../type";

const initiallistState = {
    list: [],
};
const datainput = (state = initiallistState, action) => {
    switch (action.type) {
        case type.ADD_DETAILS: {
            const data = action.payload
            console.log("dataaaaaa", data);

            let mergeData = [
                ...state.list,
                ...data
            ]
            setItem(mergeData).then((val) => {
                console.log("data is store", val)
            })
            return {
                ...state,
                list: mergeData,
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
            // console.log("update data", action.payload)
            const data = action.payload;
            newArr = [...state.list]
            let updatedArray = state.list.findIndex((val) => { val.id === data.id })
            newArr[updatedArray] = data
            return {
                ...state.list,
                list: newArr
            }


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