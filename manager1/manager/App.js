/**
 * Created by vimal k v on 6/15/2017.
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { createStore ,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import {Header} from './src/components/common';
import LoginForm from './src/components/LoginForm';

import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './src/Router';





const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
//provider allowing one single child only

class App extends Component {


  componentWillMount() {
      var config = {
    apiKey: "AIzaSyDAeNxPOjFlwvVrs-CGAXeKveV8BKGjzjg",
    authDomain: "react-manager-cca73.firebaseapp.com",
    databaseURL: "https://react-manager-cca73.firebaseio.com",
    projectId: "react-manager-cca73",
    storageBucket: "react-manager-cca73.appspot.com",
    messagingSenderId: "670424334127"
  };
  firebase.initializeApp(config);
  }

   render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
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


export default App;