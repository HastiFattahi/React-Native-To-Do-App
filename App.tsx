/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ToDo from './app/screens/ToDo';
import Task from './app/screens/Task';


function App(): JSX.Element {
  return (
    // <WelcomeScreen />
    <ToDo />
    // <Task item={"hey"} index={0}/>
  );
}


export default App;
