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
    const renderTile = (tile) => {
    
    let action = null;
    if(typeScreen===constant.bookByCategoryScreenName)
        action = () => FilterBookByCATEGORY(tile);
    else
        action = () => FilterBookByAuthor(tile);

    const dispatch = useDispatch()
    const FilterAction = useCallback(() => {
        dispatch(action);    
    },[dispatch])

        return (
            <TouchableOpacity 
                style={styles.tile} 
                key={tile.id}
                onPress={FilterAction}
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
    }
})
