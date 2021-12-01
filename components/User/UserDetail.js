import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import MyButton from '../MyButton'
const UserDetail = (props) => {
    const { user, logoutHandler, name, email, } = props
    const defaultImg = "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"
    return (
        <View style={styles.container}>
            <Image
                style={styles.avatar}
                source={{
                    uri: defaultImg
                }}
            />
            <Text style={styles.labelName}>{`Welcome ${user.username}`}</Text>
            <MyButton
                // width={100}
                // height={50}
                backgrColor="blue"
                title="Logout"
                onClick={logoutHandler}
            />
        </View>
    )
}

export default UserDetail

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
        flex:1,
    },
    avatar:{
        marginTop:30,
        width:260,
        height:260,
        backgroundColor:"red",
        borderRadius:150,
        alignSelf:"center"
    },
    labelName:{
        alignSelf:"center",
        marginTop:15,
        fontSize:20,
        fontWeight:"bold"
    }
})
