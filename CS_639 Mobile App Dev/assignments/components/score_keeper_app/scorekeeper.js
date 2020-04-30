
import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TextInput, TouchableHighlight, ImageBackground, Dimensions } from 'react-native';


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;


export class ScoreKeeper extends Component {
    
    state = {
        teamA: 'Team 1',
        teamB: 'Team 2',
        scoreA:'0',
        scoreB:'0',
        inputValue: 'You can change me!',
        result:'',
        teamDisplay:'flex',
        teamRSVP:'none',
    };



    teamAadd3 = () => {
    this.setState({
        scoreA: parseInt(this.state.scoreA) + 4,
    })
};
    teamAadd5 = () => {
        this.setState({scoreA: parseInt(this.state.scoreA) + 6 })
    }
    teamBadd3 = () => {
        this.setState({scoreB: parseInt(this.state.scoreB) + 4 })
    }
    teamBadd5 = () => {
        this.setState({scoreB: parseInt(this.state.scoreB) + 6 })
    }

    changeTeamA=teamA=>{
        this.setState({teamA})
    }
    changeTeamB=teamB=>{
        this.setState({teamB})
    }
    showRSVP=()=>this.setState(state=>({
        teamDisplay:'none',
        teamRSVP:'flex',
    }));
    showRespond=()=>this.setState(state=>({
        teamDisplay:'flex',
        teamRSVP:'none',
    }));

    render() {
        return (
            <View style={styles.container}>
                
            
                <View style={styles.contentContainer}>
                
                
                <ImageBackground
                    style={styles.background}
                    source={{ uri: 'https://static3.bigstockphoto.com/2/3/2/large1500/232229215.jpg' }}
                >
                <View style={{display:this.state.teamDisplay}}>
                    <View style={styles.headContainer}>
                    
                        <Text style={styles.headText}>
                        Cricket ScoreKeeper
                        </Text>
                    </View>
               
                    <View style={styles.teams}>
                    
                        <View style={styles.teamHead}>
                        
                            <Text style={styles.teamHeadText}>
                                Team Names
                            </Text>
                        </View>
                        
                        <View style={styles.teamInputs}>
                        
                            <TextInput style={styles.teamNames}
                                value={this.state.teamA}
                                onChangeText={this.changeTeamA}
                                
                            />
                            
                            <TextInput style={styles.teamNames}
                                value={this.state.teamB}
                                onChangeText={this.changeTeamB}
                                
                            />
                        </View>
                    
                    </View>
                    </View>
               <View style={{display:this.state.teamRSVP}}>
                <View style={styles.headContainer}>
                    
                        <Text style={styles.headText}>
                        Cricket ScoreKeeper
                        </Text>
                    </View>
                <View style={styles.buttonContainer}>
                
                    
                    <View style={styles.button}>
                    
                        <TouchableHighlight
                            onPress={this.teamAadd5}
                        >
                            <View style={styles.buttonTextContainer}>
                                <Text style={styles.buttonText}>
                                    {this.state.teamA}
                                </Text>
                                <Text style={styles.buttonText}>
                                Add 6
                                </Text>
                            </View>
                        
                        </TouchableHighlight>
                        
                    </View>
                    <View style={styles.button}>
                    
                        <TouchableHighlight
                            onPress={this.teamAadd3}
                        >
                        <View style={styles.buttonTextContainer}>
                                <Text style={styles.buttonText}>
                                    {this.state.teamA}
                                </Text>
                                <Text style={styles.buttonText}>
                                Add 4
                                </Text>
                            </View>
                        </TouchableHighlight>
                        
                    </View>
                </View>
                
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <TouchableHighlight
                            onPress={this.teamBadd5}
                        >
                        <View style={styles.buttonTextContainer}>
                                <Text style={styles.buttonText}>
                                    {this.state.teamB}
                                </Text>
                                <Text style={styles.buttonText}>
                                Add 6
                                </Text>
                        </View>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.button}>
                    <TouchableHighlight
                    onPress={this.teamAadd3}>
                        <View style={styles.buttonTextContainer}>
                                <Text style={styles.buttonText}>
                                    {this.state.teamB}
                                </Text>
                                <Text style={styles.buttonText}>
                                Add 4
                                </Text>
                        </View>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.scoreBoard}>
                
                    <View style={styles.scoreTitle}>
                    
                        <Text style={styles.scoreTitleText}>
                        Score Board
                        </Text>
                        <View style={styles.scoreValueContainer}>
                            <Text style={styles.scoreValue}>
                                {this.state.teamA} : {this.state.scoreA}
                            </Text>
                            <Text style={styles.scoreValue}>
                                {this.state.teamB} : {this.state.scoreB}
                            </Text>
                        </View>
                        
                    </View>
                </View>    
                </View>
                
            
                
                </ImageBackground>
                
                
                </View>
                <View style={styles.navContainer}>
                
                    <TouchableHighlight
                        onPress={this.showRespond}
                    >
                    
                        <View style={styles.navButton}>
                        
                            <Text style={styles.navtext}>
                            Teams
                            </Text>
                            
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={this.showRSVP}
                    >
                    
                        <View style={styles.navButton}>
                        
                            <Text style={styles.navtext}>
                            Score
                            </Text>
                            
                        </View>
                    </TouchableHighlight>
                    
                
                </View>
            </View>
      );
   }
}

const styles = StyleSheet.create({
    container: {
        height:deviceHeight,
        width:deviceWidth,
        justifyContent:'flex-start',
        
    },
    navContainer:{
        flexDirection:'row',
        height:deviceHeight/6,
        backgroundColor:'green',
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
        backgroundColor:'#90ee90',
        borderWidth:2,
        borderColor:'white',
        alignItems:'center',
        height:deviceHeight/12,
        marginBottom:15,
        
    },
    navtext:{
        fontSize:deviceHeight/26,
    },
    contentContainer:{
        height:(7*deviceHeight)/8,
    },
    
    headContainer:{
        marginBottom:10,
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:6,
        borderColor:'red',
        backgroundColor:'green',
        height:deviceHeight/5,
        width:deviceWidth,
    },
    headText:{
        fontSize:33,
        color:'white',
    },
    teams:{
        alignItems:'center',
    },
    teamHead:{
      marginTop:20,  
    },
    teamHeadText:{
        color:'white',
        fontSize:26,
    },
    teamNames:{
        width: 200,
        height: 44,
        padding: 8,
        backgroundColor:'#90ee90',
        marginTop:20,
        fontSize:20,
    },
    title: {
        color: 'black',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    paragraph: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        
        alignItems:'center',
        justifyContent:'center',
    },
    button: {
        height:deviceHeight/8,
        width:deviceWidth/2.5,
        
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        backgroundColor:'#90ee90',
        
    },
    buttonText: {
        color: 'black',
        fontSize: deviceHeight/26,
        textAlign: 'center',

    },
    inputTeam:{
        borderWidth:1,
        height:40,
        width:140,
        fontSize:deviceHeight/24,
        
        color:'red',

        
    },
    buttonContainerScore:{
        flexDirection: 'row',
        
        alignItems:'center',
        
        marginTop:20,
        
    },
    score:{
        marginLeft:10,
        fontSize:deviceHeight/24,
        color:'red',
        fontWeight:'bold',
    },
    background:{
        width:deviceWidth,
        height:deviceHeight,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    scoreBoard:{
        height:deviceHeight/4,
        width:5*(deviceWidth)/6,
        backgroundColor:'white',
        margin:'auto',
        marginTop:20,
        marginBottom:60,
    },
    scoreTitle:{
        
        justifyContent:'center',
        alignItems:'center',
    },
    scoreTitleText:{
        fontSize:deviceHeight/16,
    },
    scoreValue:{
        fontSize:deviceHeight/20,
    },
    scoreValueContainer:{
        marginTop:20,
    }
});

export default ScoreKeeper;