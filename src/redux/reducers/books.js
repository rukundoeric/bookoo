import {
  GET_BOOKS,
  CHANGE_QUERY,
  DISCARD,
  DISCARD_VIEWS,
  GET_BOOK_DETAILS,
  SET_BOOK_ID,
} from '../actions/types';

const initialState = {
  books: {},
  query: '',
  book: undefined,
  bookId: undefined,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_BOOK_ID:
      return {
        ...state,
        bookId: payload,
      };
    case GET_BOOKS: {
      return {
        ...state,
        books: payload,
      };
    }
    case GET_BOOK_DETAILS:
      return {
        ...state,
        book: payload,
      };
    case CHANGE_QUERY:
      return {
        ...state,
        query: payload,
      };
    case DISCARD:
      return {
        query: state.query,
        books: payload,
      };
    case DISCARD_VIEWS:
      return {
        ...Object.assign({}, state, { book: undefined, bookId: undefined }),
      };
    default:
      return state;
  }
};
