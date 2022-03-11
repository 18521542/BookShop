import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Button, ActivityIndicator, Alert } from 'react-native'
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { constant } from '../constant';
import MyButton from './MyButton';
import { useState, useCallback } from 'react';
import { login } from '../store/actions/authentication';

import { useDispatch, useSelector } from 'react-redux';

const LoginForm = (props) => {
    const { nav } = props;
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isNotValid, setIsNotValid] = useState(false)
    const [isPasswordNotValid, setIsPasswordNotValid] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [err, setErr] = useState(null)
    const userInfo = {
        username,
        password,
    }

    const dispatch = useDispatch()
    const LoginHandler = useCallback(
        async () => {
            if(!username || !password){
                setIsNotValid(true)
                setIsPasswordNotValid(true)
            }
            setIsLoading(true)
            try{
                await dispatch(login(userInfo))
            } 
            catch(err){
                setErr(err)
                setIsLoading(false) 
            }
        }, 
        [{...userInfo}, dispatch]
    )

    useEffect(() => {
        if(err){
            Alert.alert(err.toString())
        }
    },[err])

    const goToRegisterScreen = () => {
        nav.navigate(constant.userScreenNav, {
            screen: constant.registerScreenName
        })
    }

    const TextHandler = (text) => {
        (text.trim().length===0) ? setIsNotValid(true) : setIsNotValid(false) 
        setUsername(text)
    }

    const PasswordHandler = (text) => {
        (text.trim().length===0) ? setIsPasswordNotValid(true) : setIsPasswordNotValid(false) 
        setPassword(text)
    }
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Input
                    errorStyle={{ color: 'red', marginLeft:43 }}  
                    errorMessage={(isNotValid)? 'You must enter a valid email!': ""} 
                    style={styles.input}
                    placeholder='Email'
                    leftIcon={
                        <Icon
                            style={styles.icon}
                            name='user'
                            size={24}
                            color='black'
                        />
                    }
                    onChangeText={TextHandler}
                />
                <Input
                    placeholder='Password'
                    errorStyle={{ color: 'red', marginLeft:43 }}  
                    errorMessage={(isPasswordNotValid)? 'You must enter a valid password!': ""} 
                    leftIcon={
                        <Icon
                            style={styles.icon}
                            name='briefcase'
                            size={24}
                            color='black'
                        />
                    }
                    secureTextEntry={true}
                    onChangeText={PasswordHandler}
                />
                <View style={{alignSelf:"center"}}>
                {(isLoading) ? <ActivityIndicator size={60}/> 
                    : <MyButton
                        onClick={LoginHandler}
                        width={260}
                        height={40}
                        backgrColor={"blue"}
                        title={"Đăng nhập"}
                    />}
                    <MyButton
                        onClick={goToRegisterScreen}
                        width={260}
                        height={40}
                        backgrColor={"red"}
                        title={"Đăng kí"}
                    />

                </View>
                
            </View>
        </View>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
        width:300,
        height:400,
        backgroundColor:"white",
        borderRadius:20,
        shadowColor:"black",
        marginTop:50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.55,
        shadowRadius: 14.78,
        elevation: 22,
    },
    header:{
        margin:10,
        fontSize:20,
        fontWeight:"bold",
    },
    icon:{
        marginLeft:10,
        marginRight:10,
    },
    inputContainer:{
        width:250,
        alignSelf:"center",
        marginTop:30,
    }
})
