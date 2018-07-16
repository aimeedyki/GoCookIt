import axios from 'axios';
import { GET_LATEST_MEALS_ERROR, GET_LATEST_MEALS_SUCCESS } from './types.js';

export const getLatestMeals = () => {
  return dispatch => (
    axios.get('https://www.themealdb.com/api/json/v1/1/latest.php')
      .then((response) => {
        dispatch({
          type: GET_LATEST_MEALS_SUCCESS,
          payload: response.data.meals
        });
      })
      .catch(() => {
        dispatch({ type: GET_LATEST_MEALS_ERROR });
      })
  )
};
