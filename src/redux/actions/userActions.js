import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {LOGIN, LOGOUT, SET_PICTURE} from '../type';

export const loginAction = (username) => {
  return (dispatch) => {
    try {
      dispatch({
        type: LOGIN,
        payload: username,
      });
      AsyncStorage.setItem('username', username);
    } catch (err) {
      console.log(err);
    }
  };
};

export const logoutAction = () => {
  return (dispatch) => {
    try {
      AsyncStorage.clear();
      dispatch({
        type: LOGOUT,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const setPicture = (image) => {
  return (dispatch) => {
    dispatch({
      type: SET_PICTURE,
      payload: image,
    });
    Alert.alert('Set as profile pictured');
  };
};
