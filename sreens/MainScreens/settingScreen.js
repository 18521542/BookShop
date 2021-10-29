import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const settingScreen = (navigation) => {
    return (
        <View>
            <Text
                onPress={ () => navigation.navigate(constant.homeScreenName)}
            ></Text>
        </View>
    )
}

export default settingScreen

const styles = StyleSheet.create({})

