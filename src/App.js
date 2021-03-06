import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyD13KcckyDAvO6WclxXX_Wxh4FjcnQ7yvk',
      authDomain: 'manager-e5756.firebaseapp.com',
      databaseURL: 'https://manager-e5756.firebaseio.com',
      projectId: 'manager-e5756',
      storageBucket: 'manager-e5756.appspot.com',
      messagingSenderId: '732595012840'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
