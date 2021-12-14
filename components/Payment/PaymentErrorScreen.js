import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MyButton from '../MyButton'

const PaymentErrorScreen = (props) => {
    return (
        <View style={styles.container}>
            {!(props.isSignedIn)? null : 
                (<View style={
                    styles.warningContainer
                }>
                    <Text style={styles.Text}>Bạn cần phải đăng nhập trước!</Text>
                    <MyButton
                        title="Đăng nhập"
                        onClick={() => {
                            props.nav.navigate(constant.bottomTabNav, {
                                screen: constant.userScreenName,
                            })
                        }}
                    />
                </View>)
            }
            {(props.isCartEmpty)? <Text>OOPS !!! Không có mặt hàng nào trong giỏ hàng!</Text> : null}
        </View>
    )
}

export default PaymentErrorScreen

import { Dimensions } from 'react-native'
import { constant } from '../../constant'

const windowWidth =  Dimensions.get('window').width;
const windowHeight =  Dimensions.get('window').height;

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
        alignItems:"center",
        alignContent:"center",
        height:"100%"
    },
    warningContainer:{
        marginTop:windowHeight/6,
        flexDirection:"column",
        alignItems:"center",
        height:200,
        justifyContent:"center",
        paddingLeft:20,
        paddingRight:20,
        backgroundColor:"white",
        borderRadius:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    Text:{
        fontSize:18,
        marginBottom:10,
        fontWeight:"200"
    }
})
