import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MyButton from '../../components/MyButton'

const UserDetailScreen = (props) => {
    const {setLogin} = props;
    return (
        <View style={styles.container}>
            <Text>User Detail</Text>
            <MyButton
                width={100}
                height={50}
                backgrColor="blue"
                title="Logout"
                onClick={() => setLogin(false)}
            />
        </View>
    )
}

export default UserDetailScreen

const styles = StyleSheet.create({
    container:{
        alignContent:"center",
        alignItems:"center",
        alignSelf:"center"
    }
})
