import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from '../SubUserScreens/RegisterScreen';
import UserDetailScreen from '../SubUserScreens/UserDetailScreen';
import { constant } from '../../constant';
import { userScreenNavOption } from '../MainScreens/userScreen';

import UserInfoScreen from '../SubUserScreens/UserInfoScreen';
import UserShoppingHistoryScreen from '../SubUserScreens/UserShoppingHistoryScreen';
import UserPaymentMethodScreen from '../SubUserScreens/UserPaymentMethodScreen';
import UserShopScreen from '../SubUserScreens/UserShopScreen';
import { defaultHeaderOption } from './mainNavigator';
import BillDetailScreen from '../SubUserScreens/BillDetailScreen';

const UserScreenStackNavigator = createStackNavigator();

export const UserScreenNavigator = () => {
    return (
        <UserScreenStackNavigator.Navigator>
            <UserScreenStackNavigator.Screen
                name={`${constant.registerScreenName}`} 
                component={RegisterScreen}
                options={userScreenNavOption}
            />
            <UserScreenStackNavigator.Screen
                name={`${constant.userDetailScreenName}`} 
                component={UserDetailScreen}
                options={{headerShown: false }}
            />
            <UserScreenStackNavigator.Screen
                name={`${constant.userInfoScreenName}`} 
                component={UserInfoScreen}
            />
            <UserScreenStackNavigator.Screen
                name={`${constant.userBillHistoryScreenName}`} 
                component={UserShoppingHistoryScreen}
            />
            <UserScreenStackNavigator.Screen
                name={`${constant.userShopScreenName}`} 
                component={UserShoppingHistoryScreen}
            />
            <UserScreenStackNavigator.Screen
                name={`${constant.userPaymentScreenName}`} 
                component={UserShopScreen}
            />
            <UserScreenStackNavigator.Screen
                name={`${constant.userBillDetailScreenName}`} 
                component={BillDetailScreen}
            />
        </UserScreenStackNavigator.Navigator>
    )
}