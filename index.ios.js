/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Tcomb = require('tcomb-form-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;
var Form = Tcomb.form.Form;
var Parent = Tcomb.struct({
	firstName: Tcomb.String,
	middleInitial: Tcomb.maybe(Tcomb.String),
	lastName: Tcomb.String,
	orderCD: Tcomb.Boolean
});
var options = {};
var QuestCaveVBS = React.createClass({
	
	onPress: function() {
		var value = this.refs.form.getValue();
		if (value) {
			console.log(value);
		}
	},

	render: function() {
	  	return (
			<View style={styles.container}>
				<Form
					ref="form"
					type={Parent}
					options={options}
				/>
				<TouchableHighlight 
					style={styles.button} 
					onPress={this.onPress}
					underlayColor='#99d9f4'>
						<Text style={styles.buttonText}>Save</Text>
				</TouchableHighlight>
			</View>
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
    backgroundColor: '#ffffff',
  },});

AppRegistry.registerComponent('QuestCaveVBS', () => QuestCaveVBS);
