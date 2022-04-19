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
            let data = action.payload;

            const newArr = [...state.list]
            let userID = action.payload.id;
            console.log("userID", userID)

            console.log("newArr", newArr)
            let updatedArray = state.list.findIndex((val) => val.id === userID);

            console.log("data", data)
            newArr[updatedArray] = data
            console.log("update id=====", updatedArray)
            setItem(newArr).then((val) => {
                console.log("my store data", val)
            })
            return {
                ...state.list,
                list: newArr
            }

        }

        default: return state

    }
}





export default datainput