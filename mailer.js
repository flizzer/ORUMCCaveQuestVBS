/* @flow */

'use strict';

const React = require('react');
var {
  Alert
} = React;

const Tcomb = require('tcomb-form-native');
var url = 'https://microsoft-apiapp04962ba69aa74a76af6ae027d5493b6d.azurewebsites.net/api/SendGrid?parentdestEmailAddress={0}&childName={1}&childUniqueId={2}';

class Mailer extends React.Component {

    async sendMail(child : Tcomb.struct, childUniqueId : string) {
      var childFullName = child.firstName + ' ' + child.lastName;
      url = url.replace('{0}', child.emailAddress);
      url = url.replace('{1}', childFullName);
      url = url.replace('{2}', childUniqueId);
      url = encodeURI(url);
      try {
        fetch(url
        , {
           method: 'POST',
           headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
           }
        });
      } catch (error) {
         throw error;
      }
  }
}

module.exports = Mailer;
