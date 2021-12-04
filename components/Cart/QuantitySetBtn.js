import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Input } from 'react-native-elements/dist/input/Input'
import { Alert } from 'react-native'
import { useDispatch, useCallback } from 'react-redux'
import { decreaseItem, increaseItem, removeItem } from '../../store/actions/cart'

const QuantitySetBtn = (props) => {
    const [quantity, setquantity] = useState(1)
    const {item} = props;

    const dispatch = useDispatch();

    const increaseHandler = () => {
        const updateValue = quantity+1;
        setquantity(updateValue)
        dispatch(increaseItem(item))
    }

    const removeItemFromCart = () => {
        dispatch(removeItem(item))
    }
    const decreaseHandler = () => {
        const updateValue = quantity-1
        if(updateValue===0){
            Alert.alert("Alert",
                "Do you want to remove this book?",
                [{ text: "No", style: "cancel" },{ text: "Yes", onPress: () =>{
                    removeItemFromCart();
                } }]
            );
            return;
        }
        setquantity(updateValue)
        dispatch(decreaseItem(item))
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.btn}
                onPress={decreaseHandler}
            ><Icon name="remove" type="material" color="white" /></TouchableOpacity>
            <View style={styles.quantityContainer}>
                <Text style={styles.quantity}>{quantity}</Text>
            </View>
            <TouchableOpacity 
                style={styles.btn}
                onPress={increaseHandler}
            ><Icon name="add" type="material" color="white" /></TouchableOpacity>
        </View>
    )
}

export default QuantitySetBtn

const styles = StyleSheet.create({
    container:{
        width:130,
        height:30,
        borderRadius:20,
        backgroundColor:"orange",
        flexDirection:"row",
        justifyContent:"space-between",
        // marginTop:25,
    },
    btn:{
        alignSelf:"center",
        marginLeft: 6,
        marginRight:6
    },
    quantityContainer:{
        alignSelf:"center",
        backgroundColor:"white",
        height:"90%",
        backgroundColor:"orange",
        alignContent:"center"
    },
    quantity:{
        fontSize:20,
        color:"white"
    }
})
