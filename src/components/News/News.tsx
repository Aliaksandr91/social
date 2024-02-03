import React, {useEffect} from "react";
import classes from "./News.module.css";
import {ArticleType, fetchNews} from "../../store/news-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppRootStateType} from "../../store/redux-store";
import {Loader} from "../common/Loader/Loader";
import {Article} from "./Article/Article";

export const News = () => {
    const dispatch = useDispatch<AppDispatch>();
    const newsData = useSelector((state:AppRootStateType) => state.news);
    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);

    if (newsData.loading) {
        return <Loader/>
    } else {
        return (
            <div>
                {newsData.articles.map((article:ArticleType)=>{
                    return (
                        <Article article={article}/>
                    )
                })}
            </div>
        );
    }
};
