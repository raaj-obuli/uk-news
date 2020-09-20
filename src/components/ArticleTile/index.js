import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleTile.scss';

function ArticleTile(props = {}) {
    const img       = props.img || {};

    return (
        <article className="ArticleTile">
            <Link to={props.url}>
                <figure className="ArticleTile_figure">
                    {
                        img &&
                            <img src={props.img} alt={props.src} />
                    }
                    <figcaption>{props.src}</figcaption>
                </figure>
                <div className="ArticleTile_desc"> 
                    <div className="ArticleTile_author">{props.author}</div>
                    <div className="ArticleTile_text">{props.title}</div>
                </div>
            </Link>
        </article>
    );
}

export default ArticleTile;
