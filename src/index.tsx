import './index.css';
import {RootStateType} from "./redux/store";
import {store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
let rerenderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())
store.subscribe(()=>rerenderEntireTree(store.getState()))