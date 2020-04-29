import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight } from 'react-native';


export class NewsV2 extends Component {
    render() {
        return (
            <View style={styles.container}>

                <TouchableHighlight
                    onPress={() => {
                        alert('Author is Manish Singh!')
                    }}
                >
                <Text style={styles.paragraphTitle}>
                    Uber claims top spot in Indian ride-hailing market
                </Text>
                
                </TouchableHighlight>
                
                <TouchableHighlight
                    onPress={() => {
                        alert('https://techcrunch.com/2020/02/08/uber-claims-top-spot-in-indian-ride-hailing-market/')
                    }}
                >
                <Text style={styles.paragraph}>
                    An Uber spokesperson told TechCrunch that the company plans to expand from about 50 Indian cities where it currently operates to 200 in the country by the end of the year. It will focus on onboarding two-wheelers and three-wheelers in many of these cities, the firm said..
                    Uber facilitated 14 million rides a week in India last year, the American ride-hailing firm said as it claimed the tentpole position in the key overseas market.
                </Text>
                
                
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    paragraphTitle: {
        fontSize:28,
        fontWeight: 'bold',
        textAlign:'center'
    },
    paragraph: {
        fontSize:18,
        textAlign:'center',
        margin:10,
        textAlign:'justify',
    }
});

export default NewsV2;