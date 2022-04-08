import React from 'react'
import { View, Text, TextInput, Button, Image } from 'react-native'
import HomeStack from '../navigation/HomeStack'
import styles from '../style/style'
import Home from './Home'
import { images } from '../assets/images/images'
import { useDispatch } from 'react-redux'
import { Submit } from '../redux/actions/auth'

function Login(navigation) {
    const dispatch = useDispatch()
    return (
        <View style={styles.logincontainer}>
            <View >
                <Text style={styles.logintext}>LOGIN</Text>
            </View>
            <View>
                <Text style={styles.usertext}>Username</Text>
                <TextInput keyboardType='email-address' placeholder='Enter Username' style={styles.input}></TextInput>
            </View>
            <View>
                <Text style={styles.usertext}>Password</Text>
                <TextInput keyboardType='ascii-capable' placeholder='Enter Password' style={styles.input}></TextInput>
            </View>
            <View style={styles.buttonView}>
                <Button title='Submitt' color='#f2570f' onPress={() => dispatch(Submit())} ></Button>
            </View>
        </View>
    )
}

export default Login