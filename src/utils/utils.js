import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import type from '../redux/type'




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
    console.log('utils set login data', data)
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
export async function getHeaders() {
	let loginUser = await AsyncStorage.getItem('loginUser');
	if (loginUser) {
		loginUser = JSON.parse(loginUser);
		//console.log(userData.accessToken, 'header')
		return {
			authorization: `${loginUser?.access_token}`,
		};
	}
	return {};
}


export async function apiReq(
	endPoint,
	data,
	method,
	headers,
	requestOptions = {}
) {
console.log("api hit",endPoint)
	return new Promise(async (res, rej) => {
		const getTokenHeader = await getHeaders();
		headers = {
			...getTokenHeader,
			...headers
		};

		if (method === 'get' || method === 'delete') {
			data = {
				...requestOptions,
				...data,
				headers
			};
		}

		axios[method](endPoint, data, { headers })
			.then(result => {

				const { data } = result;

				if (data.status === false) {
					return rej(data);
				}

				return res(data);
			})
			.catch(error => {
				console.log(error)
				console.log(error && error.response, 'the error respne')
				if (error && error.response && error.response.status === 401) {
					clearUserData();
					clearLoginUser();	
					// NavigationService.resetNavigation();
					//NavigationService.navigate('loginUsingEmailScreen');
					dispatch({
						type: type.CLEAR_REDUX_STATE,
						payload: {}
					});
					dispatch({
						type: type.NO_INTERNET,
						payload: { internetConnection: true },
					});


				}
				if (error && error.response && error.response.data) {
					if (!error.response.data.message) {
						return rej({ ...error.response.data, msg: error.response.data.message || "Network Error" })
					}
					return rej(error.response.data)
				} else {
					return rej({ message: "Network Error", msg: "Network Error" });
				}
				return rej(error);
			});
	});
}

export function apiPost(endPoint, data, headers = {}) {
	return apiReq(endPoint, data, 'post', headers);
}

export function apiDelete(endPoint, data, headers = {}) {
	return apiReq(endPoint, data, 'delete', headers);
}

export function apiGet(endPoint, data, headers = {}, requestOptions) {
	return apiReq(endPoint, data, 'get', headers, requestOptions);
}

export function apiPut(endPoint, data, headers = {}) {
	return apiReq(endPoint, data, 'put', headers);
}



// export function setItem(key, data) {
// 	data = JSON.stringify(data);
// 	return AsyncStorage.setItem(key, data);
// }

// export function getItem(key) {
// 	return new Promise((resolve, reject) => {
// 		AsyncStorage.getItem(key).then(data => {
// 			resolve(JSON.parse(data));
// 		});
// 	});
// }

export function removeItem(key) {
	return AsyncStorage.removeItem(key);
}

export function clearAsyncStorate(key) {
	return AsyncStorage.clear();
}

export function setUserData(data) {
	data = JSON.stringify(data);
	return AsyncStorage.setItem('userData', data);
}

export function setLoginUser(data) {
	data = JSON.stringify(data);
	return AsyncStorage.setItem('loginUser', data);
}

export function setDefaultSelectedLanguage(data) {
	data = JSON.stringify(data);
	return AsyncStorage.setItem('defaultLanguage', data);
}


export function setClientInfo(data) {
	data = JSON.stringify(data);
	return AsyncStorage.setItem('clientInfo', data);
}
export function saveShortCodeData(data) {
	data = JSON.stringify(data);
	return AsyncStorage.setItem('saveShortCode', data);
}

export async function getUserData() {
	return new Promise((resolve, reject) => {
		AsyncStorage.getItem('userData').then(data => {
			resolve(JSON.parse(data));
		});
	});
}






export function setLanguage(data) {
	data = JSON.stringify(data);
	return AsyncStorage.setItem('language', data);
}

export async function getLanguage() {
	return new Promise((resolve, reject) => {
		AsyncStorage.getItem('language').then(data => {
			resolve(JSON.parse(data));
		});
	});
}


export async function clearUserData() {
	return AsyncStorage.removeItem('userData');
}

export async function clearLoginUser() {
	return AsyncStorage.removeItem('loginUser');
}



