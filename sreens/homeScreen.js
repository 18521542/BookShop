import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const homeScreen = ({navigation}) => {
    return (
        <View>
            <Text
                style={styles.testText}
            >this is home screen</Text>
            
        </View>
    )
}

export default homeScreen

const styles = StyleSheet.create({
    testText:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})
