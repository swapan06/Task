
import React, { useEffect } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Route from './src/navigation/Route';
import { Provider, useDispatch } from 'react-redux';
import store from './src/redux/store';
import { getItem, getLogin } from './src/utils/utils';
import type from './src/redux/type';
import actions from './src/redux/actions'
import AsyncStorage from '@react-native-async-storage/async-storage';
import strings from './src/constants/lang';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { LoginManager, GraphRequest, GraphRequestManager } from "react-native-fbsdk";
import { Submit } from './src/redux/actions/auth';



const { dispatch } = store;
// ----------------Google Signin----------------//
export const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    const email = userInfo.user.email
    const id = userInfo.user.id
    const data = { email, id }
    Submit(data);
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log(data, "google data");
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.log(error)
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log(error)
      // play services not available or outdated
    } else {
      console.log(error)
      // some other error happened
    }
  }
};


// ---------------Facebook Login-------------------
export const onfbLogin = async () => {
  try {
    await fblogin(_responseInfoCallBack)
  } catch (error) {
    console.log("error raised", error)

  }
}
export const _responseInfoCallBack = async (error, result) => {
  if (error) {
    console.log("error raised", error)
    return;
  }
  else {
    const userData = result
    console.log("fb data+++++", userData)
    Submit(userData);

  }

}

const fblogin = (resCallback) => {
  LoginManager.logOut();
  return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
    result => {
      console.log("fb result==>>>>>>", result);
      if (result.declinedPermissions && result.declinedPermissions.includes("email")) {
        resCallback({ message: " Eamil is required" })
      }
      if (result.isCancelled) {
        console.log("error")
      } else {
        const infoRequest = new GraphRequest(
          '/me?fileds=email,name,picture,friend',
          null,
          resCallback
        );
        new GraphRequestManager().addRequest(infoRequest).start()
      }
    },
    function (error) {
      console.log("Login fail with error:" + error)
    }
  )
}

const App = () => {

  useEffect(() => {
    GoogleSignin.configure()

    getLng()

    getLogin().then((res) => {
      console.log("store data", res)
      actions.Submit(res)
    })

    getItem().then((res) => {
      console.log("get data", res)
      if (!!res) {
        dispatch({
          type: type.ADD_DETAILS,
          payload: res
        })
      }
    })


  }, [])
  // ---------------------Select Language-----------------------//
  const getLng = async () => {
    try {
      const lng = await AsyncStorage.getItem('language')
      console.log("Lng++++", lng)
      if (!!lng) {
        strings.setLanguage(lng)
      } else {
        strings.setLanguage('en')
      }
    } catch (error) {
      console.log("error raised ")
    }
  }

  return (

    <Provider store={store}>
      <Route />
    </Provider>


  )
}
export default App
