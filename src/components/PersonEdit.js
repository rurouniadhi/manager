import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { text } from 'react-native-communications';
import PersonForm from './PersonForm';
import { personUpdate, personSave, personDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class PersonEdit extends Component {
  state = {
    showModal: false
  };
  componentWillMount() {
    _.each(this.props.person, (value, prop) => {
      this.props.personUpdate({ prop, value });
    });
  }
  onButtonPress() {
    const { name, phone } = this.props;
    this.props.personSave({ name, phone, uid: this.props.person.uid });
  }

  onTextPress() {
    const { name, phone } = this.props;
    text.text(phone, `hi there, ${name}`);
  }

  onAccept() {
    const { uid } = this.props.person;

    this.props.personDelete({ uid });
    this.setState({ showModal: false });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <PersonForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            SMS
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Delete
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete it?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone } = state.personForm;

  return { name, phone };
};

export default connect(mapStateToProps, {
  personUpdate, personSave, personDelete
})(PersonEdit);
