import React from 'react'
import { SectionList } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView,Image } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { color, constant } from '../constant'

const ContainerArea = (props) => {

    const myRenderItem = (items) =>{
        const eachBook = items.item;
        const {description, name} = eachBook
        return (
            <View>
                <TouchableOpacity 
                    onPress = {() =>{
                        props.nav.navigate(constant.homeScreenNav,{
                            screen: `${constant.bookDetailScreenName}`,
                            params: {
                                description:description,
                                name: name,
                                selectedBook: eachBook,
                            }
                        })
                    }}
                >
                    <Image
                        style={styles.img}
                        source={{
                            uri:items.item.image_url,
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.carouselContainer} >
                <FlatList
                    horizontal
                    data={props.data}
                    renderItem={myRenderItem}
                />
            </View>
        </View>
    )
}

export default ContainerArea

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        borderRadius:30,
        height:200,
        backgroundColor:"#f5edf5",
        justifyContent:"center",
        margin:10,
        padding:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    title:{
        fontSize:30,
        fontWeight:"100",
        marginBottom:10,
        marginLeft:10,
        color:color.secondaryColor
    },
    img:{
        width:100,
        height:100,
        margin:3,
        borderRadius:30,
    },
    carouselContainer:{
        borderRadius:30,
        flexDirection:"column",
        backgroundColor:"#f5edf5",
        justifyContent:"center",
    },
})
