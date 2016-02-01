/* @flow */

'use strict';

var React = require('react-native');
var Tcomb = require('tcomb-form-native');
var _ = require('lodash');
var {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} = React;
var Form = Tcomb.form.Form;
var Gender = Tcomb.enums({
		M: 'Male',
		F: 'Female'
});
var ZipCode = Tcomb.refinement(Tcomb.Number,
  function(n) {
    return (n > 0 && n.toString().length == 5);
  }
);
ZipCode.getValidationErrorMessage = function(value,path,context) {
	return 'A zip code is required';
};
var ChildAge = Tcomb.refinement(Tcomb.Number,
  function(n) {
    return (n >= 3);
  }
);
ChildAge.getValidationErrorMessage = function(value,path,context) {
  return 'Child must be 3 years of age or older';
};
var ChildSchoolGrade = Tcomb.refinement(Tcomb.Number,
  function(n) {
      return (n <= 10);
  }
);
ChildSchoolGrade.getValidationErrorMessage = function(value,path,context) {
    return "Child's grade for 2016-2017 school year must be 10th or less"
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
	childAge: ChildAge,
  childDOB: Tcomb.Date,
  childSchoolGrade: ChildSchoolGrade,
  childSchoolName: Tcomb.maybe(Tcomb.String),
  childMotherName: Tcomb.String,
  childFatherName: Tcomb.String,
  childOtherGuardianName: Tcomb.maybe(Tcomb.String),
  childOtherGuardianRelationship: Tcomb.maybe(Tcomb.String),
  childOtherGuardianPhoneNumber: Tcomb.maybe(Tcomb.String),


	orderCD: Tcomb.Boolean
});

function customFormTemplate(locals)
{
    var customFormStyles = StyleSheet.create({
      horizontalInputContainer:{
        flexDirection: 'row'
      },
      flexInput:{
        flex:1,
        padding: 2
      },
      helpText:{
        color: '#999999',
        fontSize: 17,
        marginBottom: 2
      },
      border:{
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#cccccc',
        marginBottom: 5,
        padding: 7
      },
      label:{
        color: '#000000',
        fontWeight: '500',
        fontSize: 17
      }
    });
    return (
        <View>
          <View style={customFormStyles.border}>
            <View style={customFormStyles.horizontalInputContainer}>
              <View style={customFormStyles.flexInput}>
                  {locals.inputs.childFirstName}
              </View>
              <View style={customFormStyles.flexInput}>
                  {locals.inputs.childLastName}
              </View>
            </View>
            {locals.inputs.childGender}
            {locals.inputs.streetAddress}
            <View style={customFormStyles.horizontalInputContainer}>
              <View style={customFormStyles.flexInput}>
                {locals.inputs.city}
              </View>
              <View style={customFormStyles.flexInput}>
                {locals.inputs.state}
              </View>
              <View style={customFormStyles.flexInput}>
                {locals.inputs.zipCode}
              </View>
            </View>
            <View>
              {locals.inputs.homePhoneNumber}
              {locals.inputs.childAge}
              <Text style={customFormStyles.label}>
                Child's Date of Birth:*
              </Text>
              {locals.inputs.childDOB}
              {locals.inputs.childSchoolGrade}
              {locals.inputs.childSchoolName}
            </View>
            <Text style={customFormStyles.helpText}>
              Please enter some basic contact information.
            </Text>
          </View>
          <View style={customFormStyles.border}>
            <View style={customFormStyles.horizontalInputContainer}>
              <View style={customFormStyles.flexInput}>
                {locals.inputs.childMotherName}
              </View>
              <View style={customFormStyles.flexInput}>
                {locals.inputs.childFatherName}
              </View>
            </View>
            {locals.inputs.childOtherGuardianName}
            {locals.inputs.childOtherGuardianRelationship}
            {locals.inputs.childOtherGuardianPhoneNumber}
            <Text style={customFormStyles.helpText}>
              Please enter parental/guardian information as appropriate.  Must have at least one.
            </Text>
          </View>
          <View style={customFormStyles.border}>
            <View style={customFormStyles.horizontalInputContainer}>
                <View style={customFormStyles.flexInput}>
                  {locals.inputs.cellPhoneNumber}
                </View>
                <View style={customFormStyles.flexInput}>
                  {locals.inputs.homeEmailAddress}
                </View>
            </View>
            <Text style={customFormStyles.helpText}>
              Please enter either a cell phone number OR an email address for updates regarding VBS week.
            </Text>
          </View>
          <View style={customFormStyles.border}>
            
          </View>

        </View>
    );
}

var Options = {
  template: customFormTemplate,
	auto: 'placeholders',
	fields: {
		childFirstName: {
			error: "Child's first name is required",
			placeholder: "Child's First Name*"
		},
		childLastName: {
			error: "Child's last name is required",
			placeholder: "Child's Last Name*"
		},
		childGender: {
			error: "Child's gender is required",
			order: 'asc',
			nullOption: {value: '', text: "Child's Gender*"}
		},
		streetAddress: {
			error: "Street address is required",
			placeholder: "Street Address*"
		},
		city: {
			error: "City is required",
			placeholder: "City*"
		},
		state: {
			error: "State is required*",
			placeholder: "State*"
		},
		zipCode: {
			placeholder: "Zip code*"
		},
		homePhoneNumber: {
			error: "A home phone number is required",
			placeholder: "Home Phone Number*"
		},
		cellPhoneNumber: {
			placeholder: "Cell Phone Number"
		},
		homeEmailAddress: {
			placeholder: "Home Email Address",
		},
		childAge: {
			error: "Child's age is required",
      placeholder: "Child's Age*"
		},
		childDOB: {
      mode: "date",
      placeholder: "Child's Date of Birth*"
		},
    childSchoolGrade: {
      placeholder: "Child's 2016-2017 School Grade"
    },
    childSchoolName: {
			error: "Child's school name is required",
      placeholder: "Child's School Name*"
    },
    childMotherName: {
			// error: "Child's mother's name is required",
      placeholder: "Child's Mother's Name"
    },
    childFatherName: {
			// error: "Child's father's name is required",
      placeholder: "Child's Father's Name"
    },
    childOtherGuardianName: {
      placeholder: "Guardian Name"
    },
    childOtherGuardianRelationship: {
      placeholder: "Guardian Relationship"
    },
    childOtherGuardianPhoneNumber: {
      placeholder: "Guardian Phone Number",
    }
	}
};

var RegistrationForm = React.createClass({
  onPress: function() {
		var value = this.refs.form.getValue();
		if (value) {
			console.log(value);
		}
	},
	render: function() {
	  	return (
			<ScrollView contentContainerStyle={registrationFormStyles.container}>
				<Form
					ref="form"
					type={Child}
					options={Options}
				/>
				<TouchableHighlight
					style={registrationFormStyles.button}
					onPress={this.onPress}
					underlayColor='#99d9f4'>
						<Text style={registrationFormStyles.buttonText}>Register</Text>
				</TouchableHighlight>
			</ScrollView>
		);
	}
});

var registrationFormStyles = StyleSheet.create({
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
  }
});

module.exports = RegistrationForm;
