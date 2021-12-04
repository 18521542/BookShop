import React from 'react'
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import QuantitySetBtn from './QuantitySetBtn';
import { Divider } from 'react-native-elements';

const CartItem = (props) => {
    // const {price, name, quantity, imgLink} = props;
    const {
        price = "10000000", 
        name,  
        // imgLink
    } = props;
    
    const imgLink = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
    return (
        <View style={styles.container}>
            <Image
                style={styles.itemImage}
                source={{
                    uri:imgLink,
                }}
            />
            <Divider/>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{`${props.name}`}</Text>
                <Text style={styles.price}>{`Giá bán : ${handlePrice(price)}đ`}</Text>
                <View style={styles.qttContainer}><QuantitySetBtn style={styles.qttSet}/></View>
            </View>
            
        </View>
    )
}

export const handlePrice = price => {
    if (price !== undefined) {
      var priceFormat = '';
      while (price > 1000) {
        if (price % 1000 !== 0) {
          priceFormat = '.' + (price % 1000) + priceFormat;
        } else {
          priceFormat = '.000' + priceFormat;
        }
        price = Math.floor(price / 1000);
      }
      return price.toString().concat(priceFormat);
    }
    return '';
  };

export default CartItem

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        width:"95%",
        minHeight: 150,
        borderRadius:30,
        backgroundColor:"white",
        margin: 7,
        flex:1,
        flexDirection:"row",
        alignSelf:"center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    itemImage:{
        width:"35%",
        height:"100%",
        alignSelf:"center",
        marginRight: 10,
        borderTopLeftRadius:30,
        borderBottomLeftRadius:30,
    },
    title:{
        fontSize:20,
        fontWeight:"bold"
    },
    contentContainer:{
        flexDirection:"column",
        flex:1,
        borderTopRightRadius:30,
        borderBottomRightRadius:30,
        padding:5,
        paddingTop:10
    },
    price:{
        marginTop: 5,
        fontSize:15,
        fontWeight:"500",
        color:"green"
    },
    qttSet:{
        marginBottom:5,
    },
    qttContainer:{
        borderBottomRightRadius:30,
        marginTop:10
    }
})
