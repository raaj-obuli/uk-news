import React from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../redux/actions';
import ArticleTile from '../components/ArticleTile';
import Search from '../components/Search';

import './News.scss';

const NO_RESULT = 'No news available for the keyword entered'

class News extends React.Component {
    componentDidMount() {
        this.props.fetchNews();
    }

    render() {
        const { news = [], fetchNews } = this.props;

        return (
            <div className="News">
                <div className="News_Search">
                    <Search onChange={fetchNews} />
                </div>
                <div className="News_Items">
                {
                    news.length ? news.map(function(article = {}, index) {
                        return (
                            <ArticleTile
                                key={article.id || index}
                                src={article.src}
                                title={article.title}
                                img={article.img}
                                author={article.author}
                                url={article.url}
                            />
                        )
                    }) : <div className="News_noitems">{NO_RESULT}</div>
                }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state = {}) => {
    const news     = state.news || {},
          newsData = news.data || [];

    return {
        news: newsData
    };
};

export default connect(mapStateToProps, { fetchNews })(News);
