import './index.css';
import {RootStateType} from "./store/store";
import {store} from "./store/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {Provider} from "./StoreContext";

let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())
store.subscribe(() => rerenderEntireTree(store.getState()))