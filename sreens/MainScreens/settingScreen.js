import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MyButton from '../../components/MyButton'

const settingScreen = (navigation) => {
    return (
        <View style={styles.container}>
            <Text>id</Text>
            <Text>name</Text>
            <Text>created date</Text>
            <Text>updated date</Text>
            <MyButton
                title="Test"
                width={100}
                height={50}
                backgrColor={"red"}
            />
        </View>
    )
}

export default settingScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        alignContent:"center",
        alignItems:"center"
    }
})

