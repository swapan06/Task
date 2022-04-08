import React from 'react';
import { useSelector } from 'react-redux';
import Home from '../components/Home';
import Login from '../components/Login';

export default function (Stack) {
    return (
        <>
            <Stack.Screen name='LogIn' component={Login} options={{ headerShown: false, headerStyle: { backgroundColor: '#2874f0', }, headerTitleStyle: { color: 'white', } }} />


        </>
    );
}