
import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, Dimensions, Image } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
let fontSize = 22;
export class RSVP extends Component {
    state={
   
        respond:'flex',
        rsvp:'none',
        yes:'0',
        no:'0',
        size:22,
    }
    
   
    showRespond=()=>this.setState(state=>({
        respond:'flex',
        rsvp:'none',
        
    }));
    showRSVP=()=>this.setState(state=>({
         respond:'none',
        rsvp:'flex',
        
    }));
    plus1=()=>this.setState(state=>({
        yes: parseInt(this.state.yes)+1, 
        
        
    }));
    notComing=()=>this.setState(state=>({
         no: parseInt(this.state.no)+1,
        
    }));
    
    
    render() {
        return (
            <View style={styles.container}>

                
                <View style={styles.navContainer}>
                
                    <TouchableHighlight
                        onPress={this.showRespond}
                    >
                    
                        <View style={styles.navButton}>
                        
                            <Text style={styles.navtext}>
                            Respond
                            </Text>
                            
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={this.showRSVP}
                    >
                    
                        <View style={styles.navButton}>
                        
                            <Text style={styles.navtext}>
                            RSPV
                            </Text>
                            
                        </View>
                    </TouchableHighlight>
                    
                
                </View>
                
                <View style={styles.contentContainer}>
                
                    
                    <View style={{display:this.state.respond}}>
                        <View style={styles.detailsContainer}>
                            <View style={styles.headHobbies}>
                               <Text>Birthday Party     </Text> 
                            </View>
                            <View style={styles.textHobbiesContainer}>
                                <Text style={styles.textHobbies}>
                                    When: 10/10/2020
                                </Text>
                                <Text style={styles.textHobbies}>
                                    Time: 9
                                </Text>
                                <Text style={styles.textHobbies}>
                                    Where: Hopkins ave
                                </Text>
                            
                            </View>
                            <View style={styles.buttons}>
                                <TouchableHighlight
                                   onPress={this.plus1}
                                    >
                    
                                    <View style={styles.navButton}>
                        
                                        <Text style={styles.navtext}>
                                            Yes.
                                        </Text>
                            
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight
                                onPress={this.notComing}
                                >
                    
                                    <View style={styles.navButton}>
                        
                                        <Text style={styles.navtext}>
                                            No.
                                        </Text>
                            
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>
                        
                    </View>
                    <View style={{display:this.state.rsvp}}>
                        <View style={styles.detailsContainer}>
                        <View style={styles.headHobbies}>
                            <Text>RSVP TRACKER</Text>
                            </View>
                            <View style={styles.textHobbiesContainer}>
                                <Text style={styles.textHobbies}>
                                    - People Coming to the party: {this.state.yes}
                                </Text>
                                <Text style={styles.textHobbies}>
                                    - People Coming to the party: {this.state.no}
                                </Text>
                                
                            
                            
                            
                            </View>
                            
                        </View>
                    </View>
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
    },
    navContainer:{
        flexDirection:'row',
        height:deviceHeight/6,
        backgroundColor:'blue',
        alignItems:'center',
        justifyContent:'space-evenly',
        borderBottomWidth:10,
        borderColor:'white',
    },
    navButton:{
        width:deviceWidth/3,
        alignItems:'center',
        justifyContent:'center',
        width:deviceWidth/3.5,
        backgroundColor:'#add8e6',
        borderWidth:2,
        borderColor:'white',
        alignItems:'center',
        height:deviceHeight/12,
        
        
    },
    contentContainer:{
        height:(5*deviceHeight)/6,
        backgroundColor:'#add8e6',
    },
    headNameContainer:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'blue',
        color:'white',
        
    },
    headNameText:{
        fontSize: fontSize,
        fontWeight:'bold',
    },
    detailsContainer:{
        alignItems:'center',
        justifyContent:'center',
        height:(5*deviceHeight)/6,
        width:deviceWidth,
    },
    detailInfoContainer:{
        marginTop:20,
        marginHorizontal:10,
    },
    infoText:{
        fontSize:20,
        color:'brown',
    },
    headHobbies:{
        fontSize:25,
        color:'red',
        fontWeight:'bold',
    },
    textHobbiesContainer:{
        marginTop:20,
    },
    textHobbies:{
        fontSize:16,
        color:'brown',
        marginHorizontal:20,
        color:'red',
    },
    buttons:{
        marginTop:30,
        
        width:deviceWidth,
        backgroundColor:'blue',
        flexDirection:'row',
        height:deviceHeight/6,
        alignItems:'center',
        justifyContent:'space-evenly',
        borderTopWidth:6,
        borderBottomWidth:6,
        borderColor:'red',
        
    }
    
});

export default RSVP;