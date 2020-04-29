import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';


export class Snapchat extends Component {
    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.yellowContainer}>
                
                </View>
                
                <View style={styles.redContainer}>
                    <Text>LOG IN</Text>
                </View>
                
                <View style={styles.blueContainer}>
                    <Text>SIGN UP</Text>
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
        height:300,
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

export default Snapchat;