import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';

export class Nested extends Component {
    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.container1}>
                    <View style={styles.container2}>
                        <View style={styles.container3}>
                            <View style={styles.container4}>
                                <View style={styles.container5}>
                
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red',
    },
    container1: {
       width:200,
       height:200,
       justifyContent:'center',
        alignItems:'center',
        backgroundColor:'blue',
    },
    container2: {
       width:160,
       height:160,
       justifyContent:'center',
        alignItems:'center',
        backgroundColor:'green',
    },
    container3: {
       width:120,
       height:120,
       justifyContent:'center',
        alignItems:'center',
        backgroundColor:'grey',
    },
    container4: {
       width:80,
       height:80,
       justifyContent:'center',
        alignItems:'center',
        backgroundColor:'brown',
    },
    container5: {
       width:40,
       height:40,
       justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
    },
});

export default Nested;