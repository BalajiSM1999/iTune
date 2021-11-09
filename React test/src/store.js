

import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { productListReducer, productSortReducer } from './redux/reducer';


const reducer = combineReducers({
    productList : productListReducer,
    productSort : productSortReducer
})



const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));
export default store;


/*

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersApi } from "./redux/products";

 const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddiware) =>
    getDefaultMiddiware().concat(usersApi.middleware),
});

setupListeners(store.dispatch);
export default store

*/