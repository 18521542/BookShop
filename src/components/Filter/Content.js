import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import Tile from './Tile';

const Content = (props) => {
    const { data } = props

    const renderData = data.map(
        Books => Books.map(
            (Book,index) => <View key={index}><Tile book={Book}/></View>
        )
    )

    return (
        <View style={styles.container}> 
            {renderData}
        </View>
    )
}

export default Content

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"center",
        width:"100%",
        height:"100%",
        paddingTop:15,
    }
})
