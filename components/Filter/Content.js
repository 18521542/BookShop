import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';

const Content = (props) => {
    const { data, selectedItem} = props
    const { id } = selectedItem;

    const author = useSelector(state => state.author)
    const category = useSelector(state => state.category)

    console.log(`${id}`)
    const BooksToRender = data.map(AllBook => console.log(AllBook)) || [{id:1,name:"lala"}]
    // console.log(BooksToRender)
    // const renderData = BooksToRender.map(Book => <Text key={Book.id}>{Book.name}</Text>)
    return (
        <View>
            {/* {renderData} */}
        </View>
    )
}

export default Content

const styles = StyleSheet.create({})
