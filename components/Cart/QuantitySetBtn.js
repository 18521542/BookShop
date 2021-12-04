import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Input } from 'react-native-elements/dist/input/Input'
const QuantitySetBtn = () => {
    const [quantity, setquantity] = useState(1)
    const increaseHandler = () => {
        const updateValue = quantity+1;
        setquantity(updateValue)
    }
    const decreaseHandler = () => {
        const updateValue = quantity-1
        if(updateValue<0){
            setquantity(0)
            return;
        }
        setquantity(updateValue)
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
