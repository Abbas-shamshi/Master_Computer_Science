import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, AppRegistry, TouchableHighlight } from 'react-native';


export class Music_Player extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.topText}>
                    Your Top Songs 2020
                </Text>
                
                <View style={styles.imageContainer}>
                
                    <Image
                        source={{ uri: 'https://codehs.com/uploads/ac948e46c34633c583729b8f97d22813' }}
                        style={{ height: 275, width: 275 }}
                    />
                </View>
                <Text style={styles.song}>
                    Teri Mitti
                </Text>
                
                <Text style={styles.artist}>
                    Praak
                </Text>
                
                <View style={styles.songTimesContainer}>
                
                    <Text style={styles.time}>
                        0:00
                    </Text>
                    
                    <View style={styles.line}>
                    </View>
                    
                    <Text style={styles.time}>
                        3:42
                    </Text>
                    
                </View>
                
                
                <View style={styles.playerControlsContainer}>
                
                    
                    <TouchableHighlight
                        onPress={() => {
                            alert('Previous Music will be played!')
                        }}
                    >
                    <Image style={styles.playButtons}
                        source={{ uri: 'https://codehs.com/uploads/de00e9c8530c8309d09592b862bc8961' }}
                        
                    />
                    </TouchableHighlight>
                    
                    
                    <TouchableHighlight
                        onPress={() => {
                            alert('Music has been paused!')
                        }}
                    >
                    <Image style={styles.playButtons}
                        source={{ uri: 'https://codehs.com/uploads/ef5b99b661f0a16801d65ea0eeee385a' }}
                        
                    />
                    </TouchableHighlight>
                    
                    
                    <TouchableHighlight
                        onPress={() => {
                            alert('Next Music will be played!')
                        }}
                    >
                    <Image style={styles.playButtons}
                        source={{ uri: 'https://codehs.com/uploads/c6678f1b21a046cab77a2ad4c6280b36' }}
                        
                    />
                    </TouchableHighlight>
                    
                    
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#181818',
    },
    topText: {
        fontFamily: 'Roboto',
        fontSize: 14,
        color: 'white',
        paddingTop: 30,
        paddingBottom: 20,
    },
    song: {
        fontFamily: 'Roboto',
        fontSize: 26,
        color: 'white',
        marginTop: 20,
    },
    artist: {
        fontFamily: 'Roboto',
        fontSize: 15,
        color: '#e9e9e9',
        marginTop: 5,
    },
    songTimesContainer: {
        marginTop: 20,
        flexDirection: 'row',
    },
    time: {
        fontFamily: 'Roboto',
        fontSize: 12,
        color: 'white',
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        width: 200,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    playerControlsContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    arrows: {
        margin: 25,
        height: 20,
        width: 30,
    },
    pause: {
        height: 70,
        width: 70,
    },
    playButtons:{
        height: 50, 
        width: 50,
        marginHorizontal:10,
    }

});

export default Music_Player;