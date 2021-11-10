import React from 'react'
import { StyleSheet, FlatList} from 'react-native'
import BookGridTile from '../../components/BookGridTile'
import { useSelector } from 'react-redux'
// const dispatch = useDispatch();



const homeScreen = ({navigation}) => {

    //get state
    const globalState = useSelector(state => state)

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
            data={globalState.book.data}
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
