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
                style={(checkIsChosen(tile.id))? styles.tileChosen : styles.tile} 
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
                <Text>{tile.name}</Text>
            </TouchableOpacity>
        )
    }
    const renderList = (data == undefined) ? null : data.map(tile => renderTile(tile))
    return (
        <View style={styles.container}>
            <ScrollView>
                {renderList}
            </ScrollView>
        </View>
    )
}

export default FilterColumn

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        width:"25%",
    },
    tile:{
        flex:1,
        width:"100%",
        height:100,
        margin:2,
        backgroundColor:"white",
        alignSelf:"center"
    },
    tileChosen:{
        flex:1,
        width:"100%",
        height:100,
        margin:2,
        backgroundColor:"blue",
        alignSelf:"center"
    }
})
