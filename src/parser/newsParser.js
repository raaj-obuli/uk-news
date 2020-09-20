/**
 * parser the news article data
 * @param {Array} newsItems 
 */
function newsParser(newsItems = []) {
    return newsItems.map(parseNewsItem);
}

/**
 * parse the article data
 * @param {Object} data 
 */
function parseNewsItem(data = {}) {
    const source = data.source || {};

    return {
        author: data.author,
        content: data.content,
        title: data.title,
        img: data.urlToImage,
        src: source.name,
        url: data.url
    };
}

export default newsParser;
