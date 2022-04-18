import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screens/Homescreen/Home'
import Login from '../Screens/Loginscreen/Login';
import AddDetails from '../Screens/AddDetailsscreen/AddDetails';
import strings from '../constants/lang';
const Stack = createStackNavigator();
function HomeStack() {
    return (
        <>
            <Stack.Navigator>

                <Stack.Screen name={strings.HOME} component={Home} options={{ headerShown: 'true', headerStyle: { backgroundColor: '#f5821d', }, headerTitleStyle: { color: 'white', } }} />
                <Stack.Screen name='Add Details' component={AddDetails} options={{ headerShown: 'true', headerStyle: { backgroundColor: '#f5821d', }, headerTitleStyle: { color: 'white', } }} />
            </Stack.Navigator>
        </>
    )
}

export default HomeStack