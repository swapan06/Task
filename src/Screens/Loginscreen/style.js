import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');
import fontFamily from '../../style/fontFamily';

const style = StyleSheet.create({

    logintext: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'black',
        marginVertical: 50,
        textTransform: 'uppercase',
    },
    usertext: {
        fontSize: 18,
        color: '#f5821d',
        marginTop: 10,
        fontFamily: fontFamily.mulishBold

    },


})
export default style