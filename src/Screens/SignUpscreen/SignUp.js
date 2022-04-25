//import liraries
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { images } from '../../constants/images';
import style from '../Loginscreen/style';
import navigationStrings from '../../constants/navigationStrings';
import strings from '../../constants/lang';
import styles from '../../style/style';
import actions from '../../redux/actions';

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
            {/* ----------------- */}
            <View>
                <Text style={style.usertext}>{strings.PHONE_NO}</Text>
                <TextInput
                    placeholder={strings.PHONE_NO}
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
                    <Text onPress={Signupdata} style={style.btntext}>{strings.SUBMIT}</Text>
                </View>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
                <Text style={style.textstyle}>Already a user?</Text>
                <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.LOGIN)}>
                    <Text style={style.signupstyle}> LOGIN</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// define your styles


//make this component available to the app
export default SignUp;
