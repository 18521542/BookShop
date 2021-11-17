import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import homeScreen, { homeScreenNavOption } from "../MainScreens/homeScreen";
import settingScreen from "../MainScreens/settingScreen";
import userScreen from "../MainScreens/userScreen";
import { color, constant } from "../../constant";
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import cartScreen from "../MainScreens/cartScreen";
import Header from "../../components/Header"
import Logo from "../../components/Logo";
import CartButton from "../../components/CartButton";

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
                        iconName = focused ? 'person' : 'person-outline';
                    } else if (rn === constant.settingScreenName) {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }   else if (rn === constant.cartScreenName) {
                        // iconName = 'shopping-cart';
                        iconName = focused ? 'cart' : 'cart-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>
                },
                tabBarActiveBackgroundColor:color.secondaryColor,
                tabBarInactiveBackgroundColor:color.primaryColor,
                tabBarActiveTintColor: color.primaryColor,
                tabBarInactiveTintColor: color.secondaryColor,
                tabBarLabelStyle: {
                    fontWeight: "100",
                    fontSize: 13
                },
            })}
        >
            <tab.Screen 
                name={constant.homeScreenName} 
                component={homeScreen}
                options={homeScreenNavOption}
            />
            <tab.Screen 
                name={constant.cartScreenName} 
                component={cartScreen}
            />
            <tab.Screen 
                name={constant.settingScreenName} 
                component={settingScreen}
            />
            <tab.Screen 
                name={constant.userScreenName} 
                component={userScreen}
            />
        </tab.Navigator>
    )
}

