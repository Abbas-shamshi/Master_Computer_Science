import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';

    let deviceHeight = Dimensions.get('window').height;
    let deviceWidth = Dimensions.get('window').width;
export class Counter extends Component {
    
    
    state = {
        count: 0,
    };
        
    increaseCounter = () => {
        this.setState({ 
            count: this.state.count + 1,
        })
    };
    
    decreaseCounter = () => {
        this.setState({
            count:this.state.count - 1,
        })
    };
    
    render() {
        return (
            <View style={styles.container}>
                
               
                <TouchableHighlight
                    onPress={this.increaseCounter}
                >
                <View style={styles.size}>
                    <Text style={styles.siz}>
                        Increase
                    </Text>
                </View>
                </TouchableHighlight>
                
                <View style={styles.counter}>
                    <Text style={styles.siz}>
                        {this.state.count}
                    </Text>
                </View>
                
                <TouchableHighlight
                    onPress={this.decreaseCounter}
                >
                <View style={styles.size}>
                    <Text style={styles.siz}>
                        Decrease
                    </Text>
                </View>
                </TouchableHighlight>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    counter:{
        backgroundColor:'green',
        height:200,
        justifyContent:'center',
        alignItems:'center',
        width:deviceWidth
    },
    size:{
        backgroundColor:'red',
        height:deviceHeight/4,
        justifyContent:'center',
        alignItems:'center',
        width:deviceWidth,
        
    },
    siz:{
        color:'white',
        fontSize:deviceHeight/18
    }
    
});

export default Counter;