import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PersonForm from './PersonForm';
import { personUpdate } from '../reducers';
import { Card, CardSection, Button } from './common';

class PersonEdit extends Component {
  componentWillMount() {
    _.each(this.props.person, (value, prop) => {
      this.props.personUpdate({ prop, value });
    });
  }
  onButtonPress() {
    const { name, phone } = this.props;
    console.log(name, phone);
  }

  render() {
    return (
      <Card>
        <PersonForm />
        <CardSection>
          <Button onPress={this.onPressButton.bind(this)}>
            Save
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone } = state.personForm;

  return { name, phone };
};

export default connect(mapStateToProps, { personUpdate })(PersonEdit);
