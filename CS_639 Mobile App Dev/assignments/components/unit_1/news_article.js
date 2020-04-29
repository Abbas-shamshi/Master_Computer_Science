import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';


export class News extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.paragraphTitle}>
                    Uber claims top spot in Indian ride-hailing market
                </Text>
                
                <Text style={styles.paragraphAuthor}>
                    Manish Singh
                </Text>
                
                <Text style={styles.paragraph}>
                    An Uber spokesperson told TechCrunch that the company plans to expand from about 50 Indian cities where it currently operates to 200 in the country by the end of the year. It will focus on onboarding two-wheelers and three-wheelers in many of these cities, the firm said..
                    Uber facilitated 14 million rides a week in India last year, the American ride-hailing firm said as it claimed the tentpole position in the key overseas market.
                </Text>
                
                <Text style={styles.paragraphSource}>
                Source: https://techcrunch.com/2020/02/08/uber-claims-top-spot-in-indian-ride-hailing-market/
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        marginTop:40,
        padding:10,
   
    },
    paragraphTitle: {
        fontSize:28,
        fontWeight: 'bold',
        textAlign:'center'
    },
    paragraphAuthor: {
        fontSize:14,
        textAlign:'center',
        margin:10
    },
    paragraph: {
        fontSize:18,
        textAlign:'center',
        margin:10,
        textAlign:'justify',
        
    },
    paragraphSource: {
         fontSize:14,
        textAlign:'left',
        margin:10,
        fontStyle:'italic'
    },
});

export default News;