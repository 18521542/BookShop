import React, { useEffect } from 'react'
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native';
import QuantitySetBtn from './QuantitySetBtn';
import { constant } from '../../constant';

const CartItem = (props) => {
    const { item } = props;
    const {image_url, name, price, quantity} = item;
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress = {() => {
                props.nav.navigate(constant.homeScreenNav,{
                    screen: `${constant.bookDetailScreenName}`,
                    params: {
                        name: name,
                        selectedBook: item,
                    }
                })
            }}
        >
            <Image
                style={styles.itemImage}
                source={{
                    uri:image_url,
                }}
            />
            <View style={styles.contentContainer}>
                <View style={{flex:1}}>
                    <Text style={styles.title}>{`${name}`}</Text>
                    <Text style={styles.price}>{`Giá bán : ${handlePrice(price)}đ`}</Text>
                </View>
                <QuantitySetBtn style={styles.qttSet} item={item}/>
            </View>
            
        </TouchableOpacity>
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
        paddingTop:10,
    },
    price:{
        marginTop: 5,
        fontSize:15,
        fontWeight:"500",
        color:"green"
    },
})
