import React from "react";
import classes from "./Article.module.css";
export const Article = (props: any) => {
    const {author, content, description, publishedAt, title, url, urlToImage} = props.article
    return (
        <div className={classes.articleBlock}>
            <h3>{title}</h3>
            <p className={classes.imageBlock}><img src={urlToImage} alt={title}/></p>
            <p>{content}</p>
            <p>{description}</p>
            <p>{publishedAt}</p>
            <div>{author}</div>
            <p>Link <a href={url}></a></p>

        </div>
    )
}