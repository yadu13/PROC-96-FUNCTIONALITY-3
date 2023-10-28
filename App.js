import * as React from "react";
import { Text, StyleSheet, View} from 'react-native';
import { createAppContainer, createSwitchNavigator } from '@react-navigation/native';
import firebase from "firebase";

import {firebaseConfig} from './config';
import MainScreen from "./screens/MainScreen";
import Grade1 from './screens/Grade1';
import Grade2 from './screens/Grade2';
import Grade3 from './screens/Grade3';
import Grade4 from './screens/Grade4';
import Grade5 from './screens/Grade5';
import Grade6 from './screens/Grade6';
import Grade7 from './screens/Grade7';
import Grade8 from './screens/Grade8';
import Grade9 from './screens/Grade9';
import Grade10 from './screens/Grade10';
import Grade11Science from './screens/Grade11Science';
import Grade11Commerce from './screens/Grade11Commerce';
import Grade12Science from './screens/Grade12Science';
import Grade12Commerce from './screens/Grade12Commerce';
import NEET from './screens/NEET';
import JEE from './screens/JEE';
import LoginScreen from './screens/LoginScreen';


export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  Grade1: Grade1,
  Grade2: Grade2,
  Grade3: Grade3,
  Grade4: Grade4,
  Grade5: Grade5,
  Grade6: Grade6,
  Grade7: Grade7,
  Grade8: Grade8,
  Grade9: Grade9,
  Grade10: Grade10,
  Grade11Science: Grade11Science,
  Grade11Commerce: Grade11Commerce,
  Grade12Science: Grade12Science,
  Grade12Commerce: Grade12Commerce,
  NEET: NEET,
  JEE: JEE,
  MainScreen:MainScreen,
});

const AppContainer = createAppContainer(AppNavigator);