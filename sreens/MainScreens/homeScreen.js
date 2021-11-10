import React from 'react'
import { Button, Image,StyleSheet, Text,FlatList, View, TouchableOpacity } from 'react-native'
import BookGridTile from '../../components/BookGridTile'
import { BOOKS } from '../../dummy-data/BOOK'
// import { constant } from '../..constant/constant';
// import homeScreenNavigator from './navigators/homeScreenNavigator';


const homeScreen = ({navigation}) => {
    const renderGridItem = items =>{
        const name = items.item.name;
        const imgLink = items.item.imgLink;
        const description = items.item.description;
        return (
            <BookGridTile 
                name={name} 
                imgLink={imgLink}
                onSelect={ () => {
                    navigation.navigate("Root", {
                        screen:"homeScreen1",
                        params:{
                            description: description,
                            name: name,
                        }
                    });
                }}
            />
        )
    }
    return (
        <FlatList
            numColumns={1}
            data={BOOKS}
            renderItem={renderGridItem}
        />
    )
}

export default homeScreen

const styles = StyleSheet.create({
    main:{
        flex:1,
        alignItems:"center",
        backgroundColor: '#61dafb',
        paddingTop:10,
    },
    imgItem:{
        width: 300,
        height: 300,
        paddingTop:20
    },
    testText:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    testBtn:{
        width:30,
    }
})
