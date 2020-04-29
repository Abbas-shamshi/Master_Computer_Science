import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';


export class Flag extends Component {
    render() {
        return (
            <View style={styles.container}>
            
                <View style={styles.top}>
                    <View style={styles.topLeft}>
                
                    </View>
                    <View style={styles.topRight}>
                
                    </View>
                 
                </View>
                <View style={styles.bottom}>
                    <View style={styles.bottomLeft}>
                
                    </View>
                    <View style={styles.bottomRight}>
                
                    </View>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#002868',
    },
    top:{
        flex:1,
        flexDirection:'row',
    },
    topRight:{
        flex:1,
        backgroundColor:'red',
        marginLeft:20,
        borderColor:'white',
        borderLeftWidth:12,
        borderBottomWidth:14,
    },
    topLeft:{
        flex:1,
        backgroundColor:'red',
        marginRight:20,
        borderColor:'white',
        borderRightWidth:12,
        borderBottomWidth:14,
    },
    bottom:{
        flexDirection:'row',
        flex:2,
        
    },
    bottomLeft:{
        flex:1,
        backgroundColor:'red',
        marginRight:20,
        borderColor:'white',
        borderRightWidth:12,
        borderTopWidth:14,
        marginTop:30,
    },
    bottomRight:{
        flex:1,
         backgroundColor:'red',
         marginLeft:20,
         marginTop:30,
        borderColor:'white',
        borderLeftWidth:12,
        borderTopWidth:14,
    },
    
});

export default Flag;