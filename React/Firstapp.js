import type { Node } from 'react';
import React from 'react';
import { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TextInput,
} from 'react-native';
class MyFirstApp extends Component {
    render() {
        return (
            //    console.log("This is a log statement from our code.")
            <View style = {styles.container}>
            <Text style = {styles.title}>
            Welcome to React BUCT!
            </Text>
            <Text style = { styles.subtitle }>
            First lab of the online React Native course.
            </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
    },
    subtitle: {
        fontSize: 20,
        color: 'white',
        marginBottom: 5,
    },
})
export default MyFirstApp;


const Cat = (props) => {
  return (
    <View>
      <Text>Hello, I am {props.name}!</Text>
    </View>
  );
}

const Cafe = () => {
  return (
    <View>
      <Cat name="Maru" />
      <Cat name="Jellylorum" />
      <Cat name="Spot" />
    </View>
  );
}

//export default Cafe;