import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type PostDataTypes = {
    id: number
    message: string
    likesCount:number
}

let postData:any = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'Hello, my first post?', likesCount: 11}
]


ReactDOM.render(
    <App postData={postData}/>,
  document.getElementById('root')
);