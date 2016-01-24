/* @flow*/

'use strict';

var React = require('react-native');
var Tcomb = require('tcomb-form-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  TouchableHighlight
} = React;
var Form = Tcomb.form.Form;
var Gender = Tcomb.enums({
		M: 'Male',
		F: 'Female'
	});
var ZipCode = Tcomb.refinement(Tcomb.Number, function(n) { return (n > 0 && n.toString().length == 5) });
ZipCode.getValidationErrorMessage = function(value,path,context) {
	return 'A zip code is required';
};
var Child = Tcomb.struct({
	childFirstName: Tcomb.String,
	childLastName: Tcomb.String,
	childGender: Gender,
	streetAddress: Tcomb.String,
	city: Tcomb.String,
	state: Tcomb.String,
	zipCode: ZipCode,
	homePhoneNumber: Tcomb.String,
	cellPhoneNumber: Tcomb.maybe(Tcomb.String),
	homeEmailAddress: Tcomb.maybe(Tcomb.String),
	childAge: Tcomb.Number,

	//zipCode: Tcomb.Number,
	//homePhone: Tcomb.String,

	orderCD: Tcomb.Boolean
});
var Options = {
	auto: 'placeholders',
	fields: {
		childFirstName: {
			error: "Child's first name is required",
			placeholder: "Child's First Name",
		},
		childLastName: {
			error: "Child's last name is required",
			placeholder: "Child's Last Name",
		},
		childGender: {
			error: "Child's gender is required",
			order: 'asc',
			nullOption: {value: '', text: "Child's Gender"}
		},
		streetAddress: {
			error: "Street address is required",
			placholder: "Street Address"
		},
		city: {
			error: "City is required",
			placeholder: "City"
		},
		state: {
			error: "State is required",
			placeholder: "State"
		},
		zipCode: {
			//error: "Zip code is required",
			placeholder: "Zip code"
		},
		homePhoneNumber: {
			error: "A home phone number is required",
			placeholder: "Home Phone Number"
		},
		cellPhoneNumber: {
			//error: "A cell number is required",
			placeholder: "Cell Phone Number"
		},
		homeEmailAddress: {
			placeholder: "Home Email Address"
		},
		childAge: {
			error: "Child's age is required"
		}
	}
};

var QuestCaveVBS = React.createClass({
	
	onPress: function() {
		var value = this.refs.form.getValue();
		if (value) {
			console.log(value);
		}
	},

	render: function() {
	  	return (
			<ScrollView contentContainerStyle={styles.container}>
				<Form
					ref="form"
					type={Child}
					options={Options}
				/>
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
  }
});

AppRegistry.registerComponent('QuestCaveVBS', () => QuestCaveVBS);
