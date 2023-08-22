import './index.css';
import {store, RootStateType} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
let rerenderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <App state={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)