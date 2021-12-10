import React, { useCallback, useEffect } from 'react'
import { Button } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { fetch_bills_by_user } from '../../store/actions/bill'

const UserShoppingHistoryScreen = (props) => {

    const bill = useSelector(state => state.bill)
    const dispatch = useDispatch()
    const test = useCallback(
        async () => {
            await dispatch(fetch_bills_by_user())
        },
        [dispatch],
    )

    const renderBills = bill.bills.map(bill => (
        <View>
            <Text>{bill.id}</Text>
        </View>
    ))
    return (
        <View>
            <Text>This is user shopping screen</Text>
            {renderBills}
            <Button
                title="test"
                onPress={test}
            />
        </View>
    )
}

export default UserShoppingHistoryScreen

const styles = StyleSheet.create({})
