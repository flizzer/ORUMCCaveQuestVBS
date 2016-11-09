/* @flow */

'use strict';
import React, {Component} from 'react';
import {
  AppRegistry
  , Text
  , NavigatorIOS
  , StyleSheet
} from 'react-native';
const WelcomeScreen = require('./welcomeScreen.js');

class ORUMCCaveQuestVBS extends Component {
  render() {
      return (
          <NavigatorIOS
            style={NavigatorStyles.container}
            initialRoute={{
                title: 'Welcome Screen',
                component: WelcomeScreen,
            }}
            navigationBarHidden={true} />
      )
  }
}

var NavigatorStyles = StyleSheet.create({
  container: {
     flex:1,
  }
});

AppRegistry.registerComponent('ORUMCCaveQuestVBS', () => ORUMCCaveQuestVBS);
