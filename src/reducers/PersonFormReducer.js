import {
  PERSON_UPDATE,
  PERSON_CREATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PERSON_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case PERSON_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
