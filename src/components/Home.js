import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from '../style/style'
import { images } from '../assets/images/images'
import AddDetails from './AddDetails'





function Home({ navigation }) {

    return (

        <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
            <TouchableOpacity style={styles.btncontainer} onPress={() => navigation.navigate('Add Details')} >
                <Image source={images?.addbutton} style={styles.buttonadd} ></Image>
            </TouchableOpacity>
        </View>

    )
}

export default Home