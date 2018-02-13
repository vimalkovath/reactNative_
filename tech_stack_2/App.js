/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import {Header} from './src/components/common';
import LibraryList from './src/components/LibraryList';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
//provider allowing one single child only
export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={createStore(reducers)}>
      <View style={{flex:1}}>
        <Header headerText="Tech stack">
          </Header>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>

        <LibraryList/>
       
      </View>
      </Provider>
    );
  }
}

const styles = {

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
}
