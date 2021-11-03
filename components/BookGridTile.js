import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";

const BookGridTile = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onSelect}
    >
      <View style={styles.main}>
        <Text>{props.name}</Text>
        <Image
          style={styles.imgItem}
          source={{
            uri: props.imgLink,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default BookGridTile;

const styles = StyleSheet.create({
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
