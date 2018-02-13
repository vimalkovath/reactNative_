
import React,{Component} from 'react';
import {View} from 'react-native';


// no needd of state so we can go with functional component

const Card=(props)=>{

return (
    <View style={styles.containerStyle}>
 {props.children}
        </View>
);

};

//styling

const styles={
    containerStyle:{

borderWidth:1,
borderRadius:2,
borderColor:'#ddd',
borderBottomWidth:0,
shadowColor:'#000',
shadowOpacity:0.1,
shadowOffset:{width:0,height:2},
shadowRadius:2,
elevation:1,
marginRight:5,
marginLeft:5,
marginTop:10


    }
}

export {Card};

