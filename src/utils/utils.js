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

export const storeLogin = async (data) => {
    console.log(data, '------------store>my>data')
    try {
        let jsonValue = JSON.stringify(data)
        await AsyncStorage.setItem('LoginData', jsonValue)
        console.log(jsonValue, 'store my data')
        return { jsonValue }
    } catch (e) {
        // saving error
        console.log("error rasied to store data")
    }
}
export const getLogin = async () => {
    try {
        const value = await AsyncStorage.getItem('LoginData')
        let jsonValue = JSON.parse(value)
        console.log(jsonValue, 'get------data')
        return jsonValue
    } catch (e) {
        // error reading value
    }
}

export const LogoutData = async () => {
    try {
        await AsyncStorage.removeItem('LoginData')
    } catch (error) {
        console.log(error)
    }
}


