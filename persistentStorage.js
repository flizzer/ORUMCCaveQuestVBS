/* @flow */

'use strict';

const React = require('react-native');
const Tcomb = require('tcomb-form-native')
const Firebase = require('firebase');
const FirebaseURL = 'https://popping-torch-8932.firebaseio.com/';

// var {
//   Component
// } = React;

class PersistentStorage extends React.Component {

  constructor(props: React.PropTypes) {
    super(props);
    this.databaseItems = this.getDatabaseItems().child('items');
  }

  getDatabaseItems() {
    return new Firebase(FirebaseURL);
  }

  saveChild(child: Tcomb.struct) {
  // saveChild(child: Tcomb.struct) {
    this.databaseItems.push({firstName: child.firstName});
  }
}

module.exports = PersistentStorage;
