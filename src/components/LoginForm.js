import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';


class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  renderError() {
    if (this.props.error) {
      return (
        <View>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.loginContainer} behavior="padding">
        <Text style={styles.loginLogo}>Φ</Text>
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="user@email.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>
          
          <CardSection>
            <Input
              secureTextEntry
              label="Password"
              placeholder="password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>

          {this.renderError()}

          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
      </KeyboardAvoidingView>
    );
  }
}

const styles = {
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingLeft: 20,
    paddingRight: 20,
  },
  loginLogo: {
    fontSize: 200,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    color: '#03b681'
  },
  errorTextStyle: {
    color: '#be062c',
    fontSize: 18,
    alignSelf: 'center',
    fontStyle: 'italic'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);
