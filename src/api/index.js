import qs from 'query-string';
import { apiURL, apiKey, EVERYTHING, TOP_HEADLINES } from './config';

/**
 * fetch the data from newsapi
 * @param {Object} params 
 */
export function fetchNews(params = {}) {
    const category     = params.category || '',
          language     = params.lang || 'en',
          country      = params.country || 'us',
          isEverything = params.isEverything,
          bucket       = isEverything ? EVERYTHING : TOP_HEADLINES,
          keyword      = params.keyword;

    let queryObj    = {},
        queryString = '',
        url         = '';

    if (category) {
        queryObj.category = category;
    }

    if (language) {
        queryObj.language = language;
    }

    // everything api will not take `country` param
    if (!isEverything && country) {
        queryObj.country = country;
    }

    if (keyword) {
        queryObj.q = keyword;
    }

    queryObj.apiKey = apiKey;

    queryString = qs.stringify(queryObj);

    url = `${apiURL}${bucket}?${queryString}`;

    return fetch(url)
}
