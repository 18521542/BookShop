import React from 'react'
import { StyleSheet, ScrollView, FlatList, View} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Carousel from '../../components/ContainerArea'
import { color, constant } from '../../constant'
import Logo from '../../components/Logo'
import CartButton from '../../components/CartButton'
import Header from '../../components/Header'
import ListContainer from '../../components/ListContainer'
import { fetch_books } from '../../store/actions/book'
import { useCallback, useEffect } from 'react'
import { Button } from 'react-native-elements'

const homeScreen = ({navigation}) => {
    //get state
    const globalState = useSelector(state => state)
    let bookdata = [];
    const dispatch = useDispatch();
    const fetch_book = useCallback(
        () => {
            dispatch(fetch_books())
        },
        [dispatch, bookdata],
    )

    // useEffect(() => {
    //     const call_api = async () => await fetch_book();
    //     call_api();
    // }, [bookdata])

    // console.log(bookdata)
    return (
        <ScrollView style={styles.container}>
            <Carousel 
                title={"Product"}
                data={globalState.book.data}
                nav={navigation}
            />
            <ListContainer
                data={globalState.book.data}
                title="New"
                nav={navigation}
            />
            <Button title = "fetch"
                onPress={fetch_book}
            />
        </ScrollView>
    )
}

export default homeScreen

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
        flex:1,
        backgroundColor:color.backgroundColor,
    },
    main:{
        flex:1,
        alignItems:"center",
        backgroundColor: '#61dafb',
        paddingTop:10,
    },
    imgItem:{
        width: 300,
        height: 300,
        paddingTop:20
    },
    testText:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    testBtn:{
        width:30,
    }
})

export const homeScreenNavOption = (nav) => {
    return {
        headerTitle: () => (
            <Header/>
        ),
        headerStyle:{
            backgroundColor: color.primaryColor,
        },
        headerLeft: () => (<Logo/>),
        headerRight: () => (
            <CartButton 
                onClick={()=>{nav.navigation.navigate(constant.cartScreenName)}}
            />
        )
    }
}
