import {combineReducers} from '@reduxjs/toolkit';
import {userReducer} from './userReducer';
import {catReducer} from './catReducer';

export default combineReducers({
  user: userReducer,
  cat: catReducer,
});
