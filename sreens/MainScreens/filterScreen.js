import React, { useCallback, useEffect } from 'react'
import { Button } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { constant } from '../../constant'
import { FetchAuthors, FilterBookByAuthor } from '../../store/actions/author'
import { FetchCategories, FilterBookByCATEGORY } from '../../store/actions/category'
import { FilterScreenNavigator } from '../navigators/filterScreenNavigator'

const filterScreen = (props) => {
    const state = useSelector(state => state)

    const selectedAuthor = state.author.authors[0];
    const selectedCategory = state.category.categories[0];

    const dispatch = useDispatch()
    const LoadFirstDataRow = useEffect(
        async () => {
            console.log("here")
            dispatch(FilterBookByCATEGORY(selectedCategory));
            dispatch(FilterBookByAuthor(selectedAuthor));
        },
        [dispatch, selectedAuthor, selectedCategory],
    )
    return (
        <FilterScreenNavigator
            style={styles.header}/>
    )
}



export default filterScreen

const styles = StyleSheet.create({
    header:{
        marginTop:10,
    }
})


