import React from 'react';
import RoutingScreen from './src/sreens'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import cartReducer from "./src/store/reducers/cart";
import { Provider } from 'react-redux';
import bookReducer from './src/store/reducers/book';
import ReduxThunk from "redux-thunk"
import authReducer from './src/store/reducers/authentication';
import { paymentReducer } from './src/store/reducers/payment';
import authorReducer from "./src/store/reducers/author"
import categoryReducer from './src/store/reducers/category';
import { billReducer } from './src/store/reducers/bill';
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

import { Dimensions } from 'react-native';
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
