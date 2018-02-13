import React,{Component} from 'react';
import {View,Text} from 'react-native';
import firebase from 'firebase';
import {Header,Button,Spinner} from './components/common';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

class App extends Component {

  //wether login or not
state = {loggedIn:null};


onButtonPress(){
 console.log(this);  
}

componentWillMount(){
  
  
      // Initialize Firebase
 firebase.initializeApp( {
    apiKey: "AIzaSyC7_eWsBNDUG8lwaXMfEDggKQ_-YxAyVqc",
    authDomain: "awsome-8126d.firebaseapp.com",
    databaseURL: "https://awsome-8126d.firebaseio.com",
    projectId: "awsome-8126d",
    storageBucket: "awsome-8126d.appspot.com",
    messagingSenderId: "1057105613138"
  });

//signin or signout 
  firebase.auth().onAuthStateChanged((user)=>{
      if(user)
            {
            this.setState({loggedIn:true});
            }
            else
            {
            this.setState({loggedIn:false});
            }

  });
  
}


renderContent(){

switch(this.state.loggedIn){
    case true:
    return (
           <LoginForm/>

        );
    case false:
    return <Dashboard/>;
    default:
    return <Spinner size="large"/>;
}

}

    render(){
        return (
            <View>

                <Header headerText='Authentication'>
                    </Header>
            
            {this.renderContent()}
                

     
            </View>
        );
    }
}

export default App;