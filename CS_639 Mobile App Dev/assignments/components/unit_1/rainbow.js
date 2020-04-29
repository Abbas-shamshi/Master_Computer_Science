import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';


export class Rainbow extends Component {
    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.colorContainer1}>
                
                </View>
                <View style={styles.colorContainer2}>
                
                </View>
                <View style={styles.colorContainer3}>
                
                </View>
                <View style={styles.colorContainer4}>
                
                </View>
                <View style={styles.colorContainer5}>
                
                </View>
                <View style={styles.colorContainer6}>
                
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF0000',
    },
    colorContainer1:{
        width:400,
        height:57.14,
        backgroundColor:'#9400D3'
    },
    colorContainer2:{
        width:400,
        height:57.14,
        backgroundColor:'#4B0082'
    },
    colorContainer3:{
        width:400,
        height:57.14,
        backgroundColor:'#0000FF'
    },
    

    colorContainer4:{
        width:400,
        height:57.14,
        backgroundColor:'#00FF00'
    },
    colorContainer5:{
        width:400,
        height:57.14,
        backgroundColor:'#FFFF00'
    },
    colorContainer6:{
        width:400,
        height:57.14,
        backgroundColor:'#FF7F00'
    }
});

export default Rainbow;