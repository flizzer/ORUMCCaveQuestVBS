/* @flow */

'use strict';
var React = require('react-native');
var RegistrationForm = require('./registrationForm.js');
var { AppRegistry } = React;

var QuestCaveVBS = React.createClass({
  render: function() {
      return (
          <RegistrationForm/>
      );
  }
});

AppRegistry.registerComponent('QuestCaveVBS', () => QuestCaveVBS);
