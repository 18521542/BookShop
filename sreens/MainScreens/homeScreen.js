import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
// import { constant } from '../..constant/constant';
// import homeScreenNavigator from './navigators/homeScreenNavigator';


const homeScreen = ({navigation}) => {
    return (
        <View style={styles.testText}>
            <Button
                title = "go to sub-screen"
                styles={styles.testBtn}
                onPress = {()=>{
                    navigation.navigate(
                        "Root", {
                            screen:"homeScreen1"
                        })
                }}
            ></Button>
            
        </View>
    )
}

export default homeScreen

const styles = StyleSheet.create({
    testText:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    testBtn:{
        width:30,
    }
})
