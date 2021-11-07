import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import homeScreen1 from '../SubHomeScreens/homeScreen1';
import homeScreen2 from '../SubHomeScreens/homeScreen2';

const HomeScreenStackNavigator = createStackNavigator();

export const HomeScreenNavigator = () => {
    return (
        <HomeScreenStackNavigator.Navigator
        >
            <HomeScreenStackNavigator.Screen 
                name="homeScreen1" 
                component={homeScreen1}
            />
            <HomeScreenStackNavigator.Screen 
                name="homeScreen2" 
                component={homeScreen2}
            />
        </HomeScreenStackNavigator.Navigator>
    )
}