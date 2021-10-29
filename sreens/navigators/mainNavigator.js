import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import homeScreen from "../MainScreens/homeScreen";
import settingScreen from "../MainScreens/settingScreen";
import userScreen from "../MainScreens/userScreen";
import { constant } from "../../constant";
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

const tab = createBottomTabNavigator();

export const MainScreenNavigator = () => {
    return(
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
    )
}