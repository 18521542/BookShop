import React from 'react'
import { TouchableHighlight } from 'react-native';
import { StyleSheet, Text, View, Button } from 'react-native'
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { constant } from '../constant';
import MyButton from './MyButton';
const LoginForm = (props) => {
    const { nav, setLogin } = props;

    const goToRegisterScreen = () => {
        nav.navigate(constant.userScreenNav, {
            screen: constant.registerScreenName
        })
    }
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Input 
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
                />
                <Input
                    placeholder='Password'
                    leftIcon={
                        <Icon
                            style={styles.icon}
                            name='briefcase'
                            size={24}
                            color='black'
                        />
                    }
                    secureTextEntry={true}
                />
                <View style={{alignSelf:"center"}}>
                    <MyButton
                        onClick={() => setLogin(true)}
                        width={260}
                        height={40}
                        backgrColor={"blue"}
                        title={"Log-in"}
                    />
                    <MyButton
                        onClick={goToRegisterScreen}
                        width={260}
                        height={40}
                        backgrColor={"red"}
                        title={"Sign-Up"}
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
