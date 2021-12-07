import React from 'react'
import { Button } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { constant } from '../../constant'

const filterScreen = (props) => {
    return (
        <View>
            <Text>filter screen</Text>
            <Button
                title="Go to tab"
                onPress={()=> { 
                    props.navigation.navigate(constant.filterScreenNav,{
                        screen:constant.bookByAuthorScreenName,
                    })
                }}
            />
        </View>
    )
}

export default filterScreen

const styles = StyleSheet.create({})
