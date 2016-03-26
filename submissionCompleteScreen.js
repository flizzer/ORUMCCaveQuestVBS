/* @flow */

'use strict';
var React = require('react-native');
var {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableHighlight
} = React;

var SubmissionCompleteScreen = React.createClass({
  onPress: function() {
    this.props.navigator.popToTop({
    });
  },
  render: function() {
    return (
      <ScrollView
        style={submissionCompleteStyles.container}>
        <View style={submissionCompleteStyles.imgContainer}>
          <Image
          source={require('./img/cave-quest-vbs-logo-HiRes-RGB.png')}
          style={submissionCompleteStyles.logo}/>
        </View>
        <Text style={submissionCompleteStyles.submissionCompleteText}>
          Submission Complete!
        </Text>
        <Text style={submissionCompleteStyles.submissionCompleteText}>
          You should receive an email at {this.props.emailAddress} shortly.
        </Text>
        <TouchableHighlight
          style={submissionCompleteStyles.button}
          onPress={this.onPress}
          underlayColor='#B09337'>
            <Text style={submissionCompleteStyles.buttonText}>Register Another?</Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
});

var submissionCompleteStyles = StyleSheet.create({
  button: {
    height: 36,
    backgroundColor: '#5C3B69',
    borderColor: '#5C3B69',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginTop: 10
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  container: {
    padding: 20,
    backgroundColor: '#C8B8AA'
  },
  imgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  logo: {
    width: 100,
    height: 90,
    resizeMode: 'contain',
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionHeader1:{
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 15,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    textAlign: 'center'
  },
  submissionCompleteText:{
    color: '#878B3F',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center'
  },
  dateText:{
    color: '#FEDC5C',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center'
  },
  sectionHeader3:{
    color: '#000000',
    fontWeight: '500',
    fontSize: 10,
    textAlign: 'center'
  },
  horizontalInputContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexText:{
    flex:1,
    padding: 2,
    flexWrap: 'nowrap'
  }
});

module.exports = SubmissionCompleteScreen;
