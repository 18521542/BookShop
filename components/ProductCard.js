import React from 'react'
import { StyleSheet,Image, Text, View } from 'react-native'

const ProductCard = (props) => {
    const { title, price, rating, imgLink } = props;
    // console.log(`${title} ${price} ${rating} ${imgLink}`)
    return (
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={{
                    uri: imgLink,
                }}
            />
            <Text style={styles.title}>{`${title}`}</Text>
            <Text>{`${price} đ`}</Text>
        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        width:"100%",
        height:200,
        borderWidth:1,
        borderColor:"blue",
        flexDirection:"column",
        marginBottom:3,
    },
    img:{
        width:"100%",
        height:"70%",
    },
    title:{
        margin:3,
        fontSize:20
    }
})
