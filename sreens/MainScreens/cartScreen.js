import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux'
import { color } from '../../constant';

const cartScreen = () => {
    const cartItem = useSelector(state => state.cart);

    console.log(cartItem)
    const ex = ["1","2","3"]
    const renderMyItem = (items) => {
        return(
            <Text>{items.item}</Text>
        )
    }
    return (
        <View>
            <FlatList
                renderItem={renderMyItem}
                data={cartItem.bookName}
            />
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
