import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { color, constant } from '../../constant';
// import { CartScreenNavOption } from '../MainScreens/CartScreen';
import { cartScreenNavOption } from '../MainScreens/cartScreen';
import BookByAuthorScreen from '../SubFilterScreens/BookByAuthorScreen';
import BookByCategoryScreen from '../SubFilterScreens/BookByCategoryScreen';

const FilterScreenStackNavigator = createMaterialTopTabNavigator();

import { Animated, View, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import Logo from '../../components/Logo';


export const FilterScreenNavigator = () => {
    return (
        <FilterScreenStackNavigator.Navigator
            initialRouteName={`${constant.bookByAuthorScreenName}`}
            screenOptions={{
              activeTintColor: "#e91e63",
              labelStyle: { fontSize: 13 },
              style: { backgroundColor: "white" }
            }}
        >
            <FilterScreenStackNavigator.Screen
                name={`${constant.bookByAuthorScreenName}`} 
                component={BookByAuthorScreen}
            />
            <FilterScreenStackNavigator.Screen
                name={`${constant.bookByCategoryScreenName}`} 
                component={BookByCategoryScreen}
            />
        </FilterScreenStackNavigator.Navigator>
    )
}

export const filterScreenHeaderOption = (nav) => {
  return {
      headerTitle: () => (  
          <Logo/>
      ),
      headerStyle:{
          backgroundColor: color.primaryColor,
      },
  }
}

