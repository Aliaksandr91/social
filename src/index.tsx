import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type PostData ={
    id: number;
    message: string;
    likesCount: number;
}

export type MyPostsProps = {
    postData: PostData[];
}

export type DialogsDataType = {
    id: number
    name: string
}
export type MessageDataType = {
    id: number
    message: string
}



let dialogsData:DialogsDataType[] = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Valera'}
]
let messageData:MessageDataType[] = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is you'},
    {id: 3, message: 'yo'},
    {id: 4, message: 'aaa'},
    {id: 5, message: 'bbbb'},
    {id: 6, message: 'kkkk'}
]

let postData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'Hello, my first post?', likesCount: 11}
]


ReactDOM.render(
    <App postData={postData} dialogsData={dialogsData} messageData={messageData}/>,
  document.getElementById('root')
);