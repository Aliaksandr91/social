import './index.css';
import {addPost, RootStateType, state, subscribe, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
let rerenderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state)
subscribe(rerenderEntireTree)