import React, { Component,useState } from 'react';
import { StyleSheet, View, Button, Text} from 'react-native';
import {Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

  
const Cat = (props) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
      />
    </View>
  );
}

export default class ExampleOne extends Component {
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
      value1 : ['1'],
      value2 : ['1/2','1/2'],
      value3 : ['1/3','1/3','1/3'],
    }
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
     
//      <Table borderStyle={{borderWidth: 1, borderColor: 'green'}}>
//      <Row data={state.value1} style={styles.head} textStyle={styles.text2}/>
//      <Row data={state.value2} style={styles.head} textStyle={styles.text2}/>
//      <Row data={state.value3} style={styles.head} textStyle={styles.text2}/>
//      <Row data={state.value3} style={styles.head} textStyle={styles.text2}/>
//      <Row data={state.value2} style={styles.head} textStyle={styles.text2}/>
//      <Row data={state.value1} style={styles.head} textStyle={styles.text2}/>
//      </Table>
      </View>
      
 

    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6},
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     backgroundColor: 'red',
// },
  text2: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
},
subtitle: {
    fontSize: 20,
    color: 'white',
    marginBottom: 5,
},
})