import React from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native'
import { addItem } from '../../store/actions/cart';
import { useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import CartButton from '../../components/CartButton';
import { constant, color } from '../../constant';

const bookDetailScreen = (props) => {
    const {description, name} = props.route.params
    
    //action
    const dispatch = useDispatch();
    const addToCartButtonHandler = useCallback(() => {
        dispatch(addItem(name));
    }, [dispatch, name])

    return (
        <View>
            <Button 
                title="add to cart"
                onPress={addToCartButtonHandler}
            />
            <Text>{description}</Text>
            <Text>{name}</Text>
        </View>
    )
}

export const navigationOptions = (nav) => {
    const {description, name} = nav.route.params
    return {
        headerTitle: name,
        headerRight: () => (
            <CartButton 
                onClick={()=>{nav.navigation.navigate(constant.cartScreenName)}}
            />
        ),
        headerStyle:{
            backgroundColor: color.primaryColor,
        },
    }
}


export default bookDetailScreen

const styles = StyleSheet.create({})
