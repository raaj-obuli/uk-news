import React from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../../redux/actions';
import ArticleViewer from '../../components/ArticleViewer';

import './Article.scss';

/**
 * Container component that act as the container for the current route
 * This component fetches data from api and dispatch it store
 */
class Article extends React.Component {
    componentDidMount() {
        this.props.fetchNews({
            pageSize: 3
        });
    }

    render() {
        const { article = {} } = this.props;

        return (
            <div className="Article">
                <ArticleViewer
                    src={article.src}
                    title={article.title}
                    img={article.img}
                    author={article.author}
                    url={article.url}
                    content={article.content}
                />
            </div>
        );
    }
}

const mapStateToProps = (state = {}) => {
    const news     = state.news || {},
          newsData = news.data || [];

    return {
        article: newsData[newsData.length - 1]
    };
};

export default connect(mapStateToProps, { fetchNews })(Article);
