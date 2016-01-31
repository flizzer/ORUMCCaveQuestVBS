/* @flow */

'use strict';
var React = require('react-native');
var RegistrationForm = require('./registrationForm.js');
//var RegistrationFormNoTcomb = require('./registrationFormNoTcomb.js');


var { AppRegistry } = React;

var QuestCaveVBS = React.createClass({
  render: function() {
      return (
          <RegistrationForm/>
          // <RegistrationFormNoTcomb/>
      );
  }
});

AppRegistry.registerComponent('QuestCaveVBS', () => QuestCaveVBS);
