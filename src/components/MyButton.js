import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button'

//props: width, height, onclick, backgrColor

const MyButton = (props) => {
    return (
        <Button
            {...props}
            title={props.title}
            buttonStyle={customStyle(props)}
            onPress={props.onClick}
        />
    )
}

export default MyButton

const customStyle = (MyProps) => {
    const {backgrColor, textColor, width, height} = MyProps;
    return {
        backgroundColor: backgrColor || "blue",
        borderRadius:30,
        width: width || 260,
        height:height || 50,
        margin: 10,
    }
}