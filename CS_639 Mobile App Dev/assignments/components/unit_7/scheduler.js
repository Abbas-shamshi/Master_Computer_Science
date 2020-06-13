import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Alert, Image, Dimensions, TouchableHighlight, ImageBackground } from 'react-native';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
export class Scheduler extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //defauilt value of the date time
            date: '',
            dayOfWeek: [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
            ],
            monthOfYear: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'July',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
            ],
            activity: [
                {
                    activityTitle: 'Cook',
                    activitySummary: 'Chicken',
                    activityTime: '8 pm',
                    activityDuration: '60 mins',
                },
                {
                    activityTitle: 'Play',
                    activitySummary: 'FootBall',
                    activityTime: '4pm',
                    activityDuration: '60 mins',
                },
                {
                    activityTitle: 'Game',
                    activitySummary: 'PUBG',
                    activityTime: '2 pm',
                    activityDuration: '30mins',
                },
                {
                    activityTitle: 'Read',
                    activitySummary: 'Book',
                    activityTime: '12 pm',
                    activityDuration: '10 mins',
                },
            ]
        };
    }
    

    componentDidMount() {
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var day = new Date().getDay();
        var date = new Date().getDate();
        this.setState({
            date: this.state.dayOfWeek[day] + '  ' + this.state.monthOfYear[month] + ' ' + date + 'th',
        })

    }

    changeColor = () => {
        random
    }


    render() {
        const a='b';
        return (
            <View style={styles.container}>
                <View style={{backgroundColor: this.state.current}} onPress={this.changeColor}/>
                
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>
                        {this.state.date}
                    </Text>

                </View>
                {this.state.activity.map((act) => (


                    <View style={styles.infoContainer}>
                        <View style={styles.dataContainer}>
                            <Text style={styles.infoText}>
                                {act.activityTime}
                            </Text>
                            <Text style={styles.infoText1}>
                                {act.activityDuration}
                            </Text>
                        </View>
                        <View style={styles.dataContainer1}>
                            <Text style={styles.infoText}>
                                {act.activityTitle}
                            </Text>
                            <Text style={styles.infoText1}>
                                {act.activitySummary}
                            </Text>
                        </View>

                    </View>
                ))}


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        height: deviceHeight / 10,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
    },
    headerText: {
        fontSize: deviceHeight / 22,
        fontWeight: 'bold',
        color: 'white',
    },
    infoContainer: {
        flexDirection: 'row',
        height: deviceHeight / 6,

        width: deviceWidth,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
    },
    dataContainer: {
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',

        flex: 3,
        marginHorizontal: 10,
    },
    dataContainer1: {
        flex: 7,
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',

        marginHorizontal: 10,

    },
    infoText: {
        fontSize: deviceHeight / 25,
    },
    infoText1: {
        fontSize: deviceHeight / 27,
    }


});
export default Scheduler;