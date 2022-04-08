import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../components/Home'
import Login from '../components/Login';
import AddDetails from '../components/AddDetails';
const Stack = createStackNavigator();
function HomeStack() {
    return (
        <>
            <Stack.Navigator>

                <Stack.Screen name='Home' component={Home} options={{ headerShown: 'true', headerStyle: { backgroundColor: '#f5821d', }, headerTitleStyle: { color: 'white', } }} />
                <Stack.Screen name='Add Details' component={AddDetails} options={{ headerShown: 'true', headerStyle: { backgroundColor: '#f5821d', }, headerTitleStyle: { color: 'white', } }} />
            </Stack.Navigator>
        </>
    )
}

export default HomeStack