/* @flow */

'use strict';

const React = require('react-native');
var {
  Alert
} = React;
const RNMail = require('NativeModules').RNMail;
const Tcomb = require('tcomb-form-native');
const EmailTemplate = require('./emailTemplate.js')
var emailTemplate = new EmailTemplate();

class Mailer extends React.Component {

  mail(child : Tcomb.struct) {
    var childFullName = child.firstName + ' ' + child.lastName;
    RNMail.mail({
      subject: 'CaveQuest VBS Registration for ' + childFullName,
      recipients: [child.emailAddress],
      body: 'This is a test from the app.'
      // body: emailTemplate.getEmailTemplate(child)
    }, (error, event) => {
      if (error)
      Alert.alert('Email Error', 'Could not send email notification.');
    });
  }
}

module.exports = Mailer;
