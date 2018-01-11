import React, {Component} from 'react';
import { Provider } from 'react-redux';
import {View, Text} from 'react-native';
import {createStore} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component{
  componentWillMount(){
    const config = {
      apiKey: "AIzaSyD13KcckyDAvO6WclxXX_Wxh4FjcnQ7yvk",
      authDomain: "manager-e5756.firebaseapp.com",
      databaseURL: "https://manager-e5756.firebaseio.com",
      projectId: "manager-e5756",
      storageBucket: "manager-e5756.appspot.com",
      messagingSenderId: "732595012840"
    };
    firebase.initializeApp(config);
  }
  
  render (){
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm/>
      </Provider>
    );
  }
}

export default App;