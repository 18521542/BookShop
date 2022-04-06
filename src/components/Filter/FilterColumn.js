import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { TouchableOpacity, ActivityIndicator } from 'react-native'
import { ScrollView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { constant } from '../../constant'
import { FilterBookByAuthor } from '../../store/actions/author'
import { FilterBookByCATEGORY } from '../../store/actions/category'
import { API_ENDPOINT } from '../../constant'

const FilterColumn = (props) => {
    const { typeScreen } = props;

    const [loading, setLoading] = useState(false);
    const [authorData, setAuthor] = useState([]);
    const [categoryData, setCategory] = useState([]);
    const [dataSource, setDataSource] = useState([]);
    const [page, setPage] = useState(1);

    const author = useSelector(state => state.author)
    const category = useSelector(state => state.category)

    useEffect(() => {
        getData("category", setCategory, categoryData);
        getData("author", setAuthor, authorData);
    }, [])
    useEffect(() => {
        if(typeScreen===constant.bookByAuthorScreenName){
            setDataSource(authorData)
        }
        else
            setDataSource(categoryData)
    }, [authorData, categoryData])

    const checkIsChosen = (id)=> {
        if(typeScreen===constant.bookByAuthorScreenName){
            if(id === author.selectedAuthor.id)
                return true;
            return false;
        }
        if(typeScreen===constant.bookByCategoryScreenName){
            if(id === category.selectedCategory.id)
                return true;
            return false;
        }
    }
    const renderTile = (tile) => {
        const dispatch = useDispatch();
        return (
            <TouchableOpacity
                style={styles.tile}
                key={tile.id}
                onPress={ async () => {
                    if(typeScreen===constant.bookByAuthorScreenName){
                        await dispatch(FilterBookByAuthor(tile))
                        return;
                    }
                    else{
                        await dispatch(FilterBookByCATEGORY(tile))
                        return;
                    }
                }}
            >
                <Text style={(checkIsChosen(tile.id))? styles.textChosen : styles.text} >{tile.name}</Text>
            </TouchableOpacity>
        )
    }

    const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
          contentSize.height - paddingToBottom;
    };

    const getData = (dataType, setState, state) => {
        setLoading(true);
        let url = API_ENDPOINT + `/api/${dataType}?page=${page}`
        fetch(url)
            .then(res => res.json())
            .then(resJson => {
                setPage(page + 1)
                setState([...state, ...resJson])
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }

    const renderList = (dataSource == undefined) ? null : dataSource.map(tile => renderTile(tile))
    return (
            <ScrollView
                onScroll={({nativeEvent}) => {
                    if (isCloseToBottom(nativeEvent)) {
                        if(typeScreen===constant.bookByAuthorScreenName){
                            getData("author", setAuthor, authorData);
                        }
                        else {
                            getData("category", setCategory, categoryData);
                        }
                    }
                }}
                scrollEventThrottle={400}
            >
                {renderList}
                {loading ? (<ActivityIndicator/>) : (null)}
            </ScrollView>
    )
}

export default FilterColumn

const styles = StyleSheet.create({
    tile:{
        flex:1,
        flexDirection:"column",
        width:"90%",
        height:100,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        borderRadius:10,
        marginBottom:5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        padding:4,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textChosen:{
        color:"red",
    },
    text:{
        color:"black"
    }
})
