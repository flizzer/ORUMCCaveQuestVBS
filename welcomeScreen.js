/* @flow */

'use strict';

var React = require('react-native');
var VBSRegistrationForm = require('./VBSRegistrationForm.js')
var {
  Text,
  ScrollView,
  Image,
  Component,
  StyleSheet,
  TouchableHighlight,
  View
} = React;

var WelcomeScreen = React.createClass({
  onPress: function() {
    this.props.navigator.push({
      component: VBSRegistrationForm,
    });
  },
  render: function() {
    return (
      <ScrollView
          style={welcomeScreenStyles.container}>
          <View style={welcomeScreenStyles.imgContainer}>
              <Image source={require('./img/cave-quest-vbs-logo-HiRes-RGB.png')}
                style={welcomeScreenStyles.logo}/>
          </View>
          <Text style={welcomeScreenStyles.sectionHeader2}>
            ORUMC Cave Quest Registration App
          </Text>
          <Text style={welcomeScreenStyles.sectionHeader2}>
            June 19-24, 2016 6:15 - 8:45pm, SUNDAY - Friday
          </Text>
          <Text style={welcomeScreenStyles.sectionHeader3}>
            Preschool VBS is for age 3-5 years and Elementary VBS for
            Kindergarten - 5th grade.
          </Text>
          <Text style={welcomeScreenStyles.sectionHeader3}>
            Older youth 6th - 10th grade will participate in VBS for Youth
          </Text>
          <Text style={welcomeScreenStyles.sectionHeader3}>
            A Nursery (0-2 years) is provided for parent volunteers and
            participants of our adult classes.
          </Text>
          <Text style={welcomeScreenStyles.sectionHeader1}>
            Please complete ONE app submission for EACH child regardless of age.
          </Text>
          <Text style={welcomeScreenStyles.sectionHeader3}>
            By continuing, you understand your child(ren)'s picture(s) may
            be placed on the church web site.
          </Text>
        <TouchableHighlight
          style={welcomeScreenStyles.button}
          onPress={this.onPress}
          underlayColor='#B09337'>
            <Text style={welcomeScreenStyles.buttonText}>Continue</Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
});

var welcomeScreenStyles = StyleSheet.create({
  button: {
    height: 36,
    backgroundColor: '#5C3B69',
    borderColor: '#5C3B69',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  container: {
    padding: 20,
    backgroundColor: '#C8B8AA',
  },
  imgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 50,
    paddingTop: 30,
  },
  logo: {
    width: 140,
    height: 130,
    resizeMode: 'contain',
    flex: 1
  },
  sectionHeader1:{
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 17,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    textAlign: 'center'
  },
  sectionHeader2:{
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center'
  },
  sectionHeader3:{
    color: '#000000',
    fontWeight: '500',
    fontSize: 17,
    padding: 5
  },
});

module.exports = WelcomeScreen;
