import './index.css';
import {store} from "./store/redux-store";
import ReactDOM from "react-dom";
import {AppContainer} from "./App";
import React from "react";
import {Provider} from "react-redux";


ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.getElementById('root')
);
