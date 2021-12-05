import React from 'react'
import { TouchableOpacity } from 'react-native';
import { StyleSheet,Image, Text, View } from 'react-native'
import { constant } from '../constant';
import { handlePrice } from './Cart/CartItem';
const ProductCard = (props) => {
    const { name, price, rating, image_url, nav, selectedBook } = props;
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress = {() => {
                props.nav.navigate(constant.homeScreenNav,{
                    screen: `${constant.bookDetailScreenName}`,
                    params: {
                        name: name,
                        selectedBook: selectedBook,
                    }
                })
            }}
        >
            <View style={styles.contentContainer}>
                <Image
                    style={styles.img}
                    source={{
                        uri: image_url,
                    }}
                />
                <Text style={styles.title}>{`${name}`}</Text>
            </View>
            <Text style={styles.price}>{`${handlePrice(price)} đ`}</Text>
        </TouchableOpacity>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    container:{
        borderRadius:20,
        flex:1,
        backgroundColor:"white",
        width:175,
        minHeight:260,
        flexDirection:"column",
        margin:5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    contentContainer: {
        flex: 1,
    },
    img:{
        width:"100%",
        height:"85%",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
    title:{
        margin:3,
        fontSize:15,
        alignSelf:"center",
        fontWeight:"300"
    },
    price:{
        // borderWidth:1,
        margin:10,
        alignSelf:"flex-end",
        fontWeight:"700"
    }
})
