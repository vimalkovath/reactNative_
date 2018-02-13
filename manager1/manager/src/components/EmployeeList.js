import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView,View,Text } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';
import { Card,Tabs} from './common';

class EmployeeList extends Component {
  

 constructor(props){
    super(props);
    this.state = {page:'solutions'};
  }

  componentWillMount() {
    this.props.employeesFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    return (
      <Card>
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />



     
    <Text>
              Selected page: {this.state.page}
          </Text>
           

           
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
