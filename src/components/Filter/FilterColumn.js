import React, { useCallback } from 'react'
import { FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { constant } from '../../constant'
import { FilterBookByAuthor } from '../../store/actions/author'
import { FilterBookByCATEGORY } from '../../store/actions/category'

const FilterColumn = (props) => {
    const { typeScreen, data } = props;

    const author = useSelector(state => state.author)
    const category = useSelector(state => state.category)

    const checkIsChosen = (id)=> {
        if(typeScreen===constant.bookByAuthorScreenName){
            if(id === author.selectedAuthor.id)
                return true;
            return false;
        }
        if(typeScreen===constant.bookByCategoryScreenName){
            if(id === category.selectedCategory.id)
                return true;
            return false;
        }
    }
    const renderTile = (tile) => {
        const dispatch = useDispatch();
        return (
            <TouchableOpacity 
                style={styles.tile} 
                key={tile.id}
                onPress={ async () => {
                    if(typeScreen===constant.bookByAuthorScreenName){
                        await dispatch(FilterBookByAuthor(tile))
                        return;
                    }
                    else{
                        await dispatch(FilterBookByCATEGORY(tile))
                        return;
                    }
                }}
            >
                <Text style={(checkIsChosen(tile.id))? styles.textChosen : styles.text} >{tile.name}</Text>
            </TouchableOpacity>
        )
    }
    const renderList = (data == undefined) ? null : data.map(tile => renderTile(tile))
    return (
            <ScrollView>
                {renderList}
            </ScrollView>
    )
}

export default FilterColumn

const styles = StyleSheet.create({
    tile:{
        flex:1,
        flexDirection:"column",
        width:"90%",
        height:100,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        borderRadius:10,
        marginBottom:5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        padding:4,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textChosen:{
        color:"red",
    },
    text:{
        color:"black"
    }
})
