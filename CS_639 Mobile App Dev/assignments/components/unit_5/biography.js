import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, Dimensions, Image } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
let fontSize = 22;
export class Biography extends Component {
    state={
        name:'Dr APJ Abdul Kalam',
        info:'flex',
        work:'none',
        hobbies:'none',
        size:22,
    }
    
    showInfo=()=>{
        this.setState(state=>({
            info:'flex',
            work:'none',
            hobbies:'none',
        }))
    }
    showWork=()=>{
        this.setState(state=>({
            info:'none',
            work:'flex',
            hobbies:'none',
        }))
    }
    showHobbies=()=>{
        this.setState(state=>({
            info:'none',
            work:'none',
            hobbies:'flex',
        }))
    }
    
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.headNameContainer}>
                
                    <Text style={styles.headNameText}>
                    {this.state.name}
                    </Text>
                </View>
                <View style={styles.navContainer}>
                
                    <TouchableHighlight
                        onPress={this.showInfo}
                    >
                    
                        <View style={styles.navButton}>
                        
                            <Text style={styles.navtext}>
                            Home
                            </Text>
                            
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={this.showWork}
                    >
                    
                        <View style={styles.navButton}>
                        
                            <Text style={styles.navtext}>
                            Info
                            </Text>
                            
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={this.showHobbies}
                    >
                    
                        <View style={styles.navButton}>
                        
                            <Text style={styles.navText}>
                            Contact
                            </Text>
                            
                        </View>
                    </TouchableHighlight>
                
                </View>
                
                <View style={styles.contentContainer}>
                
                    <View style={{display:this.state.info}}>
                    
                        <View style={styles.detailsContainer}>
                        
                            <View style={styles.imageContainer}>
                            
                                <Image
                                    source={{ uri: 'https://cdn.britannica.com/56/148856-004-2F59E2D9/APJ-2008.jpg' }}
                                    style={{ height: 240, width: 200 }}
                                />
                            </View>
                            <View style={styles.detailInfoContainer}>
                            
                                <Text style={styles.infoText}>
                                Hometown: Rameswaram, Tamil Nadu
                                </Text>
                                <Text style={styles.infoText}>
                                Birthday: 15 October 1931
                                </Text>
                                <Text style={styles.infoText}>
                                Education: Madras Institute Of Technology
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{display:this.state.work}}>
                        <View style={styles.detailsContainer}>
                        <View style={styles.headHobbies}>
                            <Text>Work Experience</Text>
                            </View>
                            <View style={styles.textHobbiesContainer}>
                                <Text style={styles.textHobbies}>
                                    - DRDO
                                </Text>
                                <Text style={styles.textHobbies}>
                                    - ISRO
                                </Text>
                                <Text style={styles.textHobbies}>
                                    - President of India    
                                </Text>
                            
                            
                            
                            </View>
                        
                        </View>
                    </View>
                    <View style={{display:this.state.hobbies}}>
                        <View style={styles.detailsContainer}>
                        <View style={styles.headHobbies}>
                            <Text>Hobbies</Text>
                            </View>
                            <View style={styles.textHobbiesContainer}>
                                <Text style={styles.textHobbies}>
                                    - Reading
                                </Text>
                                <Text style={styles.textHobbies}>
                                    - Developing
                                </Text>
                                <Text style={styles.textHobbies}>
                                    - Teaching
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
        backgroundColor:'green',
        borderWidth:2,
        borderColor:'white',
        alignItems:'center',
        height:deviceHeight/12,
        
        
    },
    contentContainer:{
        height:(5*deviceHeight)/6,
        backgroundColor:'green',
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
        fontSize:22,
        color:'white',
    },
    textHobbiesContainer:{
        marginTop:20,
    },
    textHobbies:{
        fontSize:20,
        color:'brown',
    }
    
});


export default Biography;