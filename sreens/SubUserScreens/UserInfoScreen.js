import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const UserInfoScreen = (props) => {
    const auth = useSelector(state => state)

    console.log(auth)
    return (
        <View style={styles.container}>
            <Text>This is user info</Text>
        </View>
    )
}

export default UserInfoScreen

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        flex:1,
        flexDirection:"column",
        alignItems:"center"
    }
})
