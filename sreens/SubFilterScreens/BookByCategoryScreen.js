import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { constant } from '../../constant'
import Body from '../../components/Filter/Body'
import { useSelector } from 'react-redux'

const BookByCategoryScreen = (props) => {
    const state = useSelector(state => state.category)
    const { categories, selectedCategory, BooksByCategory } = state;
    return (
        <View>
            <Body
                typeScreen={constant.bookByCategoryScreenName}
                filterColumn_Data={categories}
                filtered_Data={BooksByCategory}
                selectedItem={selectedCategory}
                {...props}
            />
        </View>
    )
}

export default BookByCategoryScreen

const styles = StyleSheet.create({})
