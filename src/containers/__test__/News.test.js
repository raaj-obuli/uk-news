import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import News from '../News';
import { FETCH_NEWS } from "../../redux/actionTypes";

const Wrapper = mount(
    <Provider store={store}>
        <News />
    </Provider>
);

it('renders no news items', () => {
  expect(Wrapper.find('.News_noitems').length).toEqual(1);
});

it('renders Search component items', () => {
    expect(Wrapper.find('Search').length).toEqual(1);
});


it('renders article items', () => {
    store.dispatch({
        type: FETCH_NEWS,
        payload: [
            {
                author: "By Frances Mulraney For Dailymail.com",
                title: "Joe Biden said in 2016 that it is a president's 'c…tutional duty' to fill a SCOTUS seat - Daily Mail",
                img: "https://i.dailymail.co.uk/1s/2020/09/20/07/33391224-0-image-a-29_1600582081393.jpg",
                src: "Daily Mail",
                url: "https://www.dailymail.co.uk/news/article-8752197/J…6-presidents-constitutional-duty-SCOTUS-seat.html"
            },
            {
                author: "By Frances Mulraney For Dailymail.com",
                title: "Joe Biden said in 2016 that it is a president's 'c…tutional duty' to fill a SCOTUS seat - Daily Mail",
                img: "https://i.dailymail.co.uk/1s/2020/09/20/07/33391224-0-image-a-29_1600582081393.jpg",
                src: "Daily Mail",
                url: "https://www.dailymail.co.uk/news/article-8752197/J…6-presidents-constitutional-duty-SCOTUS-seat.html"
            }
        ]
    });

    Wrapper.update();
    expect(Wrapper.find('ArticleTile').length).toEqual(2);
  });

