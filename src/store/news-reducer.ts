import {AppDispatch, AppThunkType} from "./redux-store";

type ArticleType = {
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
    articles: ArticleType[],
    loading: boolean
    error: null | string
}
const initialState: articleStateType = {
    articles: [],
    loading: false,
    error: null,
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
                news: action.payload
            };
        default:
            return state;
    }
};

export const fetchNews = (): AppThunkType => {
    return async (dispatch: AppDispatch) => {
        const response = await fetch('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json');
        const data = await response.json();
        dispatch(setNewsAC(data));
    };
};