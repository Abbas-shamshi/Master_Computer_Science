import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, ImageBackground } from 'react-native';


export class Mobile_Resume extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.profilePic}>
                
                    <ImageBackground
                        style={styles.background}
                        source={{ uri: 'https://codehs.com/uploads/7bf88d3a3e903e4c357273278c33874e' }}
                    >
                    
                        <View style={styles.profileNameContainer}>
                            <Text style={styles.profileName}>
                                Abbas Shamshi
                            </Text>
                        </View>
                        
                    </ImageBackground>
                </View>
                
                <View style={styles.profileDetails}>
                
                    <Text style={styles.details}>
                        University: Pace University
                    </Text>
                    <Text style={styles.details}>
                    Work Experience: Worked as a web developer
                    </Text>
                    <Text style={styles.details}>
                    Hobbies: Reading, Trekking
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'lightblue',
    },
    profilePic:{
        alignItems:'center',
    },
    background:{
        marginTop:20,
        height:260,
        width:260,
        borderWidth:10,
        borderColor:'#2f6683',
    },
    profileNameContainer:{
        justifyContent:'flex-end',
        alignItems:'center',
        height:240,
        
        
    },
    profileName:{
        color:'red',
        fontSize:25,
        color:'rgb(147, 218, 255)',
        
    },
    profileDetails:{
        marginHorizontal: 25,
        color:'#2f6683',
        fontWeight:'bold',
        
    },
    details:{
        fontSize:20,
        marginTop:25,
    }
});

export default Mobile_Resume;