import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { personsFetch } from '../actions';
import ListItem from './ListItem';

class PersonsList extends Component {
  componentWillMount() {
    this.props.personsFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ persons }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(persons);
  }

  renderRow(person) {
    return <ListItem person={person} />;
  }

  render() {
    console.log(this.props);
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const persons = _.map(state.persons, (val, uid) => {
    return { ...val, uid };
  });
  return { persons };
};

export default connect(mapStateToProps, { personsFetch })(PersonsList);
