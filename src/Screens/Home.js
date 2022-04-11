import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from '../style/style'
import { images } from '../assets/images/images'
import AddDetails from '../Screens/AddDetails'
import { useDispatch, useSelector } from 'react-redux'
import datainput from '../redux/reducers/data'



function Home({ navigation }) {
    const dispatch = useDispatch()
    const list = useSelector((state) => state.datainput.list)
    return (
        <>
            {
                list.map((elem) => {
                    // ---------------list--------------//
                    return (
                        <View style={styles.mapview} key={elem.id}>
                            <View style={{ flex: 0.8, marginLeft: 10 }} >
                                <Text>Name :- {elem.name}</Text>
                                <Text>Phone :- {elem.phone}</Text>
                                <Text>Age :- {elem.age}</Text>
                                <Text>Rollnumber :- {elem.roll}</Text>
                                <Text>Address :- {elem.address}</Text>
                            </View>
                        </View>
                    )
                })
            }
            {/* -------------------Home View--------------------- */}
            <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
                <TouchableOpacity style={styles.btncontainer} onPress={() => navigation.navigate('Add Details')} >
                    <Image source={images?.addbutton} style={styles.buttonadd} ></Image>
                </TouchableOpacity>
            </View>
        </>
    )
}
export default Home