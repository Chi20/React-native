import React, { Component,useState } from 'react';
import { StyleSheet, View, Button, Text} from 'react-native';
import {Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
export default class Lab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Lastname', 'Firstname', 'City',],
      tableData: [
        ['Row', '1', 'Beijing'],
        ['Row', '2 ', 'Shanghai'],
        ['Row', '3', 'BUCT'],
        ['Row', '4', 'Glasgow'],
        ['Row', '5', 'Dublin'],
        ['Row', '6', 'Ireland'],
        ['Row', '7', 'Paris'],
        ['Row', '8', 'NewYork'],
      ],
    }
  }
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#847c74'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#248067' },
  text: { margin: 6,},
})