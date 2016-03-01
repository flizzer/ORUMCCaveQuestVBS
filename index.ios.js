/* @flow */

'use strict';
var React = require('react-native');
var WelcomeScreen = require('./welcomeScreen.js')
var {
  AppRegistry,
  NavigatorIOS,
  StyleSheet
} = React;

var ORUMCCaveQuestVBS = React.createClass({
  render: function() {
      return (
          <NavigatorIOS
            style={NavigatorStyles.container}
            initialRoute={{
                title: '',
                component: WelcomeScreen,
            }}
            navigationBarHidden={true} />
      );
  }
});

var NavigatorStyles = StyleSheet.create({
  container: {
     flex:1,
  }
});

AppRegistry.registerComponent('ORUMCCaveQuestVBS', () => ORUMCCaveQuestVBS);
