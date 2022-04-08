
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Login from './src/components/Login';
import styles from './src/style/style';
import Home from './src/components/Home'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Route from './src/navigation/Route';
import AddDetails from './src/components/AddDetails';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (

    <Provider store={store}>
      <Route />
    </Provider>
    // <SafeAreaProvider>
    //   {/* <Route /> */}
    //   <AddDetails />
    // </SafeAreaProvider>

  )
}
export default App
