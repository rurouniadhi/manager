import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  PERSON_UPDATE,
  PERSON_CREATE,
  PERSONS_FETCH_SUCCESS,
  PERSON_SAVE_SUCCESS
} from './types';

export const personUpdate = ({ prop, value }) => {
  return {
    type: PERSON_UPDATE,
    payload: { prop, value }
  };
};

export const personCreate = ({ name, phone }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/persons`)
      .push({ name, phone })
      .then(() => {
        dispatch({ type: PERSON_CREATE });
        Actions.personList();
      });
  };
};

export const personsFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/persons`)
      .on('value', snapshot => {
        dispatch({ type: PERSONS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const personSave = ({ name, phone, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/persons/${uid}`)
      .set({ name, phone })
      .then(() => {
        dispatch({ type: PERSON_SAVE_SUCCESS });
        Actions.personList();
      });
  };
};

export const personDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/persons/${uid}`)
      .remove()
      .then(() => {
        Actions.personList();
      });
  };
};
