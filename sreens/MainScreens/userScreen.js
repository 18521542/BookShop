import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LoginForm from '../../components/LoginForm'
import {color} from "../../constant"
import { useState, useEffect } from 'react'
import UserDetailScreen from '../SubUserScreens/UserDetailScreen'
import { useSelector } from 'react-redux'
import { login } from '../../store/actions/authentication'
// import { constant } from '../../constant'

const userScreen = (props) => {
    const auth_state = useSelector(state => state.auth)
    const { isSignedIn } = auth_state

    return (
        <View style={styles.container}>
            {!isSignedIn ? 
                (<LoginForm
                    nav={props.navigation}
                />
                ) : (<UserDetailScreen
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
