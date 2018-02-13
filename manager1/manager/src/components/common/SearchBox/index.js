import React from "react";
import {Text,View,TextInput,Image} from "react-native";
import { Dimensions } from "react-native";
const width = Dimensions.get("window").width; //full width
const thumbnail_image='app.png';
 const SearchBox = () => {

		return(
		
				<View style={styles.inputWrapper}>
					
				    <TextInput
          style={styles.inputStyle}
          placeholder="Type here to translate!"
        />
	<Image
          style={styles.thumbnailStyle}
      source={require('./app.png')}    />
			 
		 {/*<Image
          style={styles.thumbnailStyle}
          source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
        />	*/}
				</View>
				
	

		);
};


const styles = {
  
    inputWrapper:{
        marginTop:15,
		marginBottom:10,
        backgroundColor:"#fff",
        opacity:0.9,
        borderRadius:7,
      flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingBottom: 10
    },
	 inputStyle: {
    flex: 1,
  },
  
	  thumbnailStyle: {
		  width: 40, height: 40,
    justifyContent: 'center',
    alignItems: 'center',
marginTop:15
  },
};



export { SearchBox };

