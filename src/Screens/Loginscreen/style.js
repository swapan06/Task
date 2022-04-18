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
        color: colors.yellow,
        marginTop: 10,
        fontFamily: fontFamily.mulishBold
    },
})
export default style