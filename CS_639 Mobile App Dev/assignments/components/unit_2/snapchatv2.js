import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight } from 'react-native';

export class SnapchatV2 extends Component {
    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.yellowContainer}>
                
                </View>
                
                <TouchableHighlight
                    onPress={() => {
                        alert('You have successfully logged in!')
                    }}
                >
                <View style={styles.redContainer}>
                    <Text>LOG IN</Text>
                </View>
                </TouchableHighlight>
                
                
                <TouchableHighlight
                    onPress={() => {
                        alert('You have successfully Signed Up!')
                    }}
                >
                <View style={styles.blueContainer}>
                    <Text>SIGN UP</Text>
                </View>
                </TouchableHighlight>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    yellowContainer:{
        height:600,
        backgroundColor:'#fffc00'
    },
    redContainer:{
        height:50,
        backgroundColor:'#ff0049',
        justifyContent:'center',
        alignItems:'center',
        color:'white'
    },
    blueContainer:{
        height:50,
        backgroundColor:'#00a9ff',
        justifyContent:'center',
        alignItems:'center',
        color:'white'
    }
});

export default SnapchatV2;