import React,{Component} from 'react';
import {Text,View} from 'react-native';
import firebase from 'firebase';
import { Card,Header, CardSection, Input, Button, Spinner,Tabs,SearchBox} from './common';
import {DashboardGrid} from './DashboardGrid';
import EmployeeList from './EmployeeList';

class Dashboard extends Component{


 constructor(props){
    super(props);
    this.state = {page:'SOLUTIONS'};
  }

  componentWillMount() {

  }

  componentWillReceiveProps(nextProps) {
  }



  render() {
    return (
      <Card>
 <Header headerText={this.state.page} backgroundColor='#2dadb8'/>

<SearchBox/>


<DashboardGrid >



<CardSection>
  <Text style={{flex:1}}>
              {this.state.page}
          </Text>

           <Text >
              A2Z
          </Text>
           
  </CardSection>

  <CardSection>
      <Text style={{borderWidth:1,margin:2,width:100,height:50,alignSelf: 'auto',alignItems:'flex-start'}}>
      A2Z
      </Text>

      <Text style={{borderWidth:1,margin:2,width:100,height:50,alignSelf: 'auto',alignItems:'flex-start'}}>
      dff
      </Text>
      <Text style={{borderWidth:1,margin:2,width:100,height:50,alignSelf: 'auto',alignItems:'flex-start'}}>
      erer
      </Text>
      <Text style={{borderWidth:1,margin:2,width:100,height:50,alignSelf: 'auto',alignItems:'flex-start'}}>
      ryyhyuj
      </Text>
 </CardSection>

      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />

  </View>

<EmployeeList/>
  
</DashboardGrid>




              <Tabs selected={this.state.page} style={{backgroundColor:'#026a73',bottom:20}}
              selectedStyle={{color:'white'}} 
              onSelect={el=>this.setState({page:el.props.name})}>

            <Text name="SOLUTIONS"
            selectedStyle={{}}
             style={{color:'white'}}
            selectedIconStyle={{borderTopWidth:2,borderTopColor:'#026a73',backgroundColor:'#68b04d'}}
             >SOLUTIONS</Text>

            <Text name="INDUSTRIES" 
            style={{color:'white'}}
             selectedIconStyle={{borderTopWidth:2,borderTopColor:'#026a73',backgroundColor:'#68b04d'}}>
             INDUSTRIES</Text>

            <Text name="PRACTICE" 
            style={{color:'white'}}
            selectedIconStyle={{borderTopWidth:2,borderTopColor:'#026a73',backgroundColor:'#68b04d'}}
            selectedStyle={{backgroundColor:'#68b04d'}}>
            PRACTICE</Text>

            <Text name="CLIENTS" 
            selectedStyle={{}} 
            style={{color:'white'}}
            selectedIconStyle={{borderTopWidth:2,borderTopColor:'#026a73',backgroundColor:'#68b04d'}}
            >
            CLIENTS LIST</Text>

        </Tabs>    
      </Card>

   );
  }
}



export default Dashboard;