import React, { useState } from 'react'
import { StyleSheet, ScrollView, FlatList, View, ActivityIndicator} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Carousel from '../../components/ContainerArea'
import { API_ENDPOINT, color, constant } from '../../constant'
import Logo from '../../components/Logo'
import CartButton from '../../components/CartButton'
import Header from '../../components/Header'
import ListContainer from '../../components/ListContainer'
import { fetch_books, fetch_more_books } from '../../store/actions/book'
import { useCallback, useEffect } from 'react'
import { FetchAuthors } from '../../store/actions/author'
import { FetchCategories } from '../../store/actions/category'
const homeScreen = ({navigation}) => {
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    const [page, setPage] = useState(1);

    const bookReducer = useSelector(state => state.book)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetch_books())
        dispatch(FetchAuthors());
        dispatch(FetchCategories());
    }, [dispatch])

    const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
          contentSize.height - paddingToBottom;
    };

    useEffect(() => getData(), [])

    const getData = () => {
        setLoading(true);
        let url = API_ENDPOINT + `/api/book?page=${page}`
        fetch(url)
            .then(res => res.json())
            .then(resJson => {
                setPage(page + 1)
                setDataSource([...dataSource, ...resJson])
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }

    return (
        <ScrollView
            onScroll={({nativeEvent}) => {
                if (isCloseToBottom(nativeEvent)) {
                    getData()
                }
            }}
            scrollEventThrottle={400}
            style={styles.container}
        >
            <Carousel
                title={"Sản phẩm nổi bật"}
                data={dataSource}
                nav={navigation}
            />
            <ListContainer
                data={dataSource}
                title="Danh mục sản phẩm"
                nav={navigation}
            />
            {loading ? (<ActivityIndicator/>) : (null)}
        </ScrollView>
    )
}

export default homeScreen

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
        flex:1,
        backgroundColor:color.backgroundColor,
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

import { Dimensions } from 'react-native';
import { Button } from 'react-native-elements'
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
