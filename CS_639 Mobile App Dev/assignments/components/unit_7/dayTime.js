import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image,Dimensions, TouchableHighlight, ImageBackground } from 'react-native';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
export class DayTime extends Component {
    
    state = {
        backgroundToDisplay: ['http://papers.co/wallpaper/papers.co-me72-dusk-red-new-york-skyline-city-34-iphone6-plus-wallpaper.jpg','https://spliffmobile.com/download/new-york-5896.jpg','https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/new-york-city-empire-state-building-sunset-christopher-arndt.jpg'],
        index:0,
        message:['Good Morning','Good AfterNoon','Good Evening'],
    }
    
    selectBackground = (timeOfDay) => {
        {
            if (timeOfDay == 'morning') {
                this.setState({ 
                    index:0,
                })
            } else if (timeOfDay == 'afternoon') {
                this.setState({ 
                    index: 1,

                })
            } else if (timeOfDay == 'evening') {
                this.setState({ 
                    index: 2,
                    

                })
            }
        }
        
    }
    
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.background}
                    source={{uri:this.state.backgroundToDisplay[this.state.index]}}
                >
                
                    <TouchableHighlight
                        onPress={() => this.selectBackground('morning')}
                    >
                        <View style={styles.buttonView}>
                            <Text style={styles.buttonText}>
                                Good morning!
                            </Text>
                        </View>
                    </TouchableHighlight>
                    
                    <TouchableHighlight
                        onPress={() => this.selectBackground('afternoon')}
                    >
                        <View style={styles.buttonView}>
                            <Text style={styles.buttonText}>
                                Good afternoon!
                            </Text>
                        </View>
                    </TouchableHighlight>
                    
                    <TouchableHighlight
                        onPress={() => this.selectBackground('evening')}
                    >
                        <View style={styles.buttonView}>
                            <Text style={styles.buttonText}>
                                Good evening!
                            </Text>
                        </View>
                    </TouchableHighlight>

                    <View style={styles.messageContainer}>
                        <Text style={styles.messageText}>
                            {this.state.message[this.state.index]}
                        </Text>
                    </View>
                
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
    },
    buttonView: {
        height: 30,
        width: 100,
        backgroundColor: 'black',
        justifyContent: 'center',
        marginBottom: 3,
    },
    buttonText: {
        fontSize: 10, 
        color: 'white',
        textAlign: 'center',
    },
    messageContainer:{
        height:(5*deviceHeight)/5,
        alignItems:'center',
        justifyContent:'center',
    },
    messageText:{
        color:'white',
        fontSize:deviceHeight/40,
    }
});
export default DayTime;