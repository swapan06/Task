import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');


const style = StyleSheet.create({

    //AddDetailsScreen//
    addtext: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#f5821d',
        marginTop: 5
    },
    buttonView1: {
        margin: 25,
        padding: 15,
        height: width / 5,
        borderRadius: 6,
        width: width / 1,
    },
})
export default style