import AsyncStorage from '@react-native-async-storage/async-storage'

export const setItem = async (data) => {
    try {
        let jsonValue = JSON.stringify(data)
        await AsyncStorage.setItem('list', jsonValue)
        // console.log("getdata", jsonValue)
        return { jsonValue };

    } catch (error) {
        return false;
    }
}


export const getItem = async () => {
    try {
        const storeItem = await AsyncStorage.getItem('list');
        let jsonValue = JSON.parse(storeItem);
        console.log("savedUser---------", jsonValue);
        return jsonValue

    } catch (error) {
        console.log(error);
    }
};


