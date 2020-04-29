import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Button, Alert, TextInput, TouchableHighlight } from 'react-native';


export class Venmov2 extends Component {
    state = {
        balValue: '$0.00',
    };



    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.container1}>
                    <Text>Transfer Balance</Text>
                </View>
                
                 <View style={styles.container2}>
                    
                    <Text style={styles.paragraph1}>
                        Amount
                    </Text>
                    
                    <View style={styles.value}>
                    
                        <TextInput style={styles.balValue}
                        value={this.state.balValue}
                        onChangeText={(balValue)=>this.setState({balValue})}
                            
                        />
                    </View>
                    
                        
                    <Text style={styles.paragraph3}>
                        Your Venmo balance is $20.00
                    </Text>
                    
                </View>
                
                <View style={styles.touchableButton}>
                
                    <View style={styles.touchableButton1}>
                     
                        <Text style={styles.paragraphBottom1}>
                        Debit Card
                        </Text>
                        <Text style={styles.paragraphBottom2}>
                        $0.25 Fee >
                        </Text>
                    </View>
                    
                    <TouchableHighlight
                        onPress={() => {
                            alert(this.state.balValue+' Dollars has been sent')
                        }}
                    >
                    <View style={styles.touchableButton2}>
                       <Text> Next</Text>
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
    container1:{
        backgroundColor:'#0099cc',
        height:40,
        color:'white',
        justifyContent:'center',
        alignItems:'center'
    },
    container2:{
        
        height:260,
        color:'black',
        justifyContent:'center',
        alignItems:'center'
    },
    touchableButton: {
        
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    touchableButton1: {
        backgroundColor: 'white',
        height: 40,
        width:200,
        borderColor: 'gray',
        borderWidth: 1,
        alignItems: 'center',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    touchableButton2:{
        backgroundColor: '#0099cc',
        height: 40,
        width:200,
        marginTop:10,
        alignItems: 'center',
        justifyContent:'space-around',
        color:'white'
    },
    paragraph1:{
        fontWeight:'bold',
        fontSize:20
    },
    paragraph2:{
        fontWeight:'bold',
        fontSize:50
    },
    paragraph3:{
        
     fontSize:15,
        marginTop:5
    },
    balValue:{
        fontSize:40,
        fontWeight:'bold',
        textAlign:'center'

    }
    
});

export default Venmov2;