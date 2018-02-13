// Import libraries for making a component
import React from 'react';
import { Text, View,Image } from 'react-native';

const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';
const Header = (props) => {
  const { textStyle, viewStyle,leftTumbnailStyle,rightTumbnailStyle,avatar } = styles;

  return (
    <View style={viewStyle}>

		 <Text 
     style={leftTumbnailStyle}
       onPress={() => onItemSelected()}
     >
==
       </Text>
	

      <Text style={textStyle}>{props.headerText}</Text>

<Text style={rightTumbnailStyle}>No</Text>


    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor:'#2dadb8',
        justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: 20,
    color:'#fff',

  },
  rightTumbnailStyle:{
        height:50,
        width:50,
     justifyContent: 'flex-end',
     position: 'absolute',
     right:0
    },
     leftTumbnailStyle:{
        height:50,
        width:50,
     justifyContent: 'flex-start', 
       position: 'absolute',
     left:0
    }
};

// Make the component available to other parts of the app
export { Header };
