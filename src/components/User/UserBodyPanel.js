import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { constant } from '../../constant'
import UserLabel from './UserLabel'

const UserBodyPanel = (props) => {
    return (
        <View style={styles.container}>
            <UserLabel
                nav={props.nav}
                title="Thông tin cá nhân"
                IconName="person-circle-outline"
                IconType="ionicon"
                onClick={() => {
                    props.nav.navigate(constant.userScreenNav, {
                        screen: constant.userInfoScreenName
                    })
                }}
            />
            <UserLabel
                title="Lịch sử mua hàng"
                IconName="article"
                IconType="material"
                onClick={() => {
                    props.nav.navigate(constant.userScreenNav, {
                        screen: constant.userBillHistoryScreenName
                    })
                }}
            />
            <UserLabel
                title="Shop của tôi"
                IconName="storefront"
                IconType="material"
                onClick={() => {
                    props.nav.navigate(constant.userScreenNav, {
                        screen: constant.userShopScreenName
                    })
                }}
            />
            <UserLabel
                title="Phương thức thanh toán"
                IconName="payment"
                IconType="material"
                onClick={() => {
                    props.nav.navigate(constant.userScreenNav, {
                        screen: constant.userPaymentScreenName
                    })
                }}
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
