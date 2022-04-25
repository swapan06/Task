//import liraries
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { images } from '../../constants/images';
import style from '../SignUpscreen/style';
import navigationStrings from '../../constants/navigationStrings';
import strings from '../../constants/lang';
import styles from '../../style/style';
import actions from '../../redux/actions';
import axios from 'axios';

const baseUrl = "http://192.168.100.101:8001/api/signup"

// create a component
const SignUp = ({ navigation }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    // -------show error----------
    const [showname, setshowName] = useState(false);
    const [showpassword, setshowPassword] = useState(false);
    const dispatch = useDispatch()
    const data = { name, password }

    const Signupdata = () => {

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

    const onSignup = async () => {

        let apiData = {
            first_name: "Code",
            last_name: "Brew",
            email: "CodeBrew1@gmail.com",
            phone: '98765414569',
            phone_code: "91",
            country_code: "IN",
            device_token: 'KDKFJDKFDFKDFDF',
            device_type: Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
            password: '123456'
        }
        try {
            const res = await actions.signUp(apiData)
            console.log("singnup api res_+++++", res)
            alert("User signup successfully....!!!")
        } catch (error) {
            console.log("error raised", error)
            alert(error?.message)
        }
    }

    return (
        <View style={styles.signupcontainer}>
            <View >
                {/* <Image source={images?.todo} style={style.loginimg}></Image> */}
                <Text style={style.logintext}>{strings.SIGNUP_TO_YOUR_ACCOUNT}</Text>
            </View>
            {/* ---------------------Username Input------------- */}
            <View>
                <Text style={style.usertext}>{strings.FIRST_NAME}</Text>
                <TextInput
                    placeholder={strings.ENTER_FIRST_NAME}
                    keyboardType='email-address'
                    style={styles.input}
                    onChangeText={(event) => setName(event)} />
            </View>
            {showname ? (<Text style={styles.error}> {strings.ENTER_YOUR_FIRST_NAME}</Text>) : null}
            {/* ----------------- */}
            <View>
                <Text style={style.usertext}>{strings.LAST_NAME}</Text>
                <TextInput
                    placeholder={strings.ENTER_LAST_NAME}
                    keyboardType='email-address'
                    style={styles.input}
                    onChangeText={(event) => setName(event)} />
            </View>
            {showname ? (<Text style={styles.error}> {strings.ENTER_YOUR_LAST_NAME}</Text>) : null}
            {/*  */}
            <View>
                <Text style={style.usertext}>{strings.PHONE_NO}</Text>
                <TextInput placeholder={strings.PHONE_NO}
                    keyboardType='numeric'
                    onChangeText={event => setPhone(event)}
                    style={styles.input} />
            </View>
            {showname ? (<Text style={styles.error}>{strings.ENTER_YOUR_PHONENO}</Text>) : null}
            {/*----------------------Password Input---------------  */}
            <View>
                <Text style={style.usertext}>{strings.EMAIL}</Text>
                <TextInput
                    placeholder={strings.ENTER_EMAIL}
                    keyboardType='email-address'
                    style={styles.input}
                    onChangeText={(event) => setPassword(event)} />
            </View>
            {showname ? (<Text style={styles.error}> {strings.ENTER_YOUR_EMAIL}</Text>) : null}
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
                    <Text onPress={onSignup} style={style.btntext}>{strings.SUBMIT}</Text>
                </View>
            </TouchableOpacity>
            {/* -------------------Already user Login----------------- */}
            <View style={{ flexDirection: 'row' }}>
                <Text style={style.textstyle}>Already a user?</Text>
                <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.LOGIN)}>
                    <Text style={style.signupstyle}> LOGIN</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SignUp;
