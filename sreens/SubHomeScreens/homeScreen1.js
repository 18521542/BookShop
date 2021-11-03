import React from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native'

const homeScreen1 = (props) => {
    const {description} = props.route.params
    return (
        <View>
            <Text>{description}</Text>
        </View>
    )
}

export default homeScreen1

const styles = StyleSheet.create({})
