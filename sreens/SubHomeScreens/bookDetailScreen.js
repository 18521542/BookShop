import React from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native'
import { addItem } from '../../store/actions/cart';
import { useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';

const bookDetailScreen = (props) => {
    const {description, name} = props.route.params
    
    //action
    const dispatch = useDispatch();
    const addToCartButtonHandler = useCallback(() => {
        dispatch(addItem(name));
    }, [dispatch, name])

    // useEffect(()=>{
    //     props.navigation.setParams({
    //         addToCart: addToCartButtonHandler
    //     })
    // }, [addToCartButtonHandler])
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

export default bookDetailScreen

const styles = StyleSheet.create({})
