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
                                name: name
                            }
                        })
                    }}
                >
                    <Image
                        style={styles.img}
                        source={{
                            uri:items.item.imgLink,
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <SafeAreaView style={styles.carouselContainer} >
                <FlatList
                    horizontal
                    data={props.data}
                    renderItem={myRenderItem}
                />
            </SafeAreaView>
        </View>
    )
}

export default ContainerArea

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        backgroundColor:"white",
        borderRadius:10,
        borderWidth:0,
        height:250,
        margin:10,
        marginBottom:1,
        marginLeft:0,
        marginRight:0,
    },
    title:{
        fontSize:30,
        backgroundColor:color.backgroundColor,
        fontWeight:"bold",
        paddingLeft:8,
        color:color.secondaryColor
    },
    img:{
        width:200,
        height:200,
        borderWidth:2,
        margin:3,
        borderRadius:30,
    },
    carouselContainer:{
        flex:1,
        flexDirection:"column",
        alignContent:"center",
        backgroundColor:color.backgroundColor
    },
})
