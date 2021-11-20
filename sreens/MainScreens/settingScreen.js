import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button'
import MyButton from '../../components/MyButton'
import { fetchAuthors } from '../../store/reducers/author'

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
                onClick={fetchAuthors}
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

