import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TextInput, TouchableHighlight, ImageBackground, Dimensions } from 'react-native';


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;


export class ScoreKeeper extends Component {
   
    state = {
        teamA: 'KC',
        teamB: 'RC',
        scoreA:'0',
        scoreB:'0',
        inputValue: 'You can change me!',
        result:''
    };


   
teamAadd3 = () => {
    this.setState({scoreA: parseInt(this.state.scoreA) + 4 })
}
teamAadd5 = () => {
    this.setState({scoreA: parseInt(this.state.scoreA) + 6 })
}
teamBadd3 = () => {
    this.setState({scoreB: parseInt(this.state.scoreB) + 4 })
}
teamBadd5 = () => {
    this.setState({scoreB: parseInt(this.state.scoreB) + 6 })
}

    render() {
        return (
            <View style={styles.container}>
                
            
                <ImageBackground
                    style={styles.background}
                    source={{ uri: 'https://codehs.com/uploads/72a2c2eae552297d44677b25a7e4cb87' }}
                >
                <View style={styles.buttonContainer}>
                
                    
                    <View style={styles.button}>
                    
                        <TouchableHighlight
                            onClick={this.teamAadd5}
                        >
                        <Text style={styles.buttonText}>
                            {this.state.teamA} Add 6
                        </Text>
                        </TouchableHighlight>
                        
                    </View>
                    <View style={styles.button}>
                    
                        <TouchableHighlight
                            onClick={this.teamAadd3}
                        >
                        <Text style={styles.buttonText}>
                            {this.state.teamA} Add 4
                        </Text>
                        </TouchableHighlight>
                        
                    </View>
                </View>
                
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <TouchableHighlight
                            onClick={this.teamBadd5}
                        >
                        <Text style={styles.buttonText}>
                            {this.state.teamB} Add 6
                        </Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.button}>
                        <TouchableHighlight
                            onClick={this.teamBadd3}
                        >
                        <Text style={styles.buttonText}>
                            {this.state.teamB} Add 4
                        </Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.buttonContainerScore}>
                    <TextInput style={styles.inputTeam}
                        value={this.state.teamA}
                        onChangeText={(teamA)=>this.setState({teamA})}
                        
                    />
                    
                    <Text style={styles.score}>
                    {this.state.scoreA}
                    </Text>
                </View>
                <View style={styles.buttonContainerScore}>
                    
                    <TextInput style={styles.inputTeam}
                        value={this.state.teamB}
                        onChangeText={(teamB)=>this.setState({teamB})}
                    />
                    <Text style={styles.score}>
                    {this.state.scoreB}
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
    
        alignItems:'center'
    },
    button: {
        height:deviceHeight/8,
        width:deviceWidth/2.5,
        
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    buttonText: {
        color: 'black',
        fontSize: deviceHeight/26,
        textAlign: 'center',
        fontWeight:'bold'
    },
    inputTeam:{
        borderWidth:1,
        height:40,
        width:140,
        fontSize:deviceHeight/24,
        fontWeight:'bold',

        
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
        
    }
});

export default ScoreKeeper;