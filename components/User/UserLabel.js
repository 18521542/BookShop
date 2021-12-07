import React from 'react'
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements';

const UserLabel = (props) => {
    const {title, onClick, IconName, IconType} = props;

    const defaultF = () => {
        console.log("here")
    }
    return (
        <TouchableOpacity
            onPress={onClick || defaultF}
        >
            <View style={styles.container}>
                <View style={{
                    flexDirection:"row", 
                    justifyContent:"center",
                    alignItems:"center",
                    marginLeft:20 
                }}>
                    <Icon
                        name={IconName || "reorder-four-outline"}
                        type={IconType || "ionicon"}
                    />
                    <Text style={styles.title}>{title || "This is my label"}</Text>
                </View>
                {/* <Text style={styles.endBtn}>{`...`}</Text> */}
                <Icon
                    name="arrow-forward-outline"
                    type="ionicon"
                    style={styles.endBtn}
                />
            </View>
        </TouchableOpacity>
    )
}

export default UserLabel

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:60,
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:10,
        flexDirection:"row",
        backgroundColor:"#d4e3fa",
        borderRadius:20
    },
    title:{
        marginLeft:10,
        justifyContent:"center"
    },
    endBtn:{
        marginRight:20,
        fontSize:30,
        fontWeight:"100",
        alignItems:"center"
    }
})
