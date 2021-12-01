import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux'
import CartItem from '../../components/Cart/CartItem';
import { color } from '../../constant';

const cartScreen = () => {
    const {bookName, total} = useSelector(state => state.cart);

    // console.log(cartItem)
    const renderMyItem = (items) => {
        console.log(bookName)
        return(
            <CartItem>{items.item}</CartItem>
        )
    }
    return (
        <View>
            <FlatList
                renderItem={renderMyItem}
                data={bookName}
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
