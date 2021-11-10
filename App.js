import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RoutingScreen from './sreens'
import { createStore, combineReducers } from 'redux';
import cartReducer from "./store/reducers/cart";
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  cart: cartReducer, 
});

const store = createStore(rootReducer);

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
