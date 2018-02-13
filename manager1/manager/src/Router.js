import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import Dashboard from './components/Dashboard';
import Basic from './components/Basic';

const RouterComponent = () => {
  return (
   <Router>
 {/*<Router sceneStyle={{ paddingTop: 0}}>*/}
 
    


  <Scene key="root" >
    
      <Scene key="auth" hideNavBar title="Please Login">

            <Scene key="login" component={LoginForm} title="Please Logon" />


      </Scene>

      <Scene
            onRight={() => Actions.employeeCreate()}
            rightTitle="Add"
            key="employeeList"
            component={EmployeeList}
            title="Employees"
      />
    
      <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
      <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />


  
    <Scene 
            key="main" 
            component={Dashboard}
            title="Dashboard" 
            hideNavBar
    />
     
    {/*<Scene 
            key="basic" 
            component={Basic}
            title="Basic" 
            hideNavBar
    />*/}
    
 </Scene>

    </Router>
  );
};

export default RouterComponent;
