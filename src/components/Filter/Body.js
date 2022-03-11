import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { color, constant } from '../../constant';
import { windowHeight } from '../../sreens/MainScreens/homeScreen';
import Content from './Content';
import FilterColumn from './FilterColumn';

const Body = (props) => {

    const { typeScreen, filterColumn_Data, filtered_Data, selectedItem } = props;
    return (
        <View style={styles.container}>
            <View style={styles.columnFilterContainer}>
                <FilterColumn
                    data={filterColumn_Data}
                    typeScreen={typeScreen}
                    selectedItem={selectedItem}
                />
            </View>
            <ScrollView style={styles.contentContainer}>
                <Content
                    data={filtered_Data}
                    typeScreen={typeScreen}
                    selectedItem={selectedItem}
                />
            </ScrollView>

        </View>
    )
}

export default Body

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        height:"100%",
    },
    columnFilterContainer:{
        width:"30%",
        padding:5,
        backgroundColor:"#e3d8e3"
    },
    contentContainer:{
        width:"70%",
        backgroundColor:"#f5edf5"
    }
})
