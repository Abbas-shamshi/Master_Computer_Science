import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Alert, Image, Dimensions, TouchableHighlight, ImageBackground } from 'react-native';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
export class FavMoviesV2 extends Component {

    state = {
        movieList: [
            {
                id: 1,
                name: 'Wall-E',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxLG9cknmEszsA_fywx5QaHYQqhYN4Tt_mS5___HOq_U0_pRXi&usqp=CAU',
            },
            {
                id: 2,
                name: 'Despicable Me',
                image: 'https://www.movieartarena.com/imgs/despicableme1rb.jpg',
            },
            {
                id: 3,
                name: 'UP',
                image: 'https://images-na.ssl-images-amazon.com/images/I/71VU4xCX9GL._AC_SY879_.jpg',
            },
            {
                id: 4,
                name: 'Boss Baby',
                image: 'https://ae01.alicdn.com/kf/HTB1GrBRAWmWBuNjy1Xaq6xCbXXan/Boss-Baby-Poster-Print-Silk-Fabric-Print-Poster-Cloth-Fabric-Wall-Poster-Custom-Satin-Poster-40X60cm.jpg',
            },
            {
                id: 5,
                name: 'Toy Story 3',
                image: 'https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/7745055550691',
            }
        ]
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>
                        Favourite Movies
                    </Text>

                </View>
                {this.state.movieList.map((movieInfo) => (
                    <View style={styles.listContainer}>
                        <View style={styles.idContainer}>
                            <Text style={styles.idText}>
                                {movieInfo.id}
                            </Text>
                        </View>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>
                                {movieInfo.name}

                            </Text>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.movieImage}
                                source={{ uri: movieInfo.image  }}
                            />
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
    listContainer: {
        flexDirection: 'row',
        height: (2 * deviceHeight) / 12,
        backgroundColor: 'grey',
        alignItems: 'center',
        marginBottom: 2,
    },
    idContainer: {
        width: deviceWidth / 6,
        alignItems: 'center',
        justifyContent: 'center',

    },
    titleContainer: {
        width: (6 * deviceWidth) / 11,
    },
    imageContainer: {
        width: (2 * deviceWidth) / 6
    },
    movieImage: {
        width: (2 * deviceHeight) / 15,
        height: (2 * deviceHeight) / 15,
    },
    idText: {
        fontSize: deviceHeight / 28,
        color: '#5b4100',

    },
    titleText: {
        fontSize: deviceHeight / 28,
        color: '#5b4100',
    }


});
export default FavMoviesV2;