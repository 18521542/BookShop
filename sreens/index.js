
import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from '@react-navigation/stack';


import { MainScreenNavigator } from "./navigators/mainNavigator";
import { HomeScreenNavigator } from "./navigators/homeScreenNavigator";
import { constant } from "../constant";
import { UserScreenNavigator } from "./navigators/userScreenNavigator";
import { CartScreenNavigator } from "./navigators/cartScreenNavigator";
import { FilterScreenNavigator } from "./navigators/filterScreenNavigator";

const MainStack = createStackNavigator();


function RoutingScreen(){
    return (
        <NavigationContainer>
            <MainStack.Navigator>
                <MainStack.Screen
                    name={constant.bottomTabNav}
                    component={MainScreenNavigator}
                    options={{ headerShown: false }}
                />
                <MainStack.Screen
                    name={`${constant.homeScreenNav}`}
                    component={HomeScreenNavigator}
                    options={{ headerShown: false }}
                />
                <MainStack.Screen
                    name={`${constant.userScreenNav}`}
                    component={UserScreenNavigator}
                />
                <MainStack.Screen
                    name={`${constant.cartScreenNav}`}
                    component={CartScreenNavigator}
                    options={{ headerShown: false }}
                />
                <MainStack.Screen
                    name={`${constant.filterScreenNav}`}
                    component={FilterScreenNavigator}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}

export default RoutingScreen;