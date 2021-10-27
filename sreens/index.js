import { constant } from "../constant";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

import homeScreen from "./homeScreen";
import settingScreen from "./settingScreen";
import userScreen from "./userScreen";

const tab = createBottomTabNavigator();


function RoutingScreen(){
    return (
        <NavigationContainer>
            <tab.Navigator
                initialRouteName={constant.homeScreenName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;
                        if(rn === constant.homeScreenName){
                            iconName = focused ? 'home' : 'home-outline'
                        } else if (rn === constant.userScreenName) {
                            iconName = focused ? 'list' : 'list-outline';
                        } else if (rn === constant.settingScreenName) {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color}/>
                    }
                })}
            >
                <tab.Screen name={constant.homeScreenName} component={homeScreen}/>
                <tab.Screen name={constant.settingScreenName} component={settingScreen}/>
                <tab.Screen name={constant.userScreenName} component={userScreen}/>
            </tab.Navigator>
        </NavigationContainer>
    )
}

export default RoutingScreen;