import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { constant } from '../constant'

const userScreen = (navigation) => {
    return (
        <View>
            <Text>This is user UserScreen</Text>
            <Text> This is UserScreen</Text>
        </View>
    )
}

export default userScreen

const styles = StyleSheet.create({
    testText:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})
