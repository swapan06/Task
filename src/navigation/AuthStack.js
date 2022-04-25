import React from 'react';
import { useSelector } from 'react-redux';
import navigationStrings from '../constants/navigationStrings';
import Home from '../Screens/Homescreen/Home';
import Login from '../Screens/Loginscreen/Login';
import SignUp from '../Screens/SignUpscreen/SignUp';


export default function (Stack) {
    return (
        <>
            <Stack.Screen name={navigationStrings.LOGIN} component={Login} options={{ headerShown: false, headerTitleStyle: { color: 'white', } }} />
            <Stack.Screen name={navigationStrings.SIGNUP} component={SignUp} options={{ headerShown: false, headerTitleStyle: { color: 'white', } }} />


        </>
    );
}