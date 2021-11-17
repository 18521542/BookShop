import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button'

//props: width, height, onclick, color

const MyButton = (props) => {
    
    return (
        <Button
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
        backgroundColor: backgrColor,
        borderRadius:30,
        width:width,
        height:height,
        margin: 10,
    }
}