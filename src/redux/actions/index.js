/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  GET_BOOKS,
  CHANGE_QUERY,
  DISCARD,
  DISCARD_VIEWS,
  GET_BOOK_DETAILS,
  SET_BOOK_ID,
} from './types';

export const getbooks = (text, maxRes, startIndex) => async (dispatch) => {
  const { data } = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${text}&max-results=${maxRes}&start-index=${startIndex}`,
  );
  dispatch({
    type: GET_BOOKS,
    payload: data,
  });
};
export const getbookDetails = id => async (dispatch) => {
  const { data } = await axios.get(
    `https://www.googleapis.com/books/v1/volumes/${id}`,
  );
  dispatch({
    type: GET_BOOK_DETAILS,
    payload: data,
  });
};
export const setBookId = id => async (dispatch) => {
  // console.log(id);
  dispatch({
    type: SET_BOOK_ID,
    payload: id,
  });
};
export const changeQuery = query => async (dispatch) => {
  dispatch({
    type: CHANGE_QUERY,
    payload: query,
  });
};
export const discardViewHistory = () => async (dispatch) => {
  dispatch({
    type: DISCARD_VIEWS,
    payload: {},
  });
};
export const discardHistory = () => async (dispatch) => {
  dispatch({
    type: DISCARD,
    payload: {},
  });
};
