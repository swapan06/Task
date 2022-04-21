import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../style/colors';
import fontFamily from '../../style/fontFamily';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
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
    datatext: {
        fontFamily: fontFamily.mulishBold,
        fontSize: 16,
        color: colors.DarkBlue,
        marginHorizontal: 10,
    },



})
export default styles