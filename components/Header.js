import React from 'react'
import { Button } from 'react-native';
import { StyleSheet, Text, View, Input } from 'react-native'
import { SearchBar } from "react-native-elements";
import { color } from '../constant';

const Header = () => {
    return (
        <SearchBar
            containerStyle={styles.mainContainer}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
            placeholder="Everything you want..."
        />
        
    )
}

export default Header

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:"column",
        justifyContent:"center",
        width:210,
        height:25,
        marginBottom:5,

        backgroundColor:color.primaryColor,
        borderTopColor:color.primaryColor,
        borderBottomColor:color.primaryColor
    },
    inputContainer:{
        width:230,
        height:25,
        borderRadius:10,
        backgroundColor:"white"
    },
    input:{
        fontSize:15
    }
})
