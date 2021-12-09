import React, { useCallback, useEffect } from 'react'
import { Button } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { constant } from '../../constant'
import { FetchAuthors, FilterBookByAuthor } from '../../store/actions/author'
import { FilterScreenNavigator } from '../navigators/filterScreenNavigator'

const filterScreen = (props) => {
    const state = useSelector(state => state.author)
    console.log(state)
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

export const Body = (props) => {
    return (<View>
        <Text>This is the body of filter Screen</Text>

    </View>)
}
