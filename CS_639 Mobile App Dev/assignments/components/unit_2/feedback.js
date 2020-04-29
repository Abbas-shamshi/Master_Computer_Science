import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, TextInput } from 'react-native';

export class Feedback extends Component {
    state = {
        nameValue:'abbas',
        dateValue:'mm/dd/yyyy',
        feedbackMessage:','
    };




    render() {
        return (
            <View style={styles.container}>

                <View style={styles.feedbackContainer}>
                
                    <Text style={styles.feedbackParagraph}>
                    Feedback Form
                    </Text>
                </View>
                
                <View style={styles.row}>
                
                    <Text style={styles.formText}>
                    Name: 
                    </Text>
                    
                    <TextInput style={styles.formInput}
                        value={this.state.nameValue}
                        onChangeText={(nameValue)=>this.setState({nameValue})}
                        
                    />
                </View>
                <View style={styles.row}>
                
                    <Text style={styles.formText}>
                    Date: 
                    </Text>
                    
                    <TextInput style={styles.formInput}
                        value={this.state.dateValue}
                        onChangeText={(dateValue)=>this.setState({dateValue})}
                        
                    />
                </View>
                
                <View style={styles.feedbackTextContainer}>
                
                    <Text style={styles.feedbackTextParagraph}>
                    Feedback:
                    </Text>
                    <TextInput style={styles.feedbackInput}
                    multiline={true}
                        value={this.state.feedbackMessage}
                        onChangeText={(feedbackMessage)=>this.setState({feedbackMessage})}
                        
                    />
                    
                    <View style={styles.feedContainer}>
                        <TouchableHighlight
                        onPress={() => {
                            alert('Entered Name: '+this.state.nameValue+' Entered date: '+this.state.dateValue+' Entered Feedback: '+this.state.feedbackMessage)
                        }}
                    >
                    
                        <Text style={styles.feedbackButton}>
                        Submit
                        </Text>
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
    feedbackContainer:{
        justifyContent:'center',
        alignItems:'center',
        fontWeight:'bold',
        backgroundColor:'#fcd633',
        height:100,
        borderBottomWidth:1,
        
    },
    feedbackParagraph:{
        fontSize:20
    },
    row:{
    flexDirection:'row',    
    margin:8,
    },
    formText:{
        margin:'auto',
        fontWeight:'bold',
        fontSize:16
    },
    formInput:{
        marginLeft:10,
        width:150,
        borderWidth:1,
        height:40,
        backgroundColor:'#fef2c2'
    },
    feedbackTextContainer:{
        height:190,
        marginTop:10,
        
    },
    feedbackTextParagraph:{
        textAlign:'center',
        fontSize:20,
        marginBottom:10,
    },
    feedbackInput:{
        borderWidth:1,
        height:100,
        marginHorizontal:10,
        backgroundColor:'#fef2c2'
    },
    feedbackButton:{
        width:80,
        height:30,
        backgroundColor:'#fcd633',
        color:'black',
        textAlign:'center',
        fontWeight: 'bold',
        paddingTop:5,
        
        
        
    },
    feedContainer:{
        marginRight:10,
        marginTop:8,
        alignItems:'flex-end',
    }
});


export default Feedback;