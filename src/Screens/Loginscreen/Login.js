import React, { useState } from 'react'
import { View, Text, TextInput, Button, Image } from 'react-native'
import HomeStack from '../../navigation/HomeStack'
import styles from '../../style/style'
import style from '../Loginscreen/style'
import Home from '../Homescreen/Home'
import { images } from '../../assets/images/images'
import { useDispatch } from 'react-redux'
import { Submit } from '../../redux/actions/auth'



function Login(navigation) {
    const [addname, setName] = useState('');
    const [password, setPassword] = useState('');
    // -------show error----------
    const [showname, setshowName] = useState(false);
    const [showpassword, setshowPassword] = useState(false);
    const dispatch = useDispatch()

    const handleSubmit = () => {

        if (emailRegex.test(addname)) {
            setshowName(true);
        } else if (password === '') {
            setshowPassword(true);
            setshowName(false);
        }
        else {
            setshowPassword(false);
        }
    }
    return (
        <View style={styles.logincontainer}>
            <View >
                <Text style={style.logintext}>LOGIN</Text>
            </View>
            <View>
                <Text style={style.usertext}>Username</Text>
                <TextInput
                    placeholder='Enter Username'
                    keyboardType='email-address'
                    style={styles.input}
                />
            </View>
            {showname ? (<Text style={styles.error}> Enter Your Name</Text>) : null}
            <View>
                <Text style={style.usertext}>Password</Text>
                <TextInput
                    placeholder='Enter Password'
                    keyboardType='email-address'
                    style={styles.input}
                />
            </View>
            {showname ? (<Text style={styles.error}> Enter Your Password</Text>) : null}
            <View style={styles.buttonView}>
                <Button title='Submit' color='#f2570f' onPress={() => dispatch(Submit())} ></Button>
            </View>
        </View>
    )
}

export default Login