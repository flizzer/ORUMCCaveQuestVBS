/* @flow */

'use strict';
var React = require('react-native');
var VBSRegistrationForm = require('./VBSRegistrationForm.js');
var { AppRegistry } = React;

var QuestCaveVBS = React.createClass({
  render: function() {
      return (
          <VBSRegistrationForm/>
      );
  }
});

AppRegistry.registerComponent('QuestCaveVBS', () => QuestCaveVBS);
