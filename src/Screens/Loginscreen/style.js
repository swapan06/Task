import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../style/colors';
const { width, height } = Dimensions.get('window');
import fontFamily from '../../style/fontFamily';

const style = StyleSheet.create({

    logintext: {
        fontSize: 36,
        fontFamily: fontFamily.mulishBold,
        color: 'black',
        marginVertical: 50,
        textTransform: 'uppercase',
    },
    usertext: {
        fontSize: 18,
        color: colors.statusColor,
        marginTop: 10,
        fontFamily: fontFamily.mulishBold
    },
    btntext: {
        color: 'white',
        textAlign: 'center',
        fontFamily: fontFamily.mulishBold,
        fontSize: 18
    },
    lngtext: {
        color: 'black',
        fontSize: 16,
        fontFamily: fontFamily.mulishBold,
        marginVertical: 8
    },
    logoimg: {
        height: width / 8,
        width: width / 2.7,

    },

})
export default style