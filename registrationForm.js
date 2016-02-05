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

var Age = Tcomb.refinement(Tcomb.Number,
  function(n) {
    return (n >= 3);
  }
);
Age.getValidationErrorMessage = function(value,path,context) {
  return 'Child must be 3 years of age or older';
};

var SchoolGrade = Tcomb.refinement(Tcomb.Number,
  function(n) {
      return (n <= 10);
  }
);
SchoolGrade.getValidationErrorMessage = function(value,path,context) {
    return "Child's grade for 2016-2017 school year must be 10th or less"
};

var VolunteerAgeGroup = Tcomb.enums({
    E: 'Elementary',
    P: 'Preschool',
    O: 'Other'
});

var Child = Tcomb.struct({
	firstName: Tcomb.String,
	lastName: Tcomb.String,
	gender: Gender,
	streetAddress: Tcomb.String,
	city: Tcomb.String,
	state: Tcomb.String,
	zipCode: ZipCode,
	homePhoneNumber: Tcomb.String,
	cellPhoneNumber: Tcomb.maybe(Tcomb.String),
	homeEmailAddress: Tcomb.maybe(Tcomb.String),
	age: Age,
  DOB: Tcomb.Date,
  schoolGrade: SchoolGrade,
  schoolName: Tcomb.maybe(Tcomb.String),
  motherName: Tcomb.String,
  fatherName: Tcomb.String,
  otherGuardianName: Tcomb.maybe(Tcomb.String),
  otherGuardianRelationship: Tcomb.maybe(Tcomb.String),
  otherGuardianPhoneNumber: Tcomb.maybe(Tcomb.String),
  emergencyName: Tcomb.String,
  emergencyPhoneNumber: Tcomb.String,
  allergies: Tcomb.maybe(Tcomb.String),
  homeChurch: Tcomb.maybe(Tcomb.String),
  friendRequest: Tcomb.maybe(Tcomb.String),
  isVolunteer: Tcomb.Boolean,
  volunteerAgeGroup: VolunteerAgeGroup,
  isNurseryRequested: Tcomb.Boolean,
  volunteerChildName: Tcomb.maybe(Tcomb.String),
  volunteerChildAge: Tcomb.Number,
  parentSignature: Tcomb.String,
  parentSignatureDate: Tcomb.Date,


	orderCD: Tcomb.Boolean
});

function customFormTemplate(locals)
{
    var customFormStyles = StyleSheet.create({
      horizontalInputContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      flexInput:{
        flex:1,
        padding: 2,
        flexWrap: 'nowrap'
      },
      flexInputNoLabelWrap:{
        flex:2,
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center'
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
      disclaimerText:{
        color: '#000000',
        fontSize: 11,
        textAlign: 'justify',
        padding: 7
      }
    });
    var disclaimerName = locals.inputs.firstName.value + locals.inputs.lastName.value;
    return (
        <View>
          <View style={customFormStyles.border}>
            <View style={customFormStyles.horizontalInputContainer}>
              <View style={customFormStyles.flexInput}>
                  {locals.inputs.firstName}
              </View>
              <View style={customFormStyles.flexInput}>
                  {locals.inputs.lastName}
              </View>
            </View>
            {locals.inputs.gender}
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
              {locals.inputs.age}
              <Text style={customFormStyles.label}>
                Child's Date of Birth:*
              </Text>
              {locals.inputs.DOB}
              {locals.inputs.schoolGrade}
              {locals.inputs.schoolName}
              {locals.inputs.homeChurch}
            </View>
            <Text style={customFormStyles.helpText}>
              Please enter some basic contact information.
            </Text>
          </View>
          <View style={customFormStyles.border}>
            <View style={customFormStyles.horizontalInputContainer}>
              <View style={customFormStyles.flexInput}>
                {locals.inputs.motherName}
              </View>
              <View style={customFormStyles.flexInput}>
                {locals.inputs.fatherName}
              </View>
            </View>
            {locals.inputs.otherGuardianName}
            {locals.inputs.otherGuardianRelationship}
            {locals.inputs.otherGuardianPhoneNumber}
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
            {locals.inputs.emergencyName}
            {locals.inputs.emergencyPhoneNumber}
            {locals.inputs.allergies}
            <Text style={customFormStyles.helpText}>
              Please enter emergency information.
            </Text>
          </View>
          <View style={customFormStyles.border}>
            {locals.inputs.friendRequest}
            <Text style={customFormStyles.helpText}>
              Must be a mutual request to be honored before June 1st.
            </Text>
          </View>
          <View style={customFormStyles.border}>
            <View style={customFormStyles.horizontalInputContainer}>
              <View style={customFormStyles.flexInputNoLabelWrap}>
                <Text style={customFormStyles.label}>
                  Parent(s) willing to volunteer?
                </Text>
              </View>
              <View style={customFormStyles.flexInput}>
                {locals.inputs.isVolunteer}
              </View>
            </View>
            {locals.inputs.volunteerAgeGroup}
            <View style={customFormStyles.horizontalInputContainer}>
              <View style={customFormStyles.flexInputNoLabelWrap}>
                <Text style={customFormStyles.label}>
                  Nursery requested?
                </Text>
              </View>
              <View style={customFormStyles.flexInput}>
                {locals.inputs.isNurseryRequested}
              </View>
            </View>
            <View style={customFormStyles.horizontalInputContainer}>
              <View style={customFormStyles.flexInput}>
                {locals.inputs.volunteerChildName}
              </View>
              <View style={customFormStyles.flexInput}>
                {locals.inputs.volunteerChildAge}
              </View>
            </View>
            <Text style={customFormStyles.helpText}>
              Please enter volunteer information.
            </Text>
          </View>
          <View style={customFormStyles.border}>
                <Text style={customFormStyles.sectionHeader1}>
                  MUST BE COMPLETED FOR REGISTRATION
                </Text>
                <Text style={customFormStyles.sectionHeader2}>
                  Medical & Liability Release - Valid June 19-24, 2016
                </Text>
                <Text style={customFormStyles.disclaimerText}>
                  In the event of sickness or some medical emergency, I request that my child {disclaimerName}
                  receive any medical attention or treatment deemed necessary; therefore, I give permission to
                  any hospital, doctor, and/or health care provider to transport, treat, and/or admit my child
                  for care.  I understand that I am responsible for all expenses and charges for the treatment
                  and care of my child.  In the event that I am not present at the time of the emergency or
                  cannot be contacted, my care has been entrusted to the staff and designated ministry leadership
                  of Oak Ridge UMC.  I also release from liability any and all agents of ORUMC, the volunteers and
                  staff in case of an accident and/or injury.
                </Text>
                {locals.inputs.parentSignature}
                <Text style={customFormStyles.label}>
                  Date Signed:*
                </Text>
                {locals.inputs.parentSignatureDate}
          </View>


        </View>
    );
}

var Options = {
  template: customFormTemplate,
	auto: 'placeholders',
	fields: {
		firstName: {
			error: "Child's first name is required",
			placeholder: "Child's First Name*"
		},
		lastName: {
			error: "Child's last name is required",
			placeholder: "Child's Last Name*"
		},
		gender: {
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
		age: {
			error: "Child's age is required",
      placeholder: "Child's Age*"
		},
		DOB: {
      mode: "date",
      // placeholder: "Child's Date of Birth*"
		},
    schoolGrade: {
      placeholder: "Child's 2016-2017 School Grade"
    },
    schoolName: {
			error: "Child's school name is required",
      placeholder: "Child's School Name*"
    },
    motherName: {
			// error: "Child's mother's name is required",
      placeholder: "Child's Mother's Name"
    },
    fatherName: {
			// error: "Child's father's name is required",
      placeholder: "Child's Father's Name"
    },
    otherGuardianName: {
      placeholder: "Guardian Name"
    },
    otherGuardianRelationship: {
      placeholder: "Guardian Relationship"
    },
    otherGuardianPhoneNumber: {
      placeholder: "Guardian Phone Number",
    },
    emergencyName: {
      error: "Emergency contact name is required.",
      placeholder: "Emergency Contact Name*"
    },
    emergencyPhoneNumber: {
      error: "Emergency contact phone number is required.",
      placeholder: "Emergency Contact Number*"
    },
    allergies:{
      placeholder: "Allergies or other medical conditions"
    },
    homeChurch:{
      placeholder: "Home Church"
    },
    friendRequest: {
      placeholder: "Friend requested to be placed with"
    },
    isVolunteer: {
      label: " "
    },
    volunteerAgeGroup: {
			order: 'asc',
			nullOption: {value: '', text: "Volunteer Age Group"}
    },
    isNurseryRequested: {
      label: " "
    },
    volunteerChildName: {
      placeholder: "Volunteer child's name"
    },
    volunteerChildAge: {
      placeholder: "Volunteer child's age"
    },
    parentSignature: {
      error: "Parent/Guardian signature required",
      placeholder: "Parent/Guardian signature*"
    },
    parentSignatureDate: {
      mode: 'date'
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
