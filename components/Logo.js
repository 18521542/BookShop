import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Logo = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.Logo}>ToliShop</Text>
        </View>
    )
}

export default Logo

const styles = StyleSheet.create({
    container:{
        marginLeft:5,
    },
    Logo:{
        color:"white",
        fontWeight:"bold",
        fontSize:15
    },
})
