import {Text, TextInput, View } from 'react-native'
import React from 'react'
import styles from './styles'

const InputContainer = ({title, value, onChangeText}) => {
    return (
        <View style={styles.inputView}>
            <Text>{title}{" "}<Text style={styles.compulsoryStar}>*</Text></Text>
            <TextInput
                value={value} 
                onChangeText={onChangeText} 
                style={styles.inputValueContainer} />
        </View>
    )
}

export default InputContainer