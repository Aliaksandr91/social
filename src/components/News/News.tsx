import React, {useEffect} from "react";
import classes from "./News.module.css";
import {ArticleType, fetchNews} from "../../store/news-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppRootStateType} from "../../store/redux-store";
import {Loader} from "../common/Loader/Loader";

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
                {newsData.articles.map((article:any)=>{
                    return (
                        <div>
                            <div>{article.author}</div>
                            <p>{article.content}</p>
                            <p>{article.description}</p>
                            <p>{article.publishedAt}</p>
                            <p>{article.title}</p>
                            <p>{article.url}</p>
                            <p><img src={article.urlToImage} alt={article.title}/></p>
                        </div>

                    )
                })}
            </div>
        );
    }


};
