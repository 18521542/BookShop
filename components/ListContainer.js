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
        <View>
            <Text>Hello</Text>
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
        backgroundColor:"white"
    },
})
