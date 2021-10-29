import React from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native'

const homeScreen1 = ({navigation}) => {
    console.log("go here")
    return (
        <View>
            <Text>SubScreen1</Text>
            <Button 
                title="Go to 2"
                onPress={()=>{
                    navigation.navigate("homeScreen2")
                }}
            > </Button>
        </View>
    )
}

export default homeScreen1

const styles = StyleSheet.create({})
