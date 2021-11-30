import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LoginForm from '../../components/LoginForm'
import {color} from "../../constant"
import { useState, useEffect } from 'react'
import UserDetailScreen from '../SubUserScreens/UserDetailScreen'
// import { constant } from '../../constant'

const userScreen = (props) => {
    const [isLogin, setLogin] = useState(false)
    return (
        <View style={styles.container}>
            {!isLogin ? 
                (<LoginForm
                    nav={props.navigation}
                    setLogin={setLogin}
                />
                ) : (<UserDetailScreen
                        setLogin={setLogin}
                        nav={props.navigation}
                    />
                )
            }
        </View>
    )
}

export default userScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
    }
})

export const userScreenNavOption = (nav) => {
    return {
        // headerTitle: () => (
        //     <Text>Logo</Text>
        // ),
        headerShown: false,
        // headerStyle:{
        //     backgroundColor: color.primaryColor,
        // },
    }
}
