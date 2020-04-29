import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TextInput, Button, Alert, TouchableHighlight, Image } from 'react-native';

export class GoogleV3 extends Component {
    state = {
        inputValue: ''
    };

    _handleTextChange = inputValue => {
        this.setState({ inputValue });
    };

    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.gooleLogo}>
                    
                
                    <Image
                        source={{ uri: 'https://codehs.com/uploads/b61b04781980ec2d29f8083d531cc5f8' }}
                        style={{ height: 100, width: 250 }}
                    />
                </View>
                
                <View style={styles.searchContainer}>
                
                    <TextInput style={styles.googleForm}
                        value={this.state.inputValue}
                        onChangeText={(inputValue)=>this.setState({inputValue})}
                        
                    />
                
                   
                    <Image style={styles.searchImage}
                        source={{ uri: 'https://codehs.com/uploads/55c6938d3d45ecfb8a32916545f27306 ' }}
                        
                    />
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
        gooleLogo:{
            flexDirection:'row',
            alignItems:'center',
            height:200,
        },
        
        googleForm:{
            borderWidth: 1,

            height: 30,
        width: 250,
        fontSize: 15,
        borderColor: '#a19f9d',
        borderRadius: 20,
        marginBottom:15,
        marginLeft:30,
        
        
        },
        searchContainer:{
            flexDirection:'row',
            justifyContent:'center',
        },
        searchImage:{
            height:30,
            width:30,
            borderBottomRightRadius:28,
            borderTopRightRadius:28,
            backgroundColor:'blue',
            left:-30
        }
        
        
        
});

export default GoogleV3;