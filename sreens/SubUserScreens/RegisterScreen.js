import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input } from 'react-native-elements/dist/input/Input'
import { ScrollView } from 'react-native-gesture-handler'
import MyButton from '../../components/MyButton'
import { useState, useEffect } from 'react'

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
    const register = ()=>{
        console.log(userInfo)
    }
    return (
        <ScrollView style={styles.container}>
            <Text>Username</Text>
            <Input  onChangeText={setUsername}/>

            <Text>Password</Text>
            <Input onChangeText={setPassword}/>

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
                    onClick={register}
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
