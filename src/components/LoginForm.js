import React, { Component } from 'react';
import {connect} from 'react-redux';
import {emailChanged} from '../actions';
import {View, Text} from 'react-native';
import {Card, CardSection, Input, Button} from './common';

class LoginForm extends Component {
  onEmailChange(text){
    this.props.emailChanged(text);
  }

  render(){
    return (
      <View style={styles.loginContainer}>
        <Text style={styles.loginLogo}>Φ</Text>
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="user@email.com"
              onChangeText={this.onEmailChange.bind(this)}
              />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              label="Password"
              placeholder="password"
              />
          </CardSection>
          
          <CardSection>
            <Button>
              Login
            </Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles={
  loginContainer:{
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingLeft: 20,
    paddingRight: 20,
  },
  loginLogo:{
    fontSize: 200, 
    paddingTop: 10, 
    paddingBottom: 10, 
    textAlign: 'center', 
    color: '#03b681'
  }
}

export default connect(null, {emailChanged})(LoginForm);