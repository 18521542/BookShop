import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { handlePrice } from '../Cart/CartItem'


const ProductCardForPayment = (props) => {
    const {price, quantity, name, image_url} = props.item
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri:image_url,
                }}
            />

            <View style={styles.contentContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}>{`${handlePrice(price)}đ`}</Text>
            </View>

            <View style={styles.quantity}>
                <Text style={styles.number}>{`x ${quantity}`}</Text>
            </View>
        </View>
    )
}

export default ProductCardForPayment

const styles = StyleSheet.create({
    container:{
        height:100,
        // padding:3,
        flexDirection:"row",
        backgroundColor:"white",
        marginTop:8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
    },

    image:{
        height:"100%",
        width:"30%"
    },

    //body
    contentContainer:{
        padding:5,
        width:"60%",
        flexDirection:"column"
    },
    name:{
        fontWeight:"200",
        fontSize:20
    },
    price:{
        flex:1,
        // borderWidth:1,
        fontSize:20,
        fontWeight:"200",
        marginTop:17,
        textAlign:"center",
        color:"green"
        // textAlignVertical:"bottom",
    },

    //end 
    quantity:{
        flex:1,
        backgroundColor:"#bfe9f2",
        alignItems:"center",
        justifyContent:"center",
    },
    number:{
        alignSelf:"center",
        justifyContent:"center",
        fontWeight:"200",
        fontSize:17,
    }
})
