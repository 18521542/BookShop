import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import bookDetailScreen, { navigationOptions } from '../SubHomeScreens/bookDetailScreen';
import homeScreen2 from '../SubHomeScreens/homeScreen2';
import { constant } from '../../constant';

const HomeScreenStackNavigator = createStackNavigator();

export const HomeScreenNavigator = () => {
    return (
        <HomeScreenStackNavigator.Navigator
        >
            <HomeScreenStackNavigator.Screen
                name={`${constant.bookDetailScreenName}`} 
                component={bookDetailScreen}
                options={navigationOptions}
            />
            <HomeScreenStackNavigator.Screen 
                name="homeScreen2" 
                component={homeScreen2}
            />
        </HomeScreenStackNavigator.Navigator>
    )
}

