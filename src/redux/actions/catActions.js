import axios from 'axios';
import {API_URL, headers} from '../../helpers';
import {CAT_CLEAR, CAT_FECTH} from '../type';

export const catFetch = () => {
  return async (dispatch) => {
    try {
      let response = await axios.get(`${API_URL}?limit=10`, headers);
      dispatch({
        type: CAT_FECTH,
        payload: response.data,
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };
};

export const catClear = () => {
  return (dispatch) => {
    dispatch({
      type: CAT_CLEAR,
    });
  };
};
