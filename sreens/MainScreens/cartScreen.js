import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux'
import CartItem from '../../components/Cart/CartItem';
import Footer from '../../components/Cart/Footer';
import { color } from '../../constant';

const cartScreen = () => {
    const {bookName, total} = useSelector(state => state.cart);

    const renderMyItem = (items) => {
        console.log(bookName)
        return(
            <CartItem>{items.item}</CartItem>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                renderItem={renderMyItem}
                data={bookName}
            />
            <Footer/>
        </View>
    )
}

export default cartScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column"
    },
    color:{
        backgroundColor:color.primaryColor,
        color:color.primaryColor,
    }
})
