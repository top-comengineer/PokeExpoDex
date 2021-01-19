import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, } from 'react-native';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';

import PokemonStackNavigator from './app/navigators/PokemonStackNavigator'




const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <PokemonStackNavigator/>
    </NavigationContainer>
  );
};

export default App;
