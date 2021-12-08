import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MyButton from '../../components/MyButton'
import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../store/actions/authentication'
import MyInput from '../../components/MyInput'
import { windowHeight } from '../MainScreens/homeScreen'
import { Alert } from 'react-native'
import { constant } from '../../constant'
import { ActivityIndicator } from 'react-native'
const RegisterScreen = (props) => {

    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")

    const [IsUsernameNotValid, setIsUsernameNotValid] = useState(false)
    const [IsPasswordNotValid, setIsPasswordNotValid] = useState(false)

    const [IsLoading, setIsLoading] = useState(false)

    const [Err, setErr] = useState(null)

    const [IsRegisterSuccess, setIsRegisterSuccess] = useState(false)

    const checkIsNotValid= (text) => {
        if(text.trim().length === 0)
            return true;
        return false;
    }

    const InputValidator = (text, checker) => {
        let isNotValid = checkIsNotValid(text);
        checker(isNotValid)
    }
    const userInfo = {
        Username,
        Password,
    }

    const dispatch = useDispatch()
    const registerHandler = useCallback( async () => {
        setIsLoading(true)
        try {
            await dispatch(register(userInfo))
            setIsLoading(false)
            setIsRegisterSuccess(true)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
            setErr(error)
        }
    }, [{...userInfo}, dispatch])

    useEffect(() => {
        if(Err)
            Alert.alert(Err.toString());
    },[Err])

    const goToLoginScreen = () => {
        props.navigation.goBack()
    }
    useEffect(() => {
        if(IsRegisterSuccess)
            Alert.alert("Thông báo", "Đăng kí tài khoản thành công", [{text: "Yay!!!", onPress: () => {
                goToLoginScreen();
            }}])
    }, [IsRegisterSuccess])

    return (
        <View style={styles.container}>
            
            <Text style={styles.text}>Username</Text>
            <MyInput
                InputContainerStyle={{
                    margin:10,
                }}
                placeholder="Enter an email"
                isNotValid={IsUsernameNotValid}
                validateContent="Please enter a valid"
                onChangeText={(value) => {
                    InputValidator(value, setIsUsernameNotValid)
                    setUsername(value)
                }}
            />

            <Text style={styles.text}>Password</Text>
            <MyInput
                InputContainerStyle={{
                    margin:10,
                }}
                secureTextEntry={true}
                placeholder="Enter a password"
                isNotValid={IsPasswordNotValid}
                validateContent="Please enter a valid password"
                onChangeText={(value) => {
                    InputValidator(value, setIsPasswordNotValid)
                    setPassword(value)
                }}
            />

            <View style={styles.btn}>
                {!IsLoading? <MyButton
                    width={300}
                    height={40}
                    backgrColor="#494ead"
                    title="Register"
                    onClick={registerHandler}
                />: <ActivityIndicator/>}
            </View>

        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        padding:15,
        paddingTop:30,
        alignSelf:"center",
        marginTop:30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        borderRadius:30,
        shadowOpacity: 0.55,
        shadowRadius: 14.78,
        elevation: 22,
        height:windowHeight/2,
    },  
    text:{
        fontSize:20,
        fontWeight:"100",
        color:"#e31ec2",
        marginLeft:12,
    },
    btn:{
        alignSelf:"center",
        marginTop:10,
    }
})
