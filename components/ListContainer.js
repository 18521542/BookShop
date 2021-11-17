import React from 'react'
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import ProductCard from './ProductCard';

const ListContainer = (props) => {
    const {data, title, nav} = props;

    const renderItem = (items) => {
        const book = items.item;
        return (
            <Text>{book.name}</Text>
        )
    }
    return (
        <View style={styles.container}>
            <ScrollView style={styles.row}>
                <ProductCard
                    price={2000}
                    rating={3}
                    title="test"
                    imgLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvC2WyxVQWvTLjQ_37kYGy7jjszxjRtS7M3Q&usqp=CAU"
                />
                <ProductCard
                    price={2000}
                    rating={3}
                    title="test"
                    imgLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvC2WyxVQWvTLjQ_37kYGy7jjszxjRtS7M3Q&usqp=CAU"
                />
                <ProductCard
                    price={2000}
                    rating={3}
                    title="test"
                    imgLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvC2WyxVQWvTLjQ_37kYGy7jjszxjRtS7M3Q&usqp=CAU"
                />
            </ScrollView>
            <ScrollView style={styles.row}>

            </ScrollView>
        </View>
    )
}

export default ListContainer

const styles = StyleSheet.create({
    container:{
        borderWidth:2,
        flexDirection:"row"
    },
    row:{
        width:200,
        height:400,
        margin:3,
    }
})
