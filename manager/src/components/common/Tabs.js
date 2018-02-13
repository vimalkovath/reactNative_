

import React, {
    Component
} from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Keyboard,
    Platform,
} from 'react-native';



class Tabs extends Component {
     state = { keyboardUp: false};


    onSelect(el){
        if (el.props.onSelect) {
            el.props.onSelect(el);
        } else if (this.props.onSelect) {
            this.props.onSelect(el);
        }
    }

    componentWillMount(){
        if (Platform.OS==='android') {
            this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow);
            this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide);
        }
    }

    componentWillUnmount(){
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    keyboardWillShow = (e) => {
        this.setState({ keyboardUp: true });
    };

    keyboardWillHide = (e) => {
        this.setState({ keyboardUp: false });
    };

    render(){
        const self = this;
        let selected = this.props.selected
        if (!selected){
            React.Children.forEach(this.props.children.filter(c=>c), el=>{
                if (!selected || el.props.initial){
                    selected = el.props.name || el.key;
                }
            });
        }
        return (
            <View style={[styles.tabbarView, this.props.style, this.state.keyboardUp && styles.hidden]}>
                {React.Children.map(this.props.children.filter(c=>c),(el)=>
                    <TouchableOpacity key={el.props.name+"touch"}
                       testID={el.props.testID}
                       style={[styles.iconView, this.props.iconStyle, (el.props.name || el.key) == selected ? this.props.selectedIconStyle || el.props.selectedIconStyle || {} : {} ]}
                       onPress={()=>!self.props.locked && self.onSelect(el)}
                       onLongPress={()=>self.onSelect(el)}
                       activeOpacity={el.props.pressOpacity}>
                         {selected == (el.props.name || el.key) ? React.cloneElement(el, {selected: true, style: [el.props.style, this.props.selectedStyle, el.props.selectedStyle]}) : el}
                    </TouchableOpacity>
                )}
            </View>
        );
    }
}
var styles = StyleSheet.create({
    tabbarView: {
        position:'absolute',
      
        right:0,
        left:0,
        opacity:1,
        height: 100,
        backgroundColor:'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    iconView: {
        flex: 1,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth:1,
        borderColor:'#fff'
    },
    hidden: {
        height: 0,
    },
});
export { Tabs };
