import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TextInput, Button, Alert, TouchableHighlight } from 'react-native';


export class GoogleV2 extends Component {
    state = {
        inputValue: ''
    };

    _handleTextChange = inputValue => {
        this.setState({ inputValue });
    };

    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.gooleLetters}>
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
                
                <View style={styles.container3}>
                
                    <TextInput style={styles.googleForm}
                        value={this.state.inputValue}
                        onChangeText={(inputValue)=>this.setState({inputValue})}
                        
                    />
                </View>
                
                
                <View style={styles.searchContainer}>
                
                    <TouchableHighlight
                        onPress={() => {
                            alert('You have Searched for: '+this.state.inputValue)
                        }}
                    >
                    
                        <Text style={styles.searchText}>
                        Search
                        </Text>
                    </TouchableHighlight>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        alignItems:'center',
        fontFamily:'Arial',
        fontWeight:'bold',

        },
        gooleLetters:{
            flexDirection:'row',
            alignItems:'center',
            height:200,
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
        },
        googleForm:{
            borderWidth: 1,

            height: 30,
        width: 200,
        fontSize: 15,
        borderColor: '#a19f9d',
        borderRadius: 20,
        marginBottom:15,
        paddingLeft:10
        
        },
        searchText:{
            width:80,
            backgroundColor:'#2449fa',
            paddingVertical:6,
            paddingHorizontal:8,
            fontWeight:'normal',
            color:'white',
            textAlign:'center',
            
        }
        
        
});


export default GoogleV2;