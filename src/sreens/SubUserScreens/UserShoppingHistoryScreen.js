import React, { useCallback, useEffect } from 'react'
import { Button } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector, useDispatch } from 'react-redux'
import BillLabel from '../../components/Bill/BillLabel'
import { fetch_bills_by_user } from '../../store/actions/bill'

const UserShoppingHistoryScreen = (props) => {

    const dispatch = useDispatch()
    useEffect(async () => {
        await dispatch(fetch_bills_by_user())
    }, [dispatch])

    const bill = useSelector(state => state.bill)

    return (
        <View>
            <ScrollView>
                {bill.bills.map((bill, index = bill.id) =>
                    <View key={index}>
                        <BillLabel index={bill.id} item={bill} navigation={props.navigation}/>
                    </View>
                )}
            </ScrollView>
        </View>
    )
}

export default UserShoppingHistoryScreen

const styles = StyleSheet.create({})
