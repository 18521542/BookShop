import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MyButton from '../MyButton'

const Footer = (props) => {
    return (
        <View style={styles.container}>
            <MyButton
                title="Thanh toan"
                backgrColor="red"
            />
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:60,
        backgroundColor:"green",
        alignSelf:"flex-end"
    }
})
