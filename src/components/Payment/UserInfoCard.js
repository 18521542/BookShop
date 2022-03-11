import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const UserInfoCard = (props) => {
    const {address, email, name, telephone} = props.info
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Tên khách hàng</Text>
                <Text style={styles.text}>Số điện thoại</Text>
                <Text style={styles.text}>Email</Text>
                <Text style={styles.text}>Địa chỉ</Text>
            </View>

            <View>
                <Text style={styles.text}>{` :    `}</Text>
                <Text style={styles.text}>{` :    `}</Text>
                <Text style={styles.text}>{` :    `}</Text>
                <Text style={styles.text}>{` :    `}</Text>
            </View>

            <View style={{flex:1}}>
                <Text style={styles.textInfo}>{`${name}.`}</Text>
                <Text style={styles.textInfo}>{`${telephone}.`}</Text>
                <Text style={styles.textInfo}>{`${email}.`}</Text>
                <Text style={styles.textInfo}>{`${address}.`}</Text>
            </View>

        </View>
    )
}

export default UserInfoCard

const styles = StyleSheet.create({
    container:{
        padding:5,
        flexDirection:"row",
        width:"100%",
        backgroundColor:"#ebf5e9"
    },
    text:{
        fontSize:22,
        fontWeight:"100",
        marginBottom:5,
    },
    textInfo:{
        fontSize:22,
        fontWeight:"200",
        marginBottom:5,        
    }
})
