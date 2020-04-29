import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, Image } from 'react-native';

export class SnapchatV4 extends Component {
    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.yellowContainer}>
                
                    <Image
                        source={{ uri: 'https://codehs.com/uploads/c799accde67e1fd3bbd699119b4e1c83' }}
                        style={{ height: 50, width: 50 }}
                    />
                </View>
                
                <View style={styles.redContainer}>
                    <TouchableHighlight
                    onPress={() => {
                        alert('You have successfully logged in!')
                    }}
                >
                <View style={styles.cont}>
                    <Text>LOG IN</Text>
                </View>
                </TouchableHighlight>
                </View>
                
                
                
                <View style={styles.blueContainer}>
                    <TouchableHighlight
                    onPress={() => {
                        alert('You have successfully Signed Up!')
                    }}
                >
                <View style={styles.cont}>
                    <Text>SIGN UP</Text>
                </View>
                </TouchableHighlight>
                </View>
                
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    yellowContainer:{
        flex:5,
        backgroundColor:'#fffc00',
        justifyContent:'center',
        alignItems:'center',
    },
    redContainer:{
        flex:1,
        backgroundColor:'#ff0049',
        justifyContent:'center',
        alignItems:'center',
        color:'white',
    
    },
    blueContainer:{
        flex:1,
        backgroundColor:'#00a9ff',
        justifyContent:'center',
        alignItems:'center',
        color:'white'
    }
});

export default SnapchatV4;