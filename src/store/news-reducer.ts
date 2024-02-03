import {AppDispatch, AppThunkType} from "./redux-store";
import axios from "axios";

export type ArticleType = {
    author: string
    content: string
    description: string
    publishedAt: string
    // source: {id: null, name: 'Livemint'}
    title: string
    url: string
    urlToImage: string
}

type articleStateType = {
    articles: ArticleType[]
    status: string
    totalResults: number
    loading: boolean
}
const initialState: articleStateType = {
    articles: [],
    status: '',
    totalResults: 0,
    loading: true
};


export const setNewsAC = (data: any) => {
    return {
        type: 'news/SET-NEWS',
        payload: data,
    } as const
}

export const newsReducer = (state = initialState, action: ReturnType<typeof setNewsAC>) => {
    switch (action.type) {
        case 'news/SET-NEWS':
            return {
                ...state,
                loading: false,
                ...action.payload
            };
        default:
            return state;
    }
};

export const fetchNews = (): AppThunkType => {
    return async (dispatch: AppDispatch) => {
        const response = await axios('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json');
        dispatch(setNewsAC(response.data));
    };
};