
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
import { getItem } from './src/utils/utils';
import type from './src/redux/type';




const { dispatch } = store;

const App = () => {
  useEffect(() => {
    getItem().then((res) => {
      console.log("store data", res)
      if (!!res) {
        dispatch({
          type: type.ADD_DETAILS,
          payload: res
        })
      }
    })
  }, [])
  return (

    <Provider store={store}>
      <Route />
    </Provider>


  )
}
export default App
