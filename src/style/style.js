import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    //Common styles//
    logincontainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
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
    error: {
        fontSize: 12,
        color: 'red',
        textAlign: 'left',

    },




})
export default styles