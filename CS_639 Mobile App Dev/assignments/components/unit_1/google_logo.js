import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';


export class Google extends Component {
    render() {
        return (
            <View style={styles.container}>
                
                <Text style={styles.paragraph1}>
                    G
                </Text>
                
                <Text style={styles.paragraph2}>
                    o
                </Text>
                
                <Text style={styles.paragraph3}>
                    o
                </Text>
                
                <Text style={styles.paragraph4}>
                    g
                </Text>
                
                <Text style={styles.paragraph5}>
                    l
                </Text>
                
                <Text style={styles.paragraph6}>
                    e
                </Text>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        fontFamily:'Arial',
        fontWeight:'bold',
        
        },
        paragraph1:{
            color:'blue',
            fontSize:50
        },
        paragraph2:{
            color:'red',
            fontSize:50
        },
        paragraph3:{
            color:'gold',
            fontSize:50
        },
        paragraph4:{
            color:'blue',
            fontSize:50
        },
        paragraph5:{
            color:'green',
            fontSize:50
        },
        paragraph6:{
            color:'red',
            fontSize:50
        }
        
});

export default Google;