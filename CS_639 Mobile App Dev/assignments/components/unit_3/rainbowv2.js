import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Dimensions } from 'react-native';


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export class RainbowV2 extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.red}>
                
                </View>
                <View style={styles.orange}>
                
                </View>
                <View style={styles.yellow}>
                
                </View>
                <View style={styles.green}>
                
                </View>
                <View style={styles.blue}>
                
                </View>
                <View style={styles.indigo}>
                
                </View>
                <View style={styles.violet}>
                
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
    red:{
        flex:deviceHeight/7,
        backgroundColor:'red',
    },
    orange:{
        flex:deviceHeight/7,
        backgroundColor:'orange',
    },
    yellow:{
        flex:deviceHeight/7,
        backgroundColor:'yellow',
    },
    green:{
        flex:deviceHeight/7,
        backgroundColor:'green',
    },
    blue:{
        flex:deviceHeight/7,
        backgroundColor:'blue',
    },
    indigo:{
        flex:deviceHeight/7,
        backgroundColor:'indigo',
    },
    violet:{
        flex:deviceHeight/7,
        backgroundColor:'violet',
    },
});

export default RainbowV2;