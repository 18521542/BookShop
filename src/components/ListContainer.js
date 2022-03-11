import React from 'react'
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import ProductCard from './ProductCard';

const ListContainer = (props) => {
    const {data, title, nav} = props;
    const renderProduct = (product) => {
        return (
            <View key={product.id}>
                <ProductCard
                    {...product}
                    nav={nav}
                    selectedBook={product}
                />
            </View>
        )
    }

    const renderListProduct = data.map(item => renderProduct(item));
   
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>Danh mục sản phẩm</Text>
            <View style={styles.container}>
                {renderListProduct}
            </View>
        </View>
    )
}

export default ListContainer

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        flex:1,
        flexWrap:"wrap",
        justifyContent:"space-between",
        paddingLeft:2,
        paddingRight:2,
    },
    title:{
        fontWeight:'bold',
        fontSize:30,
        margin:10,
        fontWeight:"200"
    },
    mainContainer:{
        backgroundColor:"#f5edf5",
        alignItems:"center",
        marginTop:10,
        paddingBottom:10,
        borderRadius:30,
        margin:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    }
})
