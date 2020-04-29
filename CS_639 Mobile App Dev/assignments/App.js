/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Hello from './components/unit_1/hello';
import Connect_component from './components/unit_1/connecting_components';
import Rainbow from './components/unit_1/rainbow'
import Nested from './components/unit_1/nested_view'
import Andy from './components/unit_1/andy_warhol'
import Fav_Movies from './components/unit_1/favourite_movies'
import News from './components/unit_1/news_article'
import Google from './components/unit_1/google_logo'
import Snapchat from './components/unit_1/snapchat_logo'
import Venmo from './components/unit_1/venmo'










const App: () => React$Node = () => {
  return (
    
          <View style={styles.container}>
            {/* <Hello/> */}
            {/* <Connect_component/> */}
            {/* <Rainbow/> */}
            {/* <Nested/> */}
            {/* <Andy/> */}
            {/* <Fav_Movies/> */}
            {/* <News/> */}
            {/* <Google/> */}
            {/* <Snapchat/> */}
            < Venmo/>
          </View>
      
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  
  container:{
    flex:1,
  }
});

export default App;
