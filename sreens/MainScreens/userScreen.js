import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LoginForm from '../../components/LoginForm'

// import { constant } from '../../constant'

const userScreen = (navigation) => {
    return (
        <View style={styles.container}>
            <LoginForm/>
        </View>
    )
}

export default userScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
    }
})
