import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { constant } from '../../constant'
import Body from '../../components/Filter/Body'

const BookByAuthorScreen = (props) => {
    const state = useSelector(state => state.author)
    const { authors, selectedAuthor, BooksByAuthor } = state;
    return (
        <View>
            <Body
                filterColumn_Data={authors}
                filtered_Data={BooksByAuthor}
                selectedItem={selectedAuthor}
                typeScreen={constant.bookByAuthorScreenName}
                {...props}
            />
        </View>
    )
}

export default BookByAuthorScreen

const styles = StyleSheet.create({})
