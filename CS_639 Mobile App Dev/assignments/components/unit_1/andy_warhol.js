import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';


export class Andy extends Component {
    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.containe}>
                
                    <View style={styles.container1}>
                    
                        <View style={styles.containerSmall1}>
                        
                        </View>
                    </View>
                    <View style={styles.container2}>
                        <View style={styles.containerSmall2}>
                        
                        </View>
                    </View>
                </View>
                
                <View style={styles.containe}>
                    <View style={styles.container3}>
                        <View style={styles.containerSmall3}>
                        
                        </View>
                    </View>
                    <View style={styles.container4}>
                        <View style={styles.containerSmall4}>
                        
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
        alignItems:'center'
    },
    containe:{
        flexDirection:'row',
    },
    container1:{
        backgroundColor:'red',
        width:100,
        height:100,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    container3:{
        backgroundColor:'yellow',
        width:100,
        height:100,
        justifyContent:'center',
        alignItems:'center',
    },
    container2:{
        backgroundColor:'blue',
        width:100,
        height:100,
        justifyContent:'center',
        alignItems:'center',
    },
    container4:{
        backgroundColor:'green',
        width:100,
        height:100,
        justifyContent:'center',
        alignItems:'center',
    },
    containerSmall1:{
        backgroundColor:'blue',
        width:50,
        height:50,
    },
    containerSmall2:{
        backgroundColor:'yellow',
        width:50,
        height:50,
    },
    containerSmall3:{
        backgroundColor:'green',
        width:50,
        height:50,
    },
    containerSmall4:{
        backgroundColor:'red',
        width:50,
        height:50,
    }
});

export default Andy;