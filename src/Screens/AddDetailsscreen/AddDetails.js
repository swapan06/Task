import React, { useState } from 'react'
import { View, Text, TextInput, Image, Button } from 'react-native'
import style from '../AddDetailsscreen/style'
import styles from '../../style/style'
import { images } from '../../constants/images'
import { useDispatch } from 'react-redux';
import { AddSubmit, editDetails } from '../../redux/actions/addDetails';
import { getItem, setItem } from '../../utils/utils';
import strings from '../../constants/lang'

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
    // -------eDIT BUTTON-----------
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
            setItem(data);
            setshowAddress(false);
            dispatch(editDetails({ id: editById, name, age, roll, phone, address }))
            navigation.navigate('Home')

        }
    }
    // -------------submitt BUTTON----
    const Submit = () => {

        if (name === '') {
            setshowName(true);
        } else if (age === '') {
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
            setItem(data);
            setshowAddress(false);
            dispatch(AddSubmit(data))
            navigation.navigate('Home')

        }
    }
    return (
        <View style={styles.logincontainer}>
            <View>
                <TextInput placeholder={strings.NAME}
                    value={name}
                    returnKeyType={'done'}
                    autoFocus={true}
                    keyboardType='email-address'
                    onChangeText={event => setName(event)}
                    style={styles.input} />
            </View>
            {showname ? (<Text style={styles.error}>{strings.ENTER_YOUR_NAME}</Text>) : null}
            <View>
                <TextInput placeholder={strings.AGE}
                    value={age}
                    keyboardType='numeric'
                    onChangeText={event => setAge(event)}
                    style={styles.input} />
            </View>
            {showage ? (<Text style={styles.error}>{strings.ENTER_YOUR_AGE}</Text>) : null}
            <View>
                <TextInput placeholder={strings.ROLL_NO}
                    value={roll}
                    keyboardType='numeric'
                    returnKeyType={'done'}
                    onChangeText={event => setRollnumber(event)}
                    style={styles.input} />
            </View>
            {showrollnumber ? (<Text style={styles.error}>{strings.ENTER_YOUR_ROLLNO}</Text>) : null}
            <View>
                <TextInput placeholder={strings.PHONE_NO}
                    value={phone}
                    keyboardType='numeric'
                    onChangeText={event => setPhone(event)}
                    style={styles.input} />
            </View>
            {showphone ? (<Text style={styles.error}>{strings.ENTER_YOUR_PHONENO}</Text>) : null}
            <View>
                <TextInput placeholder={strings.ADDRESS}
                    value={address}
                    keyboardType='email-address'
                    onChangeText={event => setAddress(event)}
                    style={styles.input} />
            </View>
            {showaddress ? (<Text style={styles.error}>{strings.ENTER_YOUR_ADDRESS}</Text>) : null}
            <View style={styles.buttonView}>
                <Button title={(allData) ? 'Edit' : 'Submit'} color='#f2570f' onPress={(allData) ? () => Edit() : () => Submit()} ></Button>
            </View>
        </View >

    )
}

export default AddDetails