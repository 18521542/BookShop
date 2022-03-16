import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { useSelector } from 'react-redux'
import MyInput from '../../components/MyInput'
import { windowHeight, windowWidth } from '../MainScreens/homeScreen'
import { Image } from 'react-native-elements/dist/image/Image'
const UserInfoScreen = (props) => {
    const user = useSelector(state => state.auth.user)

    const {username, name, email, address, phone} = user;

    const userDetail = {
        username: username || "Admin",
        name: name||"Nguyễn Văn",
        email: email || "vantoan2230@gmail.com",
        address: address || "36 Trần Đại Nghĩa",
        phone: phone || "0984234039"
    }

    const defaultImg = "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"

    const label = (labelName, value, onChangeText) => {
        if(!onChangeText)
            onChangeText = () => {}
        return (
            <View style={styles.label}>
                <View>
                    <Text style={styles.TopText}>{labelName} </Text>
                    <Text style={styles.BottomText}>{value}</Text>
                </View>
                <Icon
                    name="edit"
                    type="material"
                    color="#acb3bf"
                />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.username}>{userDetail.username}</Text>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: defaultImg
                    }}
                />
            </View>
            <View style={styles.contentContainer}>
                {label("Tên người dùng", userDetail.name)}
                {label("Email", userDetail.email)}
                {label("Địa chỉ", userDetail.address)}
                {label("Số điện thoại", userDetail.phone)}
            </View>
        </View>
    )
}

export default UserInfoScreen

const styles = StyleSheet.create({
    container:{
        // borderWidth:1,
        flex:1,
        flexDirection:"column",
        alignItems:"center"
    },
    header:{
        width:windowWidth,
        height:windowHeight/5,
        backgroundColor: "#c3d7fa",
        flexDirection:"row",
        padding:10,
        justifyContent:"space-between",
        alignItems:"center",
    },
    username:{
        fontWeight:"500",
        fontSize:30,
        marginLeft:10,
    },
    avatar:{
        width:120,
        height:120,
    },
    TopText:{
        fontSize:20,
        fontWeight:"100",
        marginBottom:10,
    },
    BottomText:{
        fontWeight:"300",
        fontSize:15,
        marginLeft:2,
    },
    label:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:5,
        backgroundColor:"white",
        padding:10,
    },
    contentContainer:{
        width:windowWidth,
        height:windowHeight,
        // borderWidth:1,
    }
})
