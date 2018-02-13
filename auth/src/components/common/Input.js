import React from 'react';
import {TextInput,View,Text} from 'react-native';

const Input =({label,value,onChangeText,placeholder,secureTextEntry}) => {

const {inputStyle,labelStyle,containerStyle}=styles

return(
        <View style={containerStyle}>
            <Text style={labelStyle}>
            {label}
            </Text>

            <TextInput 
            secureTextEntry={secureTextEntry}
            autoCorrect={false}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            style={inputStyle}/>
                
        </View>
);
};

const styles={
    inputStyle:{
        color:'#000',
        marginTop:20,
        paddingRight:5,
        paddingLeft:5,
        fontSize:18,
        lineHeight:23,
        flex:2,
        height:40
    },
    labelStyle:{
          color:'#000',
        fontSize:18,
        paddingLeft:20,
        flex:1,
        height:20
    },
    containerStyle:{
        height:40,
        flex:1,
        flexDirection:'row',
        alignItems:'center'

    }
}
export {Input};