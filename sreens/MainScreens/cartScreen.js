import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button';
import { useSelector } from 'react-redux'
import { color } from '../../constant';

const cartScreen = () => {
    const cartItem = useSelector(state => state.cart);

    return (
        <View>
            <Button
                style={styles.color}
                title="log"
                onPress={()=>{
                    console.log(cartItem)
                }}
            />
            <Text>{"No"}</Text>
        </View>
    )
}

export default cartScreen

const styles = StyleSheet.create({
    color:{
        backgroundColor:color.primaryColor,
        color:color.primaryColor,
    }
})
