import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');

const style = StyleSheet.create({

    logintext: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'black',
        marginVertical: 70
    },
    usertext: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#f5821d',
        marginTop: 10
    },


})
export default style