import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import styles from '../Homescreen/style'
import { images } from '../../assets/images/images'
import { AddDetails } from '../AddDetailsscreen/AddDetails'
import { deleteDetails } from '../../redux/actions/addDetails'
import { editDetails } from '../../redux/actions/addDetails'
import { useDispatch, useSelector } from 'react-redux'
import datainput from '../../redux/reducers/data'
import { setItem } from '../../utils/utils'
import style from '../AddDetailsscreen/style'
import Login from '../Loginscreen/Login'

function Home({ navigation }) {
    console.log(datainput)
    const dispatch = useDispatch();
    const list = useSelector((state) => state.datainput.list)
    console.log(list)
    setItem(list);


    function passEditDetails(data, index) {
        console.log(data);
        navigation.navigate('Add Details', { Data: data, Index: index })
    }

    return (
        <>
            <TouchableOpacity onPress={() => navigation.navigate(Login)}>
                <View style={{ marginVertical: 6, marginHorizontal: 10, flexDirection: 'row' }}>
                    <Image source={images?.logout} style={{ height: 30, width: 30, }}></Image>
                    <Text style={{ marginLeft: 5, fontSize: 20, fontWeight: 'bold', color: 'black', fontStyle: 'italic' }}>LOGOUT</Text>
                </View>
            </TouchableOpacity>

            <ScrollView>
                {
                    list.map((elem, index) => {
                        // ---------------list--------------//
                        return (
                            <View style={styles.mapview} key={elem.id}>
                                <View style={{ flex: 10, marginLeft: 10 }} >
                                    <Text style={styles.textdata}>Name : {elem.name}</Text>
                                    <Text style={styles.textdata}>Age : {elem.age}</Text>
                                    <Text style={styles.textdata}>Rollnumber : {elem.roll}</Text>
                                    <Text style={styles.textdata}>Phone : {elem.phone}</Text>
                                    <Text style={styles.textdata}>Address : {elem.address}</Text>
                                </View>
                                <View>
                                    <View style={{ flex: 0.1, flexDirection: "column", alignItems: "center", justifyContent: "space-between", paddingVertical: 10 }}>
                                        <TouchableOpacity onPress={() => dispatch(deleteDetails(elem.id))}>
                                            <Image source={images?.trash} style={{ height: 25, width: 25, marginVertical: 8 }} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => passEditDetails(elem)} >
                                            <Image source={images?.update} style={{ height: 25, width: 25, marginVertical: 8 }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
            {/* -------------------Home View--------------------- */}
            <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
                <TouchableOpacity style={styles.btncontainer} onPress={() => navigation.navigate('Add Details')} >
                    <Image source={images?.addbutton}  ></Image>
                </TouchableOpacity>
            </View>
        </>
    )
}
export default Home