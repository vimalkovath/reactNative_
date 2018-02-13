import React, { Component } from 'react';
import { 
        Text,View,
        Animated,
        Keyboard,
        KeyboardAvoidingView,
        DeviceEventEmitter,
        Dimensions ,
        ScrollView 
      } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card,Header, CardSection, Input, Button, Spinner,Tabs,SearchBox} from './common';
import {DashboardGrid} from './DashboardGrid';

class LoginForm extends Component {

 constructor(props) {
    super(props);

    this.keyboardHeight = new Animated.Value(0);
  }




  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return (
 <ScrollView 
  scrollEnabled={false}   >
<Header/>






        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection >
          {this.renderButton()}
        </CardSection>

 

  
 </ScrollView>
      
      

    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
   instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
   container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
      flex: 1
  },
    container2: {
    padding: 20,
    flex: 1,
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);
