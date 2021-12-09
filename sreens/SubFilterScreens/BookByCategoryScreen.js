import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { constant } from '../../constant'
import { Body } from '../MainScreens/filterScreen'

const BookByCategoryScreen = (props) => {
    return (
        <View>
            <Body
                type={constant.bookByCategoryScreenName}
                {...props}
            />
        </View>
    )
}

export default BookByCategoryScreen

const styles = StyleSheet.create({})
