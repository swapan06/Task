import React, { useState } from 'react'
import { View, Text, TextInput, Image, Button } from 'react-native'
import style from '../AddDetailsscreen/style'
import styles from '../../style/style'
import { images } from '../../assets/images/images'
import { useDispatch } from 'react-redux';
import { AddSubmit, editDetails } from '../../redux/actions/addDetails';
import { getItem, setItem } from '../../utils/utils';

function AddDetails({ navigation, route }) {

    //data through navigation
    const allData = route?.params?.Data;
    const allIndex = route?.params?.Index;
    const editById = allData?.id;
    // console.log("data fater navigating on add details", allData, allIndex, editById);

    const [name, setName] = useState(allData ? allData?.name : '')
    const [age, setAge] = useState(allData ? allData?.age : '');
    const [roll, setRollnumber] = useState(allData ? allData?.roll : '');
    const [phone, setPhone] = useState(allData ? allData?.phone : '');
    const [address, setAddress] = useState(allData ? allData?.address : '');
    // ---------------Show error--------------------//
    const [showname, setshowName] = useState(false);
    const [showphone, setshowPhone] = useState(false);
    const [showage, setshowAge] = useState(false);
    const [showrollnumber, setshowRollnumber] = useState(false);
    const [showaddress, setshowAddress] = useState(false);

    const dispatch = useDispatch();

    const id = Math.floor(Math.random() * 100);
    const data = [{ id, name, age, roll, phone, address }]

    const Edit = () => {
        console.log('Edit is working')


        if (name === '') {
            setshowName(true);
        } else if (age.length !== 2) {
            setshowAge(true);
            setshowName(false);
        } else if (roll === '') {
            setshowRollnumber(true);
            setshowAge(false);
        } else if (phone.length !== 10) {
            setshowPhone(true);
            setshowRollnumber(false);
        } else if (address === '') {
            setshowAddress(true)
            setshowPhone(false)
        }
        else {
            // console.log(data)

            setshowAddress(false);
            dispatch(editDetails[({ name, age, roll, phone, address, allIndex, editById })])
            navigation.navigate('Home')

        }
    }
    const Submit = () => {

        if (name === '') {
            setshowName(true);
        } else if (age.length !== 2) {
            setshowAge(true);
            setshowName(false);
        } else if (roll.length !== 4) {
            setshowRollnumber(true);
            setshowAge(false);
        } else if (phone.length !== 10) {
            setshowPhone(true);
            setshowRollnumber(false);
        } else if (address === '') {
            setshowAddress(true)
            setshowPhone(false)
        }
        else {
            // console.log(data)
            setItem(data);
            setshowAddress(false);
            dispatch(AddSubmit(data))
            navigation.navigate('Home')

        }
    }
    return (
        <View style={styles.logincontainer}>
            <View>
                <TextInput placeholder='Name'
                    value={name}
                    returnKeyType={'done'}
                    autoFocus={true}
                    keyboardType='email-address'
                    onChangeText={event => setName(event)}
                    style={styles.input} />
            </View>
            {showname ? (<Text style={styles.error}> Enter Your Name</Text>) : null}
            <View>
                <TextInput placeholder='Age'
                    value={age}
                    keyboardType='numeric'
                    onChangeText={event => setAge(event)}
                    style={styles.input} />
            </View>
            {showage ? (<Text style={styles.error}> Enter Your Age</Text>) : null}
            <View>
                <TextInput placeholder='Roll No'
                    value={roll}
                    keyboardType='numeric'
                    returnKeyType={'done'}
                    onChangeText={event => setRollnumber(event)}
                    style={styles.input} />
            </View>
            {showrollnumber ? (<Text style={styles.error}> Enter Your Roll No</Text>) : null}
            <View>
                <TextInput placeholder='Phone No'
                    value={phone}
                    keyboardType='numeric'
                    onChangeText={event => setPhone(event)}
                    style={styles.input} />
            </View>
            {showphone ? (<Text style={styles.error}>Enter Valid Phone No</Text>) : null}
            <View>
                <TextInput placeholder='Address'
                    value={address}
                    keyboardType='email-address'
                    onChangeText={event => setAddress(event)}
                    style={styles.input} />
            </View>
            {showaddress ? (<Text style={styles.error}> Enter Your Address</Text>) : null}
            <View style={styles.buttonView}>
                <Button title={(allData) ? 'Edit' : 'Submit'} color='#f2570f' onPress={(allData) ? () => Edit() : () => Submit()} ></Button>
            </View>
        </View >

    )
}

export default AddDetails