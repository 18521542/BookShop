import React, { useCallback } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import MyButton from '../../components/MyButton'
import { logout } from '../../store/actions/authentication'


const UserDetailScreen = (props) => {
    //get state
    const auth_state = useSelector(state => state.auth)
    const { user } = auth_state;

    const dispatch = useDispatch();
    const logoutHandler = useCallback(()=>{
        dispatch(logout());
    }, [dispatch])

    return (
        <View style={styles.container}>
            <Text>{`Welcome ${user.username}`}</Text>
            <MyButton
                width={100}
                height={50}
                backgrColor="blue"
                title="Logout"
                onClick={logoutHandler}
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
