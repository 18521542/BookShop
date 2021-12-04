import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input } from 'react-native-elements/dist/input/Input'
import { ScrollView } from 'react-native-gesture-handler'
import MyButton from '../../components/MyButton'
import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../store/actions/authentication'
import MyInput from '../../components/MyInput'
const RegisterScreen = (props) => {

    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    const [ImageLink, setImglink] = useState("")
    const [Name, setName] = useState("")
    const [Telephone, setTelephone] = useState("")
    const [address, setAddress] = useState("")
    const [Email, setEmail] = useState("")

    const userInfo = {
        Username,
        Password,
        ImageLink,
        Name,
        Telephone,
        address,
        Email
    }

    const dispatch = useDispatch()
    const registerHandler = useCallback(() => {
        dispatch(register(userInfo))
    }, [{...userInfo}, dispatch])

    return (
        <ScrollView style={styles.container}>
            
            <Text>Username</Text>
            <MyInput
                InputContainerStyle={{
                    margin:10,
                }}
                placeholder="Enter an email"
                checkIsNotValid={()=>{
                    if(Username.trim().length === 0)
                        return true;
                    return false
                }}
                validateContent="Please enter a valid"
                onChangeText={setUsername}
            />

            <Text>Password</Text>
            <MyInput
                InputContainerStyle={{
                    margin:10,
                }}
                placeholder="Enter a password"
                checkIsNotValid={()=>{
                    if(Username.trim().length === 0)
                        return true;
                    return false
                }}
                validateContent="Please enter a valid password"
                onChangeText={setPassword}
            />

            <Text>Image Link</Text>
            <Input onChangeText={setImglink}/>

            <Text>Name</Text>
            <Input onChangeText={setName}/>

            <Text>telephone</Text>
            <Input onChangeText={setTelephone}/>

            <Text>address</Text>
            <Input onChangeText={setAddress}/>

            <Text>email</Text>
            <Input onChangeText={setEmail}/>

            <View style={styles.btn}>
                <MyButton
                    width={260}
                    height={40}
                    backgrColor="red"
                    title="Register"
                    onClick={registerHandler}
                />
            </View>

        </ScrollView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    btn:{
        alignSelf:"center"
    }
})
