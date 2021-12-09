import React, { useCallback } from 'react'
import { Button } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { constant } from '../../constant'
import { FetchAuthors, FilterBookByAuthor } from '../../store/actions/author'
import { FilterScreenNavigator } from '../navigators/filterScreenNavigator'

const filterScreen = (props) => {
    const state = useSelector(state => state.author)
    const dispatch = useDispatch();
    const FilterAuthor = useCallback(
        async () => {
            // await dispatch(FetchAuthors());
            dispatch(FilterBookByAuthor("19dcbc06-26b8-476c-a9b4-9aa9d470e744"));
        },
        [dispatch],
    )

    return (
        <FilterScreenNavigator style={styles.header}/>
    )
}

export default filterScreen

const styles = StyleSheet.create({
    header:{
        marginTop:10,
    }
})
