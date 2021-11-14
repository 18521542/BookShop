import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button'

//props: width, height, onclick, color

const MyButton = (props) => {
    const {color, textColor, width, height} = props;
    return (
        <Button
            title={props.title}
            buttonStyle={styles.btn}
            onPress={props.onClick}
            style={{
                backgroundColor:color
            }}
        />
    )
}


export default MyButton

const styles = StyleSheet.create({
    btn:{
        backgroundColor:"red",
        borderRadius:30,
        width:260
    }
})
