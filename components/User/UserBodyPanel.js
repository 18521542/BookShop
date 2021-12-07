import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import UserLabel from './UserLabel'

const UserBodyPanel = (props) => {
    return (
        <View style={styles.container}>
            <UserLabel
                title="Thông tin cá nhân"
                IconName="person-circle-outline"
                IconType="ionicon"
                onClick={() => {
                    console.log("user")
                }}
            />
            <UserLabel
                title="Lịch sử mua hàng"
                IconName="article"
                IconType="material"
                onClick={() => {
                    console.log("mua")
                }}
            />
            <UserLabel
                title="Shop của tôi"
                IconName="storefront"
                IconType="material"
            />
            <UserLabel
                title="Phương thức thanh toán"
                IconName="payment"
                IconType="material"
            />
            {/* <UserLabel/> */}
        </View>
    )
}

export default UserBodyPanel

const styles = StyleSheet.create({
    container:{
        padding:10,
        paddingTop:30,
    }
})
