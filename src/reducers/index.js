import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PersonFormReducer from './PersonFormReducer';
import PersonsReducer from './PersonsReducer';

export default combineReducers({
  auth: AuthReducer,
  personForm: PersonFormReducer,
  persons: PersonsReducer
});
