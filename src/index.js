import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import vaccineSlice from './reducers/vaccineSlice'
import mySaga from '@redux-saga/core'
import { fetchDataSagaList } from "./Redux-Saga/fetchDataSagaList";

const sagaMiddleware = mySaga()

const store = configureStore({
    reducer: {
        vaccineData: vaccineSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: false,
    }).concat(sagaMiddleware),
    devTools: true,
});

sagaMiddleware.run(fetchDataSagaList);



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById("root")
);
