import React, { useEffect } from "react";
import classes from "./News.module.css";

export const News = () => {
    useEffect(() => {
        fetch('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json')
            .then((response) => response.json())
            .then(data => console.log(data))
    }, []);

    return (
        <div>
            News
        </div>
    );
};
