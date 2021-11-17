import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input } from 'react-native-elements/dist/input/Input'
import { ScrollView } from 'react-native-gesture-handler'
import MyButton from '../../components/MyButton'

const RegisterScreen = (props) => {

    const register = () => {
        console.log("Register!!")
    }
    return (
        <ScrollView style={styles.container}>
            <Text>Username</Text>
            <Input/>
            <Text>Password</Text>
            <Input/>
            <Text>Image Link</Text>
            <Input/>
            <Text>Name</Text>
            <Input/>
            <Text>telephone</Text>
            <Input/>
            <Text>address</Text>
            <Input/>
            <Text>email</Text>
            <Input/>
            <MyButton
                width={260}
                height={40}
                backgrColor="red"
                title="Register"
                onClick={register}
            />
        </ScrollView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({})
