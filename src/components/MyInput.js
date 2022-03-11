import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
const MyInput = (props) => {
    const { isNotValid } = props; 

    return (
        <View style={props.InputContainerStyle}>
            <TextInput
                {...props}
                style={styles.myinput} 
            />
            {isNotValid? <Text style={styles.validateContent}>{props.validateContent}</Text>: null}
        </View>
    )
}

export default MyInput

const styles = StyleSheet.create({
    myinput:{
        width:300,
        backgroundColor:"white",
        borderRadius:30,
        borderWidth:1,
        paddingLeft:12,
        paddingBottom:8,
        paddingTop:8,
        fontSize:20
    },
    validateContent:{
        color:"red",
        marginLeft:10,
    }
})
