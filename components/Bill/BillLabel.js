import moment from 'moment';
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements';
import { constant } from '../../constant';
import { handlePrice } from '../Cart/CartItem';

const BillLabel = (props) => {
    const { item } = props;
    const { created_at, price_total, status, ship_date } = item;

    const day = (moment(created_at).format("DD")) || "01"
    const monthAndyear = (moment(created_at).format("MM/YYYY")) || "09/2021"

    const IsDeliveried = !(status == "not delivery")
    const formatStatus = (!IsDeliveried) ? "Chưa giao" : "Đã giao"

    const GoToDetailBill = () => {
        props.navigation.navigate(constant.userScreenNav, {
            screen: constant.userBillDetailScreenName
        })
    }
    return (
        <TouchableOpacity
            onPress={GoToDetailBill} 
            style={styles.container}>
            {/* Time */}
            <View style={styles.timeContainer}>
                <Text style={styles.day}>{day}</Text>
                <Text style={styles.monthAndYear}>{monthAndyear}</Text>
            </View>

            <Divider
                style={{marginTop:10, marginBottom:10}} 
                orientation="vertical"/>

            <View style={styles.contentContainer}>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                    <Text style={{fontSize:20, fontWeight:"200"}}>{`Giá trị: `}</Text>
                    <Text style={{fontSize:20, fontWeight:"400", color:"green"}}>{`${handlePrice(price_total)} đ`}</Text>
                </View>
                <View style={styles.status}>
                    <Text style={(IsDeliveried)? styles.IsDeliveried : styles.IsNotDeliveried}>{formatStatus}</Text>
                </View>
                
            </View>
        </TouchableOpacity>
    )
}

export default BillLabel

const styles = StyleSheet.create({
    container:{
        height:120,
        flexDirection:"row",
        backgroundColor:"white",
        margin:10,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2,
    },
    timeContainer:{
        width:"30%",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    day:{
        fontSize:60,
        fontWeight:"300"
    },
    monthAndYear:{
        fontSize:20,
        fontWeight:"200"
    },
    contentContainer:{
        padding:10,
        justifyContent:"center",
        alignItems:"center",
        width:"70%"
    },
    status:{
        borderWidth:1,
        padding:10,
        marginTop:10,
        minWidth:150,
        alignItems:"center",
        borderRadius:10,
    },
    IsDeliveried:{
        color:"green"
    },
    IsNotDeliveried:{
        color:"red"
    }
})
