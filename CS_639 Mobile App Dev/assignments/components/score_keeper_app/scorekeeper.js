import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TextInput, TouchableHighlight } from 'react-native';

export class ScoreKeeper extends Component {
   constructor(props) {
    super(props);
    this.teamAadd3 = this.teamAadd3.bind(this);
    this.teamAadd5 = this.teamAadd5.bind(this);
    this.teamBadd3 = this.teamBadd3.bind(this);
    this.teamBadd5 = this.teamBadd5.bind(this);
  }
    state = {
        teamA: 'KC',
        teamB: 'RC',
        scoreA:'10',
        scoreB:'4',
        inputValue: 'You can change me!',
        result:''
    };


   
teamAadd3(){
    this.setState({scoreA: parseInt(this.state.scoreA) + 4 })
}
teamAadd5(){
    this.setState({scoreA: parseInt(this.state.scoreA) + 6 })
}
teamBadd3(){
    this.setState({scoreB: parseInt(this.state.scoreB) + 4 })
}
teamBadd5(){
    this.setState({scoreB: parseInt(this.state.scoreB) + 6 })
}

    render() {
        return (
            <View style={styles.container}>
                
            
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
                
            </View>
      );
   }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
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
        height: 50,
        width: 90,
        
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    buttonText: {
        color: 'black',
        fontSize: 12,
        textAlign: 'center',
        fontWeight:'bold'
    },
    inputTeam:{
        borderWidth:1,
        height:40,
        width:140,

        
    },
    buttonContainerScore:{
        flexDirection: 'row',
    
        alignItems:'center',
        marginTop:20,
    },
    score:{
        marginLeft:10,
    }
});

export default ScoreKeeper;