/* @flow */

'use strict';

var LABEL_COLOR = '#48BBEC';
var INPUT_COLOR = '#48BBEC';
var ERROR_COLOR = '#a94442';
var HELP_COLOR = '#999999';
var BORDER_COLOR = '#cccccc';
var DISABLED_COLOR = '#777777';
var DISABLED_BACKGROUND_COLOR = '#eeeeee';
var FONT_SIZE = 17;
var FONT_WEIGHT = '500';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableHighlight
} = React;

var RegistrationFormNoTcomb = React.createClass({
  onPress: function() {

	},
	render: function() {
	  	return (
			<ScrollView contentContainerStyle={styles.container}>
      <TextInput style="textinput" placeholder="Child's First Name"></TextInput>
      <TextInput style="textinput" placeholder="Child's Last Name"></TextInput>
				<TouchableHighlight
					style={styles.button}
					onPress={this.onPress}
					underlayColor='#99d9f4'>
						<Text style={styles.buttonText}>Save</Text>
				</TouchableHighlight>
			</ScrollView>
		);
	}
});

var styles = StyleSheet.create({
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
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
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff'
	//flex:1,
	//flexDirection:'row',
	//alignItems:'center'
  },
  textinput: {
    // normal: {
      color: INPUT_COLOR,
      fontSize: FONT_SIZE,
      height: 36,
      padding: 7,
      borderRadius: 4,
      borderColor: BORDER_COLOR,
      borderWidth: 1,
      marginBottom: 5
    // },
  }
});

module.exports = RegistrationFormNoTcomb;
