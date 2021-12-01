import React, { useCallback } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import MyButton from '../../components/MyButton'
import UserDetail from '../../components/User/UserDetail'
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
            <UserDetail 
                user={user}
                logoutHandler={logoutHandler}
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
