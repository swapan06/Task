import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import RNRestart from 'react-native-restart'
import { useDispatch } from 'react-redux'
import strings, { changeLaguage } from '../../constants/lang'
import actions from '../../redux/actions'
import styles from '../../style/style'
import style from '../Loginscreen/style'




function Login(navigation) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    // -------show error----------
    const [showname, setshowName] = useState(false);
    const [showpassword, setshowPassword] = useState(false);
    const dispatch = useDispatch()
    const data = { name, password }
    const Logindata = () => {

        if (name === '') {
            setshowName(true);
        } else if (password === '') {
            setshowPassword(true);
            setshowName(false);
        }
        else {
            setshowPassword(false);
            console.log('mylogin----', data)
            actions.Submit(data)
        }
    }

    const onChangeLng = (key) => {
        changeLaguage(key)
        RNRestart.Restart()
    }

    return (
        <View style={styles.logincontainer}>
            <View >
                <Text style={style.logintext}>{strings.LOGIN}</Text>
            </View>
            <View>
                <Text style={style.usertext}>{strings.USERNAME}</Text>
                <TextInput
                    placeholder={strings.ENTER_USERNAME}
                    keyboardType='email-address'
                    style={styles.input}
                    onChangeText={(event) => setName(event)}
                />
            </View>
            {showname ? (<Text style={styles.error}> {strings.ENTER_YOUR_NAME}</Text>) : null}
            <View>
                <Text style={style.usertext}>{strings.PASSWORD}</Text>
                <TextInput
                    placeholder={strings.ENTER_PASSWORD}
                    keyboardType='email-address'
                    style={styles.input}
                    onChangeText={(event) => setPassword(event)}
                />
            </View>
            {showname ? (<Text style={styles.error}> {strings.ENTER_YOUR_PASSWORD}</Text>) : null}
            <View style={styles.buttonView}>
                <Button title={strings.SUBMIT} color='#f2570f' onPress={Logindata} ></Button>

                <View style={{ marginVertical: 12 }} />


                <Button title='Change Language(FR)' color='black' onPress={() => onChangeLng('fr')} ></Button>
                <View style={{ marginVertical: 12 }} />

                <Button title='Change Language(EN)' color='black' onPress={() => onChangeLng('en')} ></Button>

            </View>
        </View>
    )
}

export default Login