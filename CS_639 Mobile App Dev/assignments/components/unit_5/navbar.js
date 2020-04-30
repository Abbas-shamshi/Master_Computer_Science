import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, Dimensions, Image } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export class Navbar extends Component {
    render() {
        return (
            <View style={styles.container}>

                
                
                <View style={styles.contentContainer}>
                
                </View>
                <View style={styles.navContainer}>
                
                    <TouchableHighlight
                        onPress={() => {
                            alert('Alert Message!')
                        }}
                    >
                    
                        <Image style={styles.imageNav}
                            source={{ uri: 'https://codehs.com/uploads/167db19eeb42f67b3e80444442b5f585' }}
                            
                        />
                        
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            alert('Alert Message!')
                        }}
                    >
                    
                        <Image style={styles.imageNav}
                            source={{ uri: 'https://codehs.com/uploads/58526c04126647c616920fd7f7f4b9cc' }}
                            
                        />
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            alert('Alert Message!')
                        }}
                    >
                    
                        <Image style={styles.imageNav}
                            source={{ uri: 'https://codehs.com/uploads/f84700b5372ff195ae4447ba45aca22e ' }}
                            
                        />
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            alert('Alert Message!')
                        }}
                    >
                    
                        <Image style={styles.imageNav}
                            source={{ uri: 'https://codehs.com/uploads/1e280414d057e6f33b3b8ae3ceef1962 ' }}
                            
                        />
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            alert('Alert Message!')
                        }}
                    >
                    
                        <Image style={styles.imageNav}
                            source={{ uri: 'https://codehs.com/uploads/93e86aa46aaf49859420d73aff725c04 ' }}
                            
                        />
                    </TouchableHighlight>
                
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
    },
    navContainer:{
        flexDirection:'row',
        height:deviceHeight/6,
        backgroundColor:'#f5f5f5',
        alignItems:'center',
        justifyContent:'space-evenly',
        borderTopWidth:6,
        borderColor:'#e3e3e3',
    },
    
    contentContainer:{
        height:(5*deviceHeight)/6,
        backgroundColor:'#ffffff',
    },
    imageNav:{
        height: 40, 
        width: 40,
    }
    
});

export default Navbar;