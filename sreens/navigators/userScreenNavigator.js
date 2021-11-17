import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from '../SubUserScreens/RegisterScreen';
import UserDetailScreen from '../SubUserScreens/UserDetailScreen';
import { constant } from '../../constant';
import { userScreenNavOption } from '../MainScreens/userScreen';

const UserScreenStackNavigator = createStackNavigator();

export const UserScreenNavigator = () => {
    return (
        <UserScreenStackNavigator.Navigator
        >
            <UserScreenStackNavigator.Screen
                name={`${constant.registerScreenName}`} 
                component={RegisterScreen}
            />
            <UserScreenStackNavigator.Screen
                name={`${constant.userDetailScreenName}`} 
                component={UserDetailScreen}
                options={userScreenNavOption}
            />
        </UserScreenStackNavigator.Navigator>
    )
}