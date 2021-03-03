import {LOGIN, LOGOUT, SET_PICTURE} from '../type';

const INITIAL_STATE = {
  username: '',
  image: 'https://cdn.iconscout.com/icon/free/png-512/account-269-866236.png',
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        username: action.payload,
      };
    case LOGOUT: {
      return INITIAL_STATE;
    }
    case SET_PICTURE:
      return {
        ...state,
        image: action.payload,
      };
    default:
      return state;
  }
};
