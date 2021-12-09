import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { constant } from '../../constant'
import { Body } from '../MainScreens/filterScreen'

const BookByAuthorScreen = (props) => {
    return (
        <View>
            <Body
                type={constant.bookByAuthorScreenName}
                {...props}
            />
        </View>
    )
}

export default BookByAuthorScreen

const styles = StyleSheet.create({})
