import { FETCH_NEWS } from "./actionTypes";
import { fetchNews as fetchNewsData } from '../api/index';
import newsParser from '../parser/newsParser';

/**
 * fetches news adta from api, parses the data and dispatch to store
 * @param {Object} params api params for the news api
 */
export const fetchNews = (params = {}) => async (dispatch) => {
    let keyword  = params.keyword,
        apiParam = {
            keyword: keyword
        }

    // search from everything api when a keyword is present
    if (keyword) {
        apiParam.isEverything = true;
    }

    try {
        const response   = await fetchNewsData(apiParam),
              jsonData   = await response.json(),
              // parser the data from the api before pushing to store
              parsedData = newsParser(jsonData.articles);
    
        dispatch({
            type: FETCH_NEWS,
            payload: parsedData
        })
        
    } catch (error) {
        console.error('API ERROR:', error);
    }
};