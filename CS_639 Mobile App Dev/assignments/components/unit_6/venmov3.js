import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Button, Alert, TextInput, TouchableHighlight } from 'react-native';

export class VenmoV3 extends Component {
    state = {
        amount: 0.00,
        displayTrasfer:'flex',
        displayreceived:'none',
        trasferStatus:null,
        venmoBal: 15.00,
        trasferMessage:'Amount',
    };
receivedPage=()=>{
    this.setState({
        displayTrasfer:'none',
        displayreceived:'flex',
        })
        if(this.state.venmoBal > this.state.amount){
            this.setState({
                venmoBal:(this.state.venmoBal - this.state.amount - 0.25),
                trasferStatus:'Sucess',
                trasferMessage:'You have successfully sent following amount',
            })
        }else{
             this.setState({
                trasferMessage:'You do not have enought balance',
                trasferStatus:'Failed',
            })
        }
}
trasferPage=()=>{
    this.setState({
        displayTrasfer:'flex',
        displayreceived:'none',
          
        })
}


    render() {
        return (
            <View style={styles.container}>
                <View style={{display:this.state.displayTrasfer}}>
                <View style={styles.container1}>
                    <Text>Transfer Balance</Text>
                </View>
                
                 <View style={styles.container2}>
                    
                    <Text style={styles.paragraph1}>
                        {this.state.trasferMessage}
                    </Text>
                    
                    <View style={styles.value}>
                    
                        <TextInput style={styles.balValue}
                        value={this.state.amount}
                        onChangeText={(amount)=>this.setState({amount})}
                            
                        />
                    </View>
                    
                        
                    <Text style={styles.paragraph3}>
                        Your Venmo balance is ${this.state.venmoBal}
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
                        onPress={this.receivedPage}
                    >
                    <View style={styles.touchableButton2}>
                        <Text>Transfer</Text>
                    </View>
                    </TouchableHighlight>
                    
                </View>
                </View>
                <View style={{display:this.state.displayReceived}}>
                <View style={styles.container1}>
                    <Text>{this.state.trasferStatus}</Text>
                </View>
                
                 <View style={styles.container2}>
                    
                    <Text style={styles.paragraph1}>
                        {this.state.trasferMessage}
                    </Text>
                    
                    <View style={styles.value}>
                    
                        <Text style={styles.balValue}>
                        {this.state.amount}
                        </Text>
                        
                    </View>
                    
                        
                    <Text style={styles.paragraph3}>
                        Your Venmo balance is ${this.state.venmoBal}
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
                        onPress={this.trasferPage}
                    >
                    <View style={styles.touchableButton2}>
                        <Text>Back</Text>
                    </View>
                    </TouchableHighlight>
                    
                </View>
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
        textAlign:'center',
        marginHorizontal:'auto',

    },
    value:{
        alignItems:'center',
        justifyContent:'center',
        
    }
    
});

export default VenmoV3;