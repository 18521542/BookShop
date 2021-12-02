import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const CartItem = (props) => {
    return (
        <View style={styles.container}>
            <Text>{`hello ${props.name}`}</Text>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    container:{}
})
