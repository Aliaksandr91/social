import React, {useEffect} from "react";
import classes from "./News.module.css";
import {fetchNews} from "../../store/news-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../store/redux-store";

export const News = () => {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);

    return (
        <div>
            News
        </div>
    );
};
