import { GET_LATEST_MEALS_ERROR, GET_LATEST_MEALS_SUCCESS } from '../actions/types';
import initialState from './initialState';

export default (state = initialState.latestMeals, action) => {
  switch (action.type) {
    case GET_LATEST_MEALS_ERROR:
      return {
        ...state,
        hasError: true
      };
    case GET_LATEST_MEALS_SUCCESS:
      return {
        ...state,
        hasError: false,
        isLoading: false,
        latestMealsList: action.payload
      };
    default:
      return state;
  }
};

