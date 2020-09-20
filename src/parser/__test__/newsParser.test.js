import newsParser from '../newsParser';

const mockData = require('./mockData.json');
const parsedData = newsParser(mockData.articles);
const article    = parsedData[0];

it('should parsed n items', () => {
    expect(parsedData.length).toEqual(2);
});

it('should parsed article data', () => {
    expect(article.author).toEqual(mockData.articles[0].author);
    expect(article.title).toEqual(mockData.articles[0].title);
    expect(article.img).toEqual(mockData.articles[0].urlToImage);
    expect(article.src).toEqual(mockData.articles[0].source.name);
    expect(article.url).toEqual(mockData.articles[0].url);
});