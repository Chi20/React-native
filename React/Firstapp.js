///**
// * Sample React Native App
// * https://github.com/facebook/react-native
// *
// * @format
// * @flow strict-local
// */
//
//import React from 'react';

//import {
//  AppRegistry,
//  SafeAreaView,
//  ScrollView,
//  StatusBar,
//  StyleSheet,
//  Text,
//  useColorScheme,
//  View,
//} from 'react-native';
//
////import {
////  Colors,
////  DebugInstructions,
////  Header,
////  LearnMoreLinks,
////  ReloadInstructions,
////} from 'react-native/Libraries/NewAppScreen';
//
//
////const Section = ({children, title}): Node => {
////  const isDarkMode = useColorScheme() === 'dark';
////  return (
////    <View style={styles.sectionContainer}>
////      <Text
////        style={[
////          styles.sectionTitle,
////          {
////            color: isDarkMode ? Colors.white : Colors.black,
////          },
////        ]}>
////        {title}
////      </Text>
////      <Text
////        style={[
////          styles.sectionDescription,
////          {
////            color: isDarkMode ? Colors.light : Colors.dark,
////          },
////        ]}>
////        {children}
////      </Text>
////    </View>
////  );
////};
//
//const App: () => Node = () => {
//return(
//    <>
//        <StatusBar bar style = "dark content"/>
//    <Text style = {style.sectionTitle}>
//        Welcome to BUCT.
//        </Text>
//</>
//);
//  };
//
////  return (
////    <SafeAreaView style={backgroundStyle}>
////      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
////      <ScrollView
////        contentInsetAdjustmentBehavior="automatic"
////        style={backgroundStyle}>
////        <Header />
////        <View
////          style={{
////            backgroundColor: isDarkMode ? Colors.black : Colors.white,
////          }}>
////          <Section title="BUCT">
////            Edit <Text style={styles.highlight}>App.js</Text> to change this
////            screen and then come back to see your edits.
////          </Section>
////          <Section title="See Your Changes">
////            <ReloadInstructions />
////          </Section>
////          <Section title="Debug">
////            <DebugInstructions />
////          </Section>
////          <Section title="Learn More">
////            Read the docs to discover what to do next:
////          </Section>
////          <LearnMoreLinks />
////        </View>
////      </ScrollView>
////    </SafeAreaView>
////  );
////};
//
//const styles = StyleSheet.create({
//  container:{
//    flex:1,
//  },
//  sectionContainer: {
//    marginTop: 32,
//    paddingHorizontal: 24,
//  },
//  sectionTitle: {
//    fontSize: 24,
//    fontWeight: '600',
//  },
//  sectionDescription: {
//    marginTop: 8,
//    fontSize: 18,
//    fontWeight: '400',
//  },
//  highlight: {
//    fontWeight: '700',
//  },
//});
//
//export default App;
import React from 'react';
import type { Node } from 'react';
import { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TextInput
} from 'react-native';

const App = () => {
    return ( <
        ScrollView >
        <
        Text > Some text < /Text> <
        View >
        <
        Text > Some more text < /Text> <
        Image source = {
            {
                uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }
        }
        style = {
            { width: 200, height: 200 } }
        /> <
        /View> <
        TextInput style = {
            {
                height: 40,
                borderColor: 'gray',
                borderWidth: 1
            }
        }
        defaultValue = "You can type in me" /
        >
        <
        /ScrollView>
    );
}
class MyFirstApp extends Component {
    render() {
        return (
            //    console.log("This is a log statement from our code.")
            <
            View style = { styles.container } >
            <
            Text style = { styles.title } >
            Welcome to React BUCT!
            <
            /Text> <
            Text style = { styles.subtitle } >
            First lab of the online React Native course. <
            /Text> <
            /View>
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