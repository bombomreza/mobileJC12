import {CAT_CLEAR, CAT_FECTH} from '../type';

const INITIAL_STATE = {
  cat: [],
};

export const catReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CAT_FECTH:
      return {
        cat: action.payload,
      };
    case CAT_CLEAR:
      return INITIAL_STATE;
    default:
      return state;
  }
};
