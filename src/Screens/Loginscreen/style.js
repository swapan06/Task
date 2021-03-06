import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../style/colors';
const { width, height } = Dimensions.get('window');
import fontFamily from '../../style/fontFamily';

const style = StyleSheet.create({

    logintext: {
        fontSize: 18,
        fontFamily: fontFamily.mulishBold,
        color: 'black',
        marginVertical: 8,
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
        width: width / 3.4,
    },
    loginimg: {
        height: width / 1.5,
        width: width / 1,
    },
    textstyle: {
        color: colors.black,
        fontFamily: fontFamily.mulishSemiBold,
        fontSize: 16,
    },
    signupstyle: {
        fontFamily: fontFamily.mulishBold,
        fontSize: 16,
        color: colors.textBlue
    },

})
export default style