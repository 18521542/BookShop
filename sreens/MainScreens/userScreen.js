import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LoginForm from '../../components/LoginForm'
import {color} from "../../constant"

// import { constant } from '../../constant'

const userScreen = (props) => {
    console.log(props.navigation)
    return (
        <View style={styles.container}>
            <LoginForm
                nav={props.navigation}
            />
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
        headerTitle: () => (
            <Text>Logo</Text>
        ),
        headerShown: () => false,
        headerStyle:{
            backgroundColor: color.primaryColor,
        },
        // headerLeft: () => (<Logo/>),
        // headerRight: () => (
        //     <CartButton 
        //         onClick={()=>{nav.navigation.navigate(constant.cartScreenName)}}
        //     />
        // )
    }
}
