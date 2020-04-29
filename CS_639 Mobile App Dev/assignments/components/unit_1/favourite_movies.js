import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';


export class Fav_Movies extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.titleText}>
                    My Favourite Movies
                </Text>
                
                <Text style={styles.paragraph}>
                    1.The Incredibles
                </Text>
                
                <Text style={styles.paragraph}>
                    2.Wall-e
                </Text>
                
                <Text style={styles.paragraph}>
                    3.Toy Story 3
                </Text>
                
                <Text style={styles.paragraph}>
                    4.Coco
                </Text>
                
                <Text style={styles.paragraph}>
                    5.Up
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    titleText:{
        fontSize:30,
        fontWeight:'bold',
        color:'red',
        textAlign:'center'
    },
    paragraph:{
        fontSize:25,
        color:'blue'
    }
});

export default Fav_Movies;