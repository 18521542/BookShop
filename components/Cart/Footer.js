import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MyButton from '../MyButton'
import { handlePrice } from './CartItem'
import { useSelector } from 'react-redux'

const Footer = (props) => {
    const cart = useSelector(state => state.cart)
    const {totalMoney} = cart;
    const totalPrice = totalMoney || 0;

    // console.log(cart)
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.leftLabel}>Tổng cộng:</Text>
                <Text style={styles.rightLabel}>{`${handlePrice(totalMoney)}đ`}</Text>
            </View>
            <View style={styles.btn}>
                <MyButton
                    width={"93%"}
                    height={40}
                    title="Thanh toán"
                    backgrColor="#0d2d61"
                />
            </View>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:100,
        backgroundColor:"white",
        alignSelf:"flex-end",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    btn:{
        alignSelf:"center",
        width:"90%",
    },
    content:{
        width:"90%",
        alignSelf:"center",
        flexDirection:"row",
        flex:1,
        justifyContent:"space-between"
    },
    leftLabel:{
        marginLeft:15,
        marginTop:10,
        fontSize:20,
    },
    rightLabel:{
        marginRight:27,
        marginTop:10,
        fontSize:20,
        fontWeight:"bold"
    }
})
