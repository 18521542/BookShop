import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import PaymentDetailScreen from '../../components/Payment/PaymentDetailScreen';
import PaymentErrorScreen from '../../components/Payment/PaymentErrorScreen';

const PaymentScreen = (props) => {
    const state = useSelector(state => state);
    const {auth, cart} = state;
    const isNotReadyToPay = (!auth.isSignedIn || cart.total===0)
    
    return (
        <View>
            {isNotReadyToPay? 
                <PaymentErrorScreen
                    nav={props.navigation}
                /> : <PaymentDetailScreen
                    nav={props.navigation}
                />
            }
        </View>
    )
}

export default PaymentScreen

const styles = StyleSheet.create({})
