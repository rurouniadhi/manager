import React, {Component} from 'react';
import { Provider } from 'react-redux';
import {View, Text} from 'react-native';
import {createStore} from 'redux';

class App extends Component{
  render (){
    return (
      <Provider>
        <View>
          <Text>
            Hii there !
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;