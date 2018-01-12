import React, { Component } from 'react';
import { connect } from 'react-redux';
import { personUpdate, personCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import PersonForm from './PersonForm';

class PersonCreate extends Component {
  onButtonPress() {
    const { name, phone } = this.props;

    this.props.personCreate({ name, phone });
  }
  render() {
    return (
      <Card>
        <PersonForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
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

export default connect(mapStateToProps, {
  personUpdate, personCreate
})(PersonCreate);
