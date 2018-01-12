import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Input, Card, CardSection } from './common';
import { personUpdate } from '../actions';

class PersonForm extends Component {
  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Input
              label="name"
              placeholder="Jane"
              value={this.props.name}
              onChangeText={value => this.props.personUpdate({ prop: 'name', value })}
            />
          </CardSection>
          <CardSection>
            <Input
              label="phone"
              placeholder="0821231313"
              value={this.props.phone}
              onChangeText={value => this.props.personUpdate({ prop: 'phone', value })}
            />
          </CardSection>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone } = state.personForm;

  return { name, phone };
};

export default connect(mapStateToProps, personUpdate)(PersonForm);
