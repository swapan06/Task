import React from 'react'
import { TextInput, View } from 'react-native'
import styles from '../style/style'
function InputTextComponent(
    {
        placeholder = '',
        placeholderTextColor = ''
    }
) {
    return (
        <>
            <View style={styles.input}>
                <TextInput placeholder={placeholder} placeholderTextColor={placeholderTextColor} />
            </View>
        </>
    )
}

export default InputTextComponent