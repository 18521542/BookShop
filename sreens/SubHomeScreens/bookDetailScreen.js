import React from 'react'
import { StyleSheet, Text, View ,Button, ScrollView} from 'react-native'
import { addItem } from '../../store/actions/cart';
import { useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import CartButton from '../../components/CartButton';
import { constant, color } from '../../constant';
import { Image } from 'react-native';
import MyButton from '../../components/MyButton';
import { handlePrice } from '../../components/Cart/CartItem';
import { Divider } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
const bookDetailScreen = (props) => {
    const {description, name, selectedBook} = props.route.params

    const list_author = selectedBook.author;
    const list_category = selectedBook.category;
    
    const imgLink = selectedBook.image_url;
    //action
    const dispatch = useDispatch();
    const addToCartButtonHandler = useCallback(() => {
        dispatch(addItem(selectedBook));
    }, [dispatch, selectedBook])

    return (
        <View style={styles.container}>
            <ScrollView style={styles.infoContainer}>
                <Image  style={styles.img} source={{uri: imgLink}}/>
                <View style={styles.titleContainer}>   
                    <Text style={styles.bookTitle}>{name}</Text>
                    <Text style={styles.price}>{`Giá bán: ${handlePrice(selectedBook.price)} đ`}</Text>
                </View>
                <View style ={styles.containerContent}>    
                    <Text style={styles.title}>Thể loại</Text>
                    <FlatList
                        horizontal
                        data={list_category.map(element => ({id: element.id, name: element.name}))}
                        renderItem={({item}) => 
                            <View style={styles.label}>
                                <Text>{item.name}</Text>
                            </View> 
                        }
                    />
                </View>
                <View style ={styles.containerContent}>
                    <Text style={styles.title}>Tác giả</Text>
                    <FlatList
                        horizontal
                        data={list_author.map(element => ({id: element.id, name: element.name}))}
                        renderItem={({item}) => 
                            <View style={styles.label}>
                                <Text style={{margin:3}}>{item.name}</Text>
                            </View> 
                        }
                    />
                </View>
                <View style ={styles.containerContent}>
                    <Text style={styles.title}>Mô tả</Text>
                    <Divider/>
                    <Text style={styles.content}>{description}</Text>
                </View>
            </ScrollView>
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
        headerTitle: "Thông tin chi tiết",
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
        // flex:1,
        flexDirection:"column",
        backgroundColor:"white",
    },
    containerContent:{
        marginTop:5,
        backgroundColor:"#e4edea",
        minHeight:100,
        padding:8,
    },
    infoContainer:{
        height:"90%",
        paddingLeft:5,
        paddingRight:5,
        flexDirection:"column",
    },
    titleContainer:{
        flex:1,
        flexDirection:"column",
        alignItems:"flex-start",
        // justifyContent:"space-between",
        backgroundColor: color.bookDetailBackground,
        minHeight:60,
        marginTop:5,
    },
    bookTitle:{
        fontSize:20,
        margin:10,
        color:"red",
        fontWeight:"bold"
    },
    price:{
        margin:10,
        fontSize:20,
    },
    btn:{
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"flex-end",
        // flex:1,
        backgroundColor:"white",
        height:"10%",
        width:"100%",
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: -5,
        },
        shadowOpacity: 0.58,
        elevation: 24,
    },
    img:{
        width:"100%",
        height:250,
    },
    title:{
        fontSize:30,
        fontWeight:"bold",
        marginBottom:5,
    },
    content:{
        fontSize:15,
        marginBottom:20,
        marginTop:5
    },
    label:{
        flex:1,
        borderWidth:1,
        padding:4,
        minWidth:150,
        height:30,
        margin:3,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:30,
        backgroundColor:"white"
    },
})
