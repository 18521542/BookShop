import React from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native'
import { addItem } from '../../store/actions/cart';
import { useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import CartButton from '../../components/CartButton';
import { constant, color } from '../../constant';
import { Image } from 'react-native';
import MyButton from '../../components/MyButton';
import { handlePrice } from '../../components/Cart/CartItem';

const bookDetailScreen = (props) => {
    const {description, name, selectedBook} = props.route.params

    const imgLink = selectedBook.image_url;
    //action
    const dispatch = useDispatch();
    const addToCartButtonHandler = useCallback(() => {
        dispatch(addItem(selectedBook));
    }, [dispatch, selectedBook])

    return (
        <View style={styles.container}>
            <View style={styles.coverHeader}>
                <Image
                    style={styles.img}
                    source={{
                        uri: imgLink
                    }}
                />
            </View>
            <View style={{
                flexDirection:"row",
                flex:1,
                justifyContent:"space-between"
            }}>   
                <Text style={styles.bookTitle}>{name}</Text>
                <Text style={styles.price}>{`${handlePrice(selectedBook.price)} đ`}</Text>
            </View>
            <Text>{description}</Text>
            <View style={styles.btn}>
                <MyButton 
                    title="add to cart"
                    onClick={addToCartButtonHandler}
                    backgrColor="blue"
                />
            </View>
        </View>
    )
}

export const navigationOptions = (nav) => {
    const {description, name} = nav.route.params
    return {
        headerTitle: name,
        headerRight: () => (
            <CartButton 
                onClick={()=>{nav.navigation.navigate(constant.cartScreenName)}}
            />
        ),
        headerStyle:{
            backgroundColor: color.primaryColor,
        },
    }
}


export default bookDetailScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
    },
    bookTitle:{
        fontSize:20,
        margin:10,
    },
    price:{
        margin:10,
        fontSize:20,
        fontWeight:"bold"
    },
    btn:{
        alignItems:"center",
        justifyContent:"center",
        // flex:1,
        backgroundColor:"white",
        height:70,
        width:"100%",
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 20,
        },
        shadowOpacity: 0.58,
        elevation: 24,
    },
    img:{
        width:"100%",
        height:"100%",
    },
    coverHeader:{
        flexDirection:"column",
        alignItems:"center",
        alignContent:"center",
        height:"45%"
    }
})
