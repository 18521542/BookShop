import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { constant } from '../../constant';
import { windowHeight } from '../../sreens/MainScreens/homeScreen';
import Content from './Content';
import FilterColumn from './FilterColumn';

const Body = (props) => {

    const { typeScreen, filterColumn_Data, filtered_Data, selectedItem } = props;
    return (
        <View style={styles.container}>
            <FilterColumn
                data={filterColumn_Data}
                typeScreen={typeScreen}
                selectedItem={selectedItem}
            />
            <View style={styles.contentContainer}>
                <Content
                    data={filtered_Data}
                    typeScreen={typeScreen}
                    selectedItem={selectedItem}
                />
            </View>

        </View>
    )
}

export default Body

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        borderWidth:1,
        // height:windowHeight,
        height:"100%",
    },
    contentContainer:{
        
    }
})
