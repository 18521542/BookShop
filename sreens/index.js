
import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from '@react-navigation/stack';


import { MainScreenNavigator } from "./navigators/mainNavigator";
import { HomeScreenNavigator } from "./navigators/homeScreenNavigator";
import { constant } from "../constant";

const MainStack = createStackNavigator();


function RoutingScreen(){
    return (
        <NavigationContainer>
            <MainStack.Navigator>
                <MainStack.Screen
                    name="bottom_main"
                    component={MainScreenNavigator}
                    options={{ headerShown: false }}
                />
                <MainStack.Screen
                    name={"Root"}
                    component={HomeScreenNavigator}
                    options={{ headerShown: false }}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}

export default RoutingScreen;