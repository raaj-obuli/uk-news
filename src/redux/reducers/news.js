import { FETCH_NEWS } from "../actionTypes";

const newsReducer = (state = { data : [] }, action = {}) => {
  switch (action.type) {
    case FETCH_NEWS: {
      return {
          data: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default newsReducer;
