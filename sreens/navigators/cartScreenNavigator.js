import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { constant } from '../../constant';
import PaymentScreen from '../SubCartScreens/PaymentScreen';
// import { CartScreenNavOption } from '../MainScreens/CartScreen';

const CartScreenStackNavigator = createStackNavigator();

export const CartScreenNavigator = () => {
    return (
        <CartScreenStackNavigator.Navigator
        >
            <CartScreenStackNavigator.Screen
                name={`${constant.paymentScreenName}`} 
                component={PaymentScreen}
                // options={CartScreenNavOption}
            />
        </CartScreenStackNavigator.Navigator>
    )
}
