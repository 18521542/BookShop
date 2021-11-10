import React from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native'

const homeScreen1 = (props) => {
    const {description, name} = props.route.params
    return (
        <View>
            <Button title="add to cart"></Button>
            <Text>{description}</Text>
            <Text>{name}</Text>
        </View>
    )
}

export default homeScreen1

const styles = StyleSheet.create({})
