import { StyleSheet, Dimensions } from 'react-native'
import colors from './colors';
import fontFamily from './fontFamily';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    //Common styles//
    logincontainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    //-------Textinput------//
    input: {
        height: width / 8,
        width: width / 1.1,
        marginTop: 10,
        borderWidth: 0.8,
        padding: 15,
        borderRadius: 6,
    },
    // ---Submit button-----//
    buttonView: {
        margin: 15,
        padding: 15,
        backgroundColor: colors.statusColor,
        height: width / 7,
        borderRadius: 6,
        width: width / 1.1,
    },
    // -----error style-----//
    error: {
        fontSize: 12,
        color: 'red',
        textAlign: 'left',
        fontFamily: fontFamily.mulishBold,
    },
})
export default styles