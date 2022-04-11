import React from 'react'
import { View, Text, TextInput, Button, Image } from 'react-native'
import HomeStack from '../navigation/HomeStack'
import styles from '../style/style'
import Home from '../Screens/Home'
import { images } from '../assets/images/images'
import { useDispatch } from 'react-redux'
import { Submit } from '../redux/actions/auth'

function Login(navigation) {
    // const [addname, setName] = useState('');
    // const [password, setPassword] = useState('');
    // // -------show erroe----------
    // const [showname, setshowName] = useState(false);
    // const [showpassword, setshowPassword] = useState(false);
    const dispatch = useDispatch()

    // const handleSubmit = () => {
    //     if (addname === '') {
    //         setshowName(true);
    //     } else if (password === '') {
    //         setshowPassword(true);
    //         setshowName(false);
    //     }
    //     else {
    //         setshowPassword(false);
    //     }
    // }
    return (
        <View style={styles.logincontainer}>
            <View >
                <Text style={styles.logintext}>LOGIN</Text>
            </View>
            <View>
                <Text style={styles.usertext}>Username</Text>
                <TextInput keyboardType='email-address' placeholder='Enter Username' style={styles.input}></TextInput>
            </View>
            {/* {showname ? (<Text style={styles.error}> Enter Your Name</Text>) : null} */}
            <View>
                <Text style={styles.usertext}>Password</Text>
                <TextInput keyboardType='ascii-capable' placeholder='Enter Password' style={styles.input}></TextInput>
            </View>
            {/* {showname ? (<Text style={styles.error}> Enter Your Password</Text>) : null} */}
            <View style={styles.buttonView}>
                <Button title='Submitt' color='#f2570f' onPress={() => dispatch(Submit())} ></Button>
            </View>
        </View>
    )
}

export default Login