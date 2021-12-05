import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import MyButton from '../MyButton';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { createPayment } from '../../store/actions/payment';
const PaymentDetailScreen = (props) => {
    const globalState = useSelector(state => state);
    const { auth, cart } = globalState;

    const paymentInfo = {
        price_total: cart.totalMoney,
        details: cart.booksItem.map(item => ({
            book_id:item.id,
            quantity: item.quantity,
            price_total: item.price,
        }))
    }
    const renderListProduct = cart.booksItem.map(item => {
        return (<View key={item.id}>
            <Text>{item.name}</Text>
            <Text>{item.quantity}</Text>
            <Text>{`=========================`}</Text>
        </View>)
    })

    const dispatch = useDispatch();
    const createPaymentHandler = useCallback(
        () => {
            dispatch(createPayment(paymentInfo))
        },
        [createPaymentHandler, dispatch],
    )
    return (
        <View>
            <Text>Please confirm your payment</Text>
            {renderListProduct}
            <MyButton
                title={"confirm"}
                style={styles.btn}
                onClick={createPaymentHandler}
            />
        </View>
    )
}

export default PaymentDetailScreen

const styles = StyleSheet.create({
    btn:{
        alignItems:"center"
    }
})
