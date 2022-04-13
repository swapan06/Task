import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    //logincontainer//
    logincontainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    logintext: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'black',
        marginVertical: 50
    },
    usertext: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#f5821d',
        marginTop: 10
    },
    input: {
        height: width / 8,
        width: width / 1.1,
        marginTop: 10,
        borderWidth: 0.8,
        padding: 15,
        borderRadius: 6,


    },
    buttonView: {
        margin: 15,
        padding: 20,

    },
    btncontainer: {
        marginBottom: 10,
        marginRight: 10,
    },
    mapview: {
        flexDirection: "row",
        marginHorizontal: 10,
        borderWidth: 1.3,
        borderColor: '#f5821d',
        marginVertical: 8,
        borderRadius: 10,
        backgroundColor: '#fae8c8',
        padding: 10
    },
    textdata: {
        fontSize: 14,
        color: 'black',
        marginVertical: 2
    },
    //AddDetailsScreen//
    addtext: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#f5821d',
        marginTop: 5
    },
    error: {
        fontSize: 12,
        color: 'red',
        textAlign: 'left',

    },


})
export default styles