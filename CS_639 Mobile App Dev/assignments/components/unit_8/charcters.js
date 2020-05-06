import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Alert, Image, Dimensions, TouchableHighlight, ImageBackground, ScrollView } from 'react-native';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
export class Characters extends Component {

    state = {
        characters: [
            {
                name: 'Thor',
                movie: 'Thor: Ragnarok',
                universe: 'Marvels',
                imageUrl: 'https://i.pinimg.com/236x/f7/d9/a9/f7d9a9f9f500bb599635b47a5576cdc7.jpg',
                imageUrl2: 'https://i.ytimg.com/vi/7p7rocHEecE/maxresdefault.jpg',
                info: 'Thor is a 2011 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Paramount Pictures,[N 1] it is the fourth film in the Marvel Cinematic Universe (MCU). '
            },
            {
                name: 'Super Man',
                movie: 'Super Man',
                universe: 'DC Universe',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png',
                info: 'Superman is a fictional superhero. The character was created by writer Jerry Siegel and artist Joe Shuster, and first appeared in Action Comics #1, a comic book published on April 18, 1938 '

            },
            {
                name: 'Iron Man',
                movie: 'Iron Man',
                universe: 'Marvels',
                imageUrl: 'https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images/artworkimages/medium/1/iron-man-mery-moon.jpg',
                info: 'Iron Man is a fictional superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby. '

            },
            {
                name: 'BatMan',
                movie: 'BatMan',
                universe: 'DC universe',
                imageUrl: 'https://www.sideshow.com/wp/wp-content/uploads/2020/05/Batman-Premium-Format-Figure-Theater-1-740x614.jpg',
                info: 'Batman is a fictional superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger,[2][3] and first appeared in Detective Comics #27 in 1939.  '

            },

            {
                name: 'Spider Man',
                movie: 'Spider Man:Homecoming',
                universe: 'Marvels',
                imageUrl: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/b/b0/Spider-Man_FFH_Profile.jpg/revision/latest?cb=20190917181733',
                info: 'Spider-Man: Homecoming is a 2017 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing.  '

            },
            {
                name: 'Aqua Man',
                movie: 'Aqua Man',
                universe: 'Marvels',
                imageUrl: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fmarkhughes%2Ffiles%2F2018%2F12%2FAQUAMAN-poster-1-1200x1500.jpg',
                info: 'Aquaman is a 2018 American superhero film based on the DC Comics character of the same name. Distributed by Warner Bros. Pictures, it is the sixth film in the DC Extended Universe (DCEU).  '

            }
        ]///
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>
                        Favourite Movies
                    </Text>

                </View>
                <ScrollView>
                    {this.state.characters.map((char) => (
                        <View style={styles.characterContainer}>
                            <View style={styles.imageContainer}>
                                <ScrollView horizontal={true}>
                                    <Image
                                        style={styles.charImage}
                                        source={{ uri: char.imageUrl }} />
                                        <Image
                                        style={styles.charImage}
                                        source={{ uri: char.imageUrl2 }} />
                                </ScrollView>

                            </View>
                            <View style={styles.detailsContainer}>
                                <ScrollView>
                                    <Text style={styles.titleText}>
                                        {char.name}
                                    </Text>
                                    <Text style={styles.comicText}>
                                        {char.movie}
                                    </Text>
                                    <Text style={styles.universeText}>
                                        {char.universe}
                                    </Text>
                                    <Text style={styles.infoText}>
                                        {char.info}
                                    </Text>
                                </ScrollView>
                            </View>
                        </View>
                    ))}
                </ScrollView>

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
    characterContainer: {
        flexDirection: 'row',
        width: deviceWidth,
        height: (6 * deviceWidth) / 13,
        backgroundColor: 'rgba(225, 192, 184, 0.87)',
        marginBottom: 10,
        borderBottomWidth: 2,
        borderColor: 'black',
    },
    imageContainer: {
        flex: 2,

        justifyContent: 'center',
        alignItems: 'center',
    },
    detailsContainer: {
        flex: 3,

        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: deviceHeight / 24,
    },
    comicText: {
        fontSize: deviceHeight / 28,
    },
    universeText: {
        fontSize: deviceHeight / 28,

    },
    charImage: {
        width: (3 * deviceWidth) / 8,
        height: (3 * deviceWidth) / 8,
        borderRadius: 50,
    }


});
export default Characters;