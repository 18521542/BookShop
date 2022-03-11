import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native-elements/dist/image/Image';
import { constant } from '../../constant';

const Tile = (props) => {
    const { book } = props;
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{
                        uri:book.image_url,
                    }}
                />
                <Text style={styles.name}>{book.name}</Text>
            </View>
        </TouchableOpacity>     
    )
}

export default Tile

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
        justifyContent:"flex-end",
        backgroundColor:"white",
        width:120,
        height:120,
        margin:5,
        marginBottom:10,
        marginTop:10,
        borderRadius:20,
        // alignItems:"center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        backgroundColor:"white"
    },
    name:{
        textAlign:"center",
        fontSize:14,
        fontWeight:"200",
        margin:2,
        // height:"20%",
        // borderWidth:1,
    },
    image:{
        width:120,
        height:100,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        // borderWidth:1,
    }
})
