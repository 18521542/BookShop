import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux'
import CartItem from '../../components/Cart/CartItem';
import Footer from '../../components/Cart/Footer';
import { color } from '../../constant';

const cartScreen = () => {
    const {bookNames, total} = useSelector(state => state.cart);


    const renderMyItem = (items) => {
        const eachItem = items.item;
        // console.log(eachItem)
        return(
            <CartItem 
                name={eachItem.name}
                description={eachItem.description}
            />
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                renderItem={renderMyItem}
                data={bookNames}
            />
            <Footer/>
        </View>
    )
}

export default cartScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        backgroundColor: color.cartBackground
    },
    color:{
        backgroundColor:color.primaryColor,
        color:color.primaryColor,
    }
})
