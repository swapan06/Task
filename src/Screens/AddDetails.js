import React, { useState } from 'react'
import { View, Text, TextInput, Image, Button } from 'react-native'
import styles from '../style/style'
import { images } from '../assets/images/images'
import { useDispatch } from 'react-redux';
import { AddSubmit } from '../redux/actions/auth';

function AddDetails({ navigation }) {
    const [addname, setName] = useState('swapan');
    const [age, setAge] = useState('24');
    const [rollnumber, setRollnumber] = useState('1110');
    const [addphone, setPhone] = useState('1234567891');
    const [address, setAddress] = useState('mohali');
    // ---------------Show error--------------------//
    const [showname, setshowName] = useState(false);
    const [showphone, setshowPhone] = useState(false);
    const [showage, setshowAge] = useState(false);
    const [showrollnumber, setshowRollnumber] = useState(false);
    const [showaddress, setshowAddress] = useState(false);

    const dispatch = useDispatch();
    const data = { addname, age, rollnumber, addphone, address }

    const Submit = () => {
        if (addname === '') {
            setshowName(true);
        } else if (age === '') {
            setshowAge(true);
            setshowName(false);
        } else if (rollnumber === '') {
            setshowRollnumber(true);
            setshowAge(false);
        } else if (addphone === '') {
            setshowPhone(true);
            setshowRollnumber(false);
        } else if (address === '') {
            setshowAddress(true)
            setshowPhone(false)
        }
        else {
            // console.log(data)

            setshowAddress(false);
            dispatch(AddSubmit(data))
            navigation.navigate('Home')

        }
    }
    return (
        <View style={styles.logincontainer}>
            <View>
                <TextInput placeholder='Name'
                    value={addname}
                    keyboardType='email-address'
                    onChangeText={event => setName(event)}
                    style={styles.input} />
            </View>
            {showname ? (<Text style={styles.error}> Enter Your Name</Text>) : null}
            <View>
                <TextInput placeholder='Age'
                    value={age}
                    keyboardType='email-address'
                    onChangeText={event => setAge(event)}
                    style={styles.input} />
            </View>
            {showage ? (<Text style={styles.error}> Enter Your Age</Text>) : null}
            <View>
                <TextInput placeholder='Roll No'
                    value={rollnumber}
                    keyboardType='email-address'
                    onChangeText={event => setRollnumber(event)}
                    style={styles.input} />
            </View>
            {showrollnumber ? (<Text style={styles.error}> Enter Your Roll No</Text>) : null}
            <View>
                <TextInput placeholder='Phone No'
                    value={addphone}
                    keyboardType='email-address'
                    onChangeText={event => setPhone(event)}
                    style={styles.input} />
            </View>
            {showphone ? (<Text style={styles.error}>Enter Your Phone No</Text>) : null}
            <View>
                <TextInput placeholder='Address'
                    value={address}
                    keyboardType='email-address'
                    onChangeText={event => setAddress(event)}
                    style={styles.input} />
            </View>
            {showaddress ? (<Text style={styles.error}> Enter Your Address</Text>) : null}
            <View style={styles.buttonView}>
                <Button title='Submit' color='#f2570f' onPress={Submit} ></Button>
            </View>
        </View >

    )
}

export default AddDetails