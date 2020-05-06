import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, Dimensions, Image, ImageBackground, DeviceEventEmitter } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export class RoadTrip extends Component {
    state = {
        cities: ['Salt Lake City', 'New York City', 'Miami', 'Seattle', 'Las Vegas', 'Washington, D.C.'],
        citiesImage: ['https://media-cdn.tripadvisor.com/media/photo-p/0f/d4/2c/b3/varzaneh-salt-lake.jpg','https://cdn.vox-cdn.com/thumbor/0z6MnbiSKqLdLMlBWh-Soxgnlmo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18993323/shutterstock_788608396.jpg','https://2486634c787a971a3554-d983ce57e4c84901daded0f67d5a004f.ssl.cf1.rackcdn.com/intercontinental-miami/media/header_mobile-5c9a43d33ef20.jpg','https://angel.co/cdn-cgi/image/width=680,height=1280,fit=cover,gravity=0.5x0.5,quality=90,format=auto/http://seo-landers.hackers.studio/assets/img/location-seattle.jpg','https://r1.ilikewallpaper.net/ipad-air-wallpapers/download/18729/Las-Vegas-Casino-ipad-air-wallpaper-ilikewallpaper_com.jpg','https://2.bp.blogspot.com/_qbsAAqsVQVQ/TSYOfzX9dzI/AAAAAAAAAIg/X9QYuAaPWQs/s1600/IMG_2853.JPG'],
        index: 0,
        message: '',
    }

    destination = () => {
        if (this.state.index < (this.state.cities.length - 1)) {
            this.setState({
                index: this.state.index + 1
            })
        } else {
            this.setState({
                message: "You List of Travel ends"
            })
        }

    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.backImage}
                    source={{uri:this.state.citiesImage[this.state.index]}}
                >
                    <View style={styles.containContainer}>
                        <View style={styles.messageContainer}>
                            <Text style={styles.messageText}>
                                {this.state.message}
                            </Text>
                        </View>
                        <TouchableHighlight
                            onPress={this.destination}>
                            <View style={styles.button}>
                                <Text style={styles.cityText}>
                                    {this.state.cities[this.state.index]}
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
    },
    containContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: deviceHeight,
    },
    backImage: {
        width: deviceWidth,
        height: deviceHeight,
    },
    button: {
        backgroundColor: 'green',
        padding: 15,
    },
    cityText: {
        color: 'white',
    },
    messageContainer: {
        marginVertical: 20,
    },
    messageText: {
        fontSize: deviceHeight / 20,
    }


});

export default RoadTrip;