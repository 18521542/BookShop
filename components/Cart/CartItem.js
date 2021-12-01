import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const CartItem = (props) => {
    console.log(props)
    return (
        <View style={styles.container}>
            <Text>{`hello`}</Text>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    container:{}
})
