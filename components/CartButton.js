import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { color } from '../constant'

const CartButton = (props) => {
    return (
        <View style={styles.container}>
            <Icon
                name="shopping-cart"
                color="white"
                onPress={props.onClick}
            />
        </View>
    )
}

export default CartButton

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
        alignContent:"center",
        justifyContent:"center",
        backgroundColor:color.primaryColor,
        width:50,
        height:30
    }
})
