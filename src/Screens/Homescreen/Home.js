import { GoogleSignin } from '@react-native-google-signin/google-signin'
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View, FlatList } from 'react-native'

import { useDispatch, useSelector } from 'react-redux'
import { images } from '../../constants/images'
import strings from '../../constants/lang'
import actions from '../../redux/actions'
import { deleteDetails } from '../../redux/actions/addDetails'
import datainput from '../../redux/reducers/data'
import styles from '../Homescreen/style'
import style from '../Loginscreen/style'

function Home({ navigation }) {

    const dispatch = useDispatch();
    const list = useSelector((state) => state.datainput.list)
    const data = useSelector((state) => state.userStatus.userData)

    console.log(list)
    // setItem(list);w


    function passEditDetails(data, index) {

        console.log(data);
        navigation.navigate('Add Details', { Data: data, Index: index })
    }
    // const logout = () => {
    //     actions.logout()
    // }
    const logout = async () => {
        try {
            await GoogleSignin.signOut();
            actions.logout()
        } catch (error) {
            console.error(error);
        }
    };

    const renderData = ({ item, index }) => {
        const elem = item
        return (
            <View style={styles.mapview} key={elem.id}>
                <View style={{ flex: 10, marginLeft: 10 }} >
                    <Text style={styles.textdata}>{strings.NAME} : {elem.name}</Text>
                    <Text style={styles.textdata}>{strings.AGE} : {elem.age}</Text>
                    <Text style={styles.textdata}>{strings.ROLL_NO} : {elem.roll}</Text>
                    <Text style={styles.textdata}>{strings.PHONE_NO} : {elem.phone}</Text>
                    <Text style={styles.textdata}>{strings.ADDRESS} : {elem.address}</Text>
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

    }
    return (
        <>
            <TouchableOpacity onPress={logout}>
                <View style={{ marginVertical: 6, marginHorizontal: 10, flexDirection: 'row' }}>
                    <Image source={images?.logout} style={{ height: 30, width: 30, }}></Image>
                    <Text style={{ marginLeft: 5, fontSize: 20, fontWeight: 'bold', color: 'black', fontStyle: 'italic' }}>{strings.LOGOUT}</Text>
                </View>
            </TouchableOpacity>
            <View>
                <Text style={styles.datatext}>{data?.name}</Text>
            </View>

            <FlatList
                data={list}
                renderItem={renderData}

            />
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