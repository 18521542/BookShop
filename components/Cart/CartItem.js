import React from 'react'
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import QuantitySetBtn from './QuantitySetBtn';

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
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{`${props.name}`}</Text>
                <Text style={styles.price}>{`Giá bán : ${handlePrice(price)}đ`}</Text>
                <QuantitySetBtn/>
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
        width:"95%",
        height: 120,
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
        width:"25%",
        height:"80%",
        alignSelf:"center",
        margin:10
    },
    title:{
        marginTop:8,
        fontSize:20,
        fontWeight:"bold"
    },
    contentContainer:{
        flexDirection:"column",
        flex:1,
    },
    price:{
        marginTop: 5,
        fontSize:15,
        fontWeight:"500",
        color:"green"
    },
    qttSet:{
        marginTop:3,
    }
})
