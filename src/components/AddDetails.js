import React from 'react'
import { View, Text, TextInput, Image, Button } from 'react-native'
import styles from '../style/style'
import { images } from '../assets/images/images'

function AddDetails() {
    return (
        <View style={styles.logincontainer}>
            <View>
                <Text style={styles.addtext}> Name</Text>
                <TextInput keyboardType='email-address' style={styles.input}></TextInput>
            </View>
            <View>
                <Text style={styles.addtext}> Age</Text>
                <TextInput keyboardType='numeric' style={styles.input}></TextInput>
            </View>
            <View>
                <Text style={styles.addtext}> Roll No</Text>
                <TextInput keyboardType='numeric' style={styles.input}></TextInput>
            </View>
            <View>
                <Text style={styles.addtext}>Phone No</Text>
                <TextInput keyboardType='numeric' style={styles.input}></TextInput>
            </View>
            <View>
                <Text style={styles.addtext}> Address</Text>
                <TextInput keyboardType='email-address' style={styles.input}></TextInput>
            </View>
            <View style={styles.buttonView}>
                <Button title='Submit' color='#f2570f' ></Button>
            </View>
        </View >

    )
}

export default AddDetails