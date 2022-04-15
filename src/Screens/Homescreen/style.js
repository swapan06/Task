import { StyleSheet, Dimensions } from 'react-native'
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


})
export default styles