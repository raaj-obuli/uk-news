import newsReducer from '../news';
import { FETCH_NEWS } from "../../actionTypes";

it('should return default state', () => {
    const newsData = newsReducer();
    expect(newsData.data.length).toEqual(0);
});

it('should return news items in state', () => {
    const newsData = newsReducer(null, {
        type: FETCH_NEWS,
        payload: [{}, {}, {}]
    });

    expect(newsData.data.length).toEqual(3);
});