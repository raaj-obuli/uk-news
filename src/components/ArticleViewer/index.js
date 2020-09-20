import React from 'react';
import './ArticleViewer.scss';

function ArticleViewer(props = {}) {
    const img       = props.img || {};

    return (
        <article className="ArticleViewer">
            <figure className="ArticleViewer_figure">
                {
                    img &&
                        <img src={props.img} alt={props.src} />
                }
                <figcaption>{props.src}</figcaption>
            </figure>
            <div className="ArticleViewer_desc"> 
                <div className="ArticleViewer_author">{props.author}</div>
                <div className="ArticleViewer_text">{props.title}</div>
            </div>
            <div className="ArticleViewer_content">
                <p>{props.content}</p>
                <p>{props.content}</p>
                <p>{props.content}</p>
                <p>{props.content}</p>
            </div>
        </article>
    );
}

export default ArticleViewer;
