import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import MyButton from '../MyButton';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { createPayment } from '../../store/actions/payment';
import ProductCardForPayment from './ProductCardForPayment';
import { ScrollView } from 'react-native';
import { handlePrice } from '../Cart/CartItem';
import UserInfoCard from './UserInfoCard';
import { Alert } from 'react-native';
import { constant } from '../../constant';
const PaymentDetailScreen = (props) => {
    const globalState = useSelector(state => state);
    const { auth, cart } = globalState;

    const [IsLoading, setIsLoading] = useState(false)
    const [Err, setErr] = useState(null)
    const [IsConfirmed, setIsConfirmed] = useState(false);

    const titleProduct = "Thông tin sản phẩm";
    const titleUser = "Thông tin người mua";
    const paymentInfo = {
        price_total: cart.totalMoney,
        details: cart.booksItem.map(item => ({
            book_id:item.id,
            quantity: item.quantity,
            price_total: item.price,
        }))
    }
    const userInfo = {
        name: auth.user.name || "Michael Jackson",
        email: auth.user.email || "test123@gmail.com",
        telephone: auth.user.telephone || "0986269014",
        address: auth.user.address || "85038 Winconson, Umbala St., California"
    }

    const renderListProduct = cart.booksItem.map(item => {
        return (<View key={item.id}>
            <ProductCardForPayment 
                item={item}
            />
        </View>)
    })

    const dispatch = useDispatch();
    const createPaymentHandler = useCallback(
        async () => {
            try{
                setIsLoading(true)
                await dispatch(createPayment(paymentInfo))
                setIsLoading(false)
                setIsConfirmed(true)
            }catch(err){
                setErr(err)
                setIsLoading(false)
            }
            
        },
        [createPaymentHandler, dispatch],
    )

    useEffect(() => {
        if(Err){
            Alert.alert(Err.toString())
        }
    }, [Err])

    useEffect(() => {
        if(IsConfirmed){
            Alert.alert("Thông báo", "Bạn đã đặt hàng thành công",[{
                text: "Mua tiếp!",
                onPress: () => {
                    goToHomepage();
                }
            }])
        }
    }, [IsConfirmed])

    const goToHomepage = ()=>{
        props.nav.navigate(constant.bottomTabNav,{
            screen: constant.homeScreenName,
        })
    }
    return (
        <View style={styles.container}>
            <ScrollView style={styles.contentContainer}>
                <View style={styles.ProductListInfo}>
                    <Text style={styles.title}>{`${titleProduct}`}</Text>
                    {renderListProduct}
                </View>

                <View style={{
                    flexDirection:"row",
                    justifyContent:"space-between"
                }}>
                    <Text style={{
                        marginTop:8,
                        fontWeight:"300",
                        fontSize:20,
                        marginBottom:15,
                        marginLeft:5,
                    }}>{`Tổng giá trị đơn  hàng:`}</Text>
                    <Text style={styles.totalMoney}>{`${handlePrice(cart.totalMoney)} đ`}</Text>
                </View>

                <View style={styles.UserInfo}>
                    <Text style={styles.title}>{`${titleUser}`}</Text>
                    <UserInfoCard
                        info={userInfo}
                    />
                </View>

            </ScrollView>

            <View style={styles.Footer}>
                {IsLoading? <Text> loading </Text>:
                <MyButton
                    title={"confirm"}
                    onClick={createPaymentHandler}
                />}
            </View>
        </View>
    )
}

export default PaymentDetailScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        flexDirection:"column",
    },  
    Footer:{
        flexDirection:"column",
        height:"15%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white"
    },
    contentContainer:{
        height:"85%",
        backgroundColor:"white",
        flexDirection:"column",
    },
    UserInfo:{
        backgroundColor:"white",
        marginTop:5,
        // borderWidth:1,
    },
    ProductListInfo:{
        marginTop:5,
        padding:8,
        backgroundColor:"white",
    },
    title:{
        marginTop:8,
        fontWeight:"bold",
        fontSize:20,
        marginBottom:5,
        marginLeft:5,
    },
    totalMoney:{
        marginTop:8,
        fontWeight:"bold",
        color:"green",
        fontSize:20,
        marginBottom:5,
        marginRight:5,
    }
})
