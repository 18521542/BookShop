import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux'
import CartItem from '../../components/Cart/CartItem';
import Footer from '../../components/Cart/Footer';
import { color } from '../../constant';

const cartScreen = (props) => {
    const {bookItems, total} = useSelector(state => state.cart);

    const cart = useSelector(state => state.cart);

    const renderMyItem = (items) => {
        const eachItem = items.item;
        return(
            <CartItem
                item={eachItem} 
                name={eachItem.name}
                description={eachItem.description}
                nav={props.navigation}
            />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                renderItem={renderMyItem}
                data={bookItems}
            />
            <Footer
                nav={props.navigation}
            />
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
