import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Dimensions } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
export class Flag2 extends Component {
    render() {
        return (
            <View style={styles.container}>

            <View style={styles.top}>
                <View style={styles.orange}>
                </View>
                <View style={styles.white}>
                </View>
                <View style={styles.green}>
                </View>    
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
    top: {
        height: deviceHeight, 
        flexDirection: 'row',
    },

    orange: {
        height: deviceHeight,
        width: deviceWidth/3,
        backgroundColor: 'orange',
    },
    white: {
        height: deviceHeight,
        width: deviceWidth/3,
        backgroundColor: 'white',
    },
    green: {
        height: deviceHeight,
        width: deviceWidth/3,
        backgroundColor: 'green',
    },
    
});

export default Flag2;