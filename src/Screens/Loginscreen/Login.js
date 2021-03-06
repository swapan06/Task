import { GoogleSignin } from '@react-native-google-signin/google-signin'
import React, { useState } from 'react'
import { Button, Text, TextInput, View, TouchableOpacity, Image } from 'react-native'
import RNRestart from 'react-native-restart'
import { useDispatch } from 'react-redux'
import { onfbLogin, signIn } from '../../../App'
import { images } from '../../constants/images'
import strings, { changeLaguage } from '../../constants/lang'
import navigationStrings from '../../constants/navigationStrings'
import actions from '../../redux/actions'
import styles from '../../style/style'
import style from '../Loginscreen/style'
import SignUp from '../SignUpscreen/SignUp'



function Login({ navigation }) {
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
    // ----------Language Function-------------//
    const onChangeLng = (key) => {
        changeLaguage(key)
        RNRestart.Restart()
    }

    return (
        <View style={styles.logincontainer}>
            <View >
                <Image source={images?.todo} style={style.loginimg}></Image>
                {/* <Text style={style.logintext}>{strings.LOGIN}</Text> */}
            </View>
            {/* ---------------------Username Input------------- */}
            <View>
                <Text style={style.usertext}>{strings.USERNAME}</Text>
                <TextInput
                    placeholder={strings.ENTER_USERNAME}
                    keyboardType='email-address'
                    style={styles.input}
                    onChangeText={(event) => setName(event)} />
            </View>
            {showname ? (<Text style={styles.error}> {strings.ENTER_YOUR_NAME}</Text>) : null}
            {/*----------------------Password Input---------------  */}
            <View>
                <Text style={style.usertext}>{strings.PASSWORD}</Text>
                <TextInput
                    placeholder={strings.ENTER_PASSWORD}
                    keyboardType='email-address'
                    style={styles.input}
                    onChangeText={(event) => setPassword(event)} />
            </View>
            {showname ? (<Text style={styles.error}> {strings.ENTER_YOUR_PASSWORD}</Text>) : null}
            {/* ------------------Submit Button------------------ */}
            <TouchableOpacity>
                <View style={styles.buttonView}>
                    <Text onPress={Logindata} style={style.btntext}>{strings.SUBMIT}</Text>
                </View>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
                <Text style={style.textstyle}>Don't have an account ?</Text>
                <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.SIGNUP)}>
                    <Text style={style.signupstyle}> Sign Up</Text>
                </TouchableOpacity>
            </View>
            {/* --------------------Image Logo----------------------- */}
            <View style={{ marginVertical: 4, flexDirection: 'row' }}>
                <TouchableOpacity onPress={signIn}>
                    <Image style={style.logoimg} source={images?.google}></Image>
                </TouchableOpacity>
                <Text style={{ marginVertical: 10, textAlign: 'center', fontSize: 18, }}>or </Text>
                <TouchableOpacity onPress={onfbLogin}>
                    <Image style={style.logoimg} source={images?.facebook}></Image>
                </TouchableOpacity>
            </View>
            {/* ----------------------Select Languages------------------ */}
            <View style={{ marginVertical: 8, }} />
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16, }}>Select Language</Text>
            <TouchableOpacity>
                <Text style={style.lngtext} onPress={() => onChangeLng('en')}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={style.lngtext} onPress={() => onChangeLng('fr')}>Fran??ais</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Login