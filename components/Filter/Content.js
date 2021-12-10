import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';

const Content = (props) => {
    const { data } = props

    const renderData = data.map(
        Books => Books.map(
            Book => <Text key={Book.id}>{Book.name}</Text>
        )
    )

    return (
        <View>
            {renderData}
        </View>
    )
}

export default Content

const styles = StyleSheet.create({})
