import React from 'react'
import { StyleSheet, ScrollView, FlatList, View} from 'react-native'
import BookGridTile from '../../components/BookGridTile'
import { useSelector } from 'react-redux'
import ContainerArea from '../../components/ContainerArea'
import { color } from '../../constant'
import { SafeAreaView } from 'react-native'
// const dispatch = useDispatch();



const homeScreen = ({navigation}) => {
    //get state
    const globalState = useSelector(state => state)
    return (
        <ScrollView style={styles.container}>
            <ContainerArea 
                title={"Product"}
                data={globalState.book.data}
                nav={navigation}
            />
            <ContainerArea 
                title={"Recommend For You"}
                data={globalState.book.data}
            />
            <ContainerArea 
                title={"You may like"}
                data={globalState.book.data}
            />
            <ContainerArea 
                title={"Trending"}
                data={globalState.book.data}
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
