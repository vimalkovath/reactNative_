import React,{Component} from 'react';
import { View,Text,Dimensions  } from 'react-native';
let ScreenHeight = Dimensions.get("window").height;

class DashboardGrid extends Component {


 constructor(props){
    super(props);
  
  }


  render() {
  return (
    <View style={styles.containerStyle}>
      {this.props.children}


    </View>
  );
  }
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    height: ScreenHeight-470
  }
};

export { DashboardGrid };
