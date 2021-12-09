import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

const Tile = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text>Lala</Text>
        </TouchableOpacity>
    )
}

export default Tile

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        width:100,
        height:100,
    }
})
