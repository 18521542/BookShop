import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RoutingScreen from './sreens'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import cartReducer from "./store/reducers/cart";
import { Provider } from 'react-redux';
import bookReducer from './store/reducers/book';
import ReduxThunk from "redux-thunk"
import authReducer from './store/reducers/authentication';
import { paymentReducer } from './store/reducers/payment';
import authorReducer from "./store/reducers/author"
import categoryReducer from './store/reducers/category';
import { billReducer } from './store/reducers/bill';
const rootReducer = combineReducers({
  cart: cartReducer, 
  book: bookReducer,
  auth: authReducer,
  pay: paymentReducer,
  author: authorReducer,
  category: categoryReducer,
  bill: billReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store ={store}>
      <RoutingScreen/>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


import { Dimensions } from 'react-native';
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
