import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import MyButton from '../MyButton'
import UserBodyPanel from './UserBodyPanel'
const UserDetail = (props) => {
    const { user, logoutHandler, name, email, } = props
    const defaultImg = "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: defaultImg
                    }}
                />
                <Text style={styles.labelName}>{`Welcome ${user.username}`}</Text>
            </View>
            <View style={styles.body}>
                <UserBodyPanel nav={props.nav}/>
            </View>
            <View style={styles.Footer}>
                <MyButton
                    // width={100}
                    // height={50}
                    backgrColor="blue"
                    title="Logout"
                    onClick={logoutHandler}
                />
            </View>
        </View>
    )
}

export default UserDetail

import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
        justifyContent:"space-between",
        flex:1,
        width:windowWidth,
        backgroundColor:"white"
    },
    avatar:{
        marginTop:30,
        width:"42%",
        height:"70%",
        borderRadius:150,
        alignSelf:"center"
    },
    labelName:{
        alignSelf:"center",
        marginTop:15,
        fontSize:20,
        fontWeight:"bold"
    },
    Footer:{
        alignItems:"center",
        height:"15%",
        justifyContent:"center",
        // backgroundColor:"#d4e3fa"
    },
    body:{
        height:"50%",
        width:"100%",
        // backgroundColor:"#d4e3fa"
    },
    header:{
        height:"30%",
        flex:1,
    }
})
