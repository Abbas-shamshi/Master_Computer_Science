import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, Dimensions, StyleSheet, Image, TextInput } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export class Saving_Tracker extends Component {
    state = {
        goal:null,
        saved:null,
        moneyLeft:null,
        message:'Enter the saving amount to get you started',
        progressBar:0
        
    }

    calculate = () => {
        this.setState({
            moneyLeft:this.state.goal-this.state.saved,
            progressBar:(this.state.saved/this.state.goal)*((3*deviceWidth)/4),
        })
        if(this.state.saved/this.state.goal == 1){
          this.setState({
            message:'You have reached you goal amount'
        })  
        }else if(this.state.saved/this.state.goal > .7){
          this.setState({
            message:'You are almost there'
        })  
        }else if(this.state.saved/this.state.goal > .5){
            this.setState({
            message:'You have saved more than half of the goal amount'
        }) 
        }
    }

    savingGoal = savingValue => {
        this.setState({ 
            goal:savingValue ,
            message:'You are just getting stated'
            });
    };
    saved = savedValue => {
        this.setState({ saved:savedValue });
    };

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.headContainer}>
                
                    <Text style={styles.headText}>
                        Saving Tracker
                    </Text>
                </View>
                
                <View style={styles.inputsContainer}>
                
                    <View style={styles.goalContainer}>
                    
                        <View style={styles.goalTextContainer}>
                            <Text style={styles.goalText}>
                                Goal : 
                            </Text>
                        </View>
                        
                        <View style={styles.savingContainer}>
                        
                            <TextInput style={styles.inputValue}
                                value={this.state.goal}
                                onChangeText={this.savingGoal}
                                
                            />
                        </View>
                    </View>
                    <View style={styles.goalContainer}>
                    
                        <View style={styles.goalTextContainer}>
                            <Text style={styles.goalText}>
                                Saving : 
                            </Text>
                        </View>
                        
                        <View style={styles.savingContainer}>
                        
                            <TextInput style={styles.inputValue}
                                value={this.state.saved}
                                onChangeText={this.saved}
                                
                            />
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        
                        <TouchableHighlight
                            onPress={this.calculate}
                        >
                        
                        
                        <View style={styles.button}>
                        
                            <Text style={styles.buttonText}>
                                Calculate
                            </Text>
                        </View>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.progressContainer}>
                    
                    <View style={styles.progressBarContainer}>
                    
                        
                        <View style={{backgroundColor:'red',height:deviceHeight/15,width:this.state.progressBar,borderRadius:10,}}>
                        
                        </View>
                    
                    </View>
                    
                    <View style={styles.progressTextContainer}>
                    
                        <Text style={styles.progressText}>
                        You have {this.state.moneyLeft} much amount to save
                        </Text>
                        <Text style={styles.progressText}>
                        {this.state.message}
                        </Text>
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
    headContainer:{
        height:(2*deviceHeight)/10,
        width:deviceWidth,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'green'
    },
    headText:{
        fontSize:deviceHeight/14,
        color:'white',
    },
    inputsContainer:{
        height:(3*deviceHeight)/7,
        width:deviceWidth,
        borderWidth:3,
        borderColor:'black',
    },
    goalContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        marginTop:20,
    },
    goalText:{
        fontWeight:'bold',
    },
    savingContainer:{
        borderWidth:3,
        borderColor:'black',
    },
    inputValue:{
        width:(4*deviceWidth)/8
    },
    buttonContainer:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:30,
    },
    button:{
        height:deviceHeight/14,
        width:(3*deviceWidth)/8,
        backgroundColor:'green',
        borderRadius:5,
        borderColor:'red',
        alignItems:'center',
        justifyContent:'center',
        color:'white',
    },
    buttonText:{
        fontSize:deviceHeight/22
    },
    progressContainer:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'green',
        height:(3*deviceHeight)/9,
        
    },
    progressBarContainer:{
        alignItems:'flex-start',
        justifyContent:'center',
        height:deviceHeight/14,
        width:(3*deviceWidth)/4,
        borderWidth:2,
        borderColor:'black',
        borderRadius:10,
        backgroundColor:'white',
    },
    
    progressTextContainer:{
        alignItems:'center',
        justifyContent:'center',
        
        marginVertical:14,
        marginHorizontal:6,
    },
    progressText:{
        color:'white',
        marginTop:8,
    }
    
    
    
    
});

export default Saving_Tracker;