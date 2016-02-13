/* @flow */

'use strict';

var React = require('react-native');
var Tcomb = require('tcomb-form-native');
var _ = require('lodash');
Tcomb.form.Form.stylesheet.textbox.normal.borderColor = '#9E9382';
Tcomb.form.Form.stylesheet.textbox.notEditable.backgroundColor = '#9E9382';
Tcomb.form.Form.stylesheet.textbox.notEditable.borderColor = '#9E9382';
var {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
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
  volunteerChildAge: Tcomb.maybe(Tcomb.Number),
  isAcceptTerms: Tcomb.Boolean,
  parentInsuranceCompany: Tcomb.String,
  parentInsuranceNumber: Tcomb.String,
  parentInsuranceGroup: Tcomb.String,
  cdQuantityOrdered: Tcomb.maybe(Tcomb.Number),
  cdCheckAmount: Tcomb.maybe(Tcomb.Number),
  cdCheckNumber: Tcomb.maybe(Tcomb.String),
  tshirtSizeC_XS: Tcomb.maybe(Tcomb.Number),
  tshirtSizeC_SM: Tcomb.maybe(Tcomb.Number),
  tshirtSizeC_MD: Tcomb.maybe(Tcomb.Number),
  tshirtSizeC_LG: Tcomb.maybe(Tcomb.Number),
  tshirtSizeY_XL: Tcomb.maybe(Tcomb.Number),
  tshirtSizeAdult_SM: Tcomb.maybe(Tcomb.Number),
  tshirtSizeAdult_MD: Tcomb.maybe(Tcomb.Number),
  tshirtSizeAdult_LG: Tcomb.maybe(Tcomb.Number),
  tshirtSizeAdult_XL: Tcomb.maybe(Tcomb.Number),
  tshirtSizeAdult_XXL: Tcomb.maybe(Tcomb.Number),
  isNewMemberClass: Tcomb.Boolean,
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
        color: '#878B3F',
        //color: '#999999',
        fontSize: 17,
        marginBottom: 2
      },
      border:{
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#9E9382',
        //borderColor: '#FDCE55',
        //borderColor: '#C27942',
        //borderColor: '#cccccc',
        //borderColor: '#878B3F'
        marginBottom: 5,
        padding: 7
      },
      label:{
        color: '#A3938B',
        //color: '#000000',
        fontWeight: 'normal',
        //fontWeight: '500',
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
      sectionHeader3:{
        color: '#000000',
        fontWeight: '500',
        fontSize: 17,
        padding: 5
      },
      disclaimerText:{
        color: '#000000',
        fontSize: 11,
        textAlign: 'justify',
        padding: 7
      },
      musicHeader:{
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
        textDecorationLine: 'underline'
      },
      underlinedText:{
        textDecorationLine: 'underline'
      },
      italicizedText:{
        fontStyle: 'italic'
      },
      boldText:{
        fontWeight: 'bold'
      },
      musicText:{
        color: '#000000',
        fontSize: 11,
        textAlign: 'justify',
        padding: 7
      },
      tshirtHeader:{
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'left'
      },
      tshirtText:{
        color: '#000000',
        fontSize: 11,
        textAlign: 'justify',
        padding: 7
      },
      newMemberflexInputNoLabelWrap:{
        flex:2,
        padding: 2,
      },
      newMemberFlexInput:{
        alignItems: 'center',
        flex:1,
        padding: 2,
        flexWrap: 'nowrap'
      },
      contactText: {
        fontSize: 9,
        textDecorationLine: 'underline',
        fontStyle: 'italic',
      },
      logo: {
        width: 140,
        height: 130,
        resizeMode: 'contain',
        flex: 1
      },
      imgContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
         paddingBottom: 50,
      }
    });
    // var disclaimerName = locals.inputs.firstName.value + locals.inputs.lastName.value;
    return (
      <View>
        <View style={customFormStyles.imgContainer}>
            <Image source={require('./img/cave-quest-vbs-logo-HiRes-RGB.png')}
              style={customFormStyles.logo}/>
        </View>
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
            Please enter volunteer information if you would like to volunteer.
          </Text>
        </View>
        <View style={customFormStyles.border}>
          <Text style={customFormStyles.musicHeader}>
            Cave Quest MUSIC will be available by prior purchase ONLY!!
          </Text>
          <Text style={customFormStyles.musicText}>
            Music will be delivered one month prior to the start of VBS.
            CD cost:  $10.00 each.  At this time we cannot accept payments
            via this app.  Please pay by check and make payable to:
            &nbsp;&nbsp;
            <Text style={customFormStyles.underlinedText}>
              Oak Ridge UM Church: memo: VBS music.
            </Text>
            &nbsp;&nbsp;
            <Text>
              No additional copies will be available; this is by&nbsp;
            </Text>
            <Text style={customFormStyles.italicizedText}>
              prior order only.
            </Text>
          </Text>
          <Text style={customFormStyles.sectionHeader3}>
            Music ordered:
          </Text>
          <View style={customFormStyles.horizontalInputContainer}>
            <View style={customFormStyles.flexInput}>
              {locals.inputs.cdQuantityOrdered}
            </View>
            <View style={customFormStyles.flexInput}>
              {locals.inputs.cdCheckAmount}
            </View>
            <View style={customFormStyles.flexInput}>
              {locals.inputs.cdCheckNumber}
            </View>
          </View>
        </View>
        <View style={customFormStyles.border}>
          <Text style={customFormStyles.tshirtHeader}>
            T-shirt Size Desired:
          </Text>
          <Text style={customFormStyles.tshirtText}>
            <Text style={customFormStyles.underlinedText}>
              If you are unsure, size up!
            </Text>
            &nbsp;&nbsp;All T-shirts are 50/50% pre-shrunk.  To ensure a T-shirt, all
            registration information must be complete and received by the
            church office by&nbsp;&nbsp;
            <Text style={customFormStyles.boldText}>
              May 15, 2016.&nbsp;&nbsp;
            </Text>
            No exceptions!&nbsp;&nbsp;
            <Text style={customFormStyles.boldText}>
              ONLY child/youth participants and adult volunteers who serve
              3 nights or more will receive a T-shirt.  No switching of sizes
              at registration, and we cannot order extras.
            </Text>
            &nbsp;&nbsp;
            <Text style={customFormStyles.underlinedText}>
              If you are unsure, size up!
            </Text>
          </Text>
          <View style={customFormStyles.horizontalInputContainer}>
            <View style={customFormStyles.flexInput}>
              {locals.inputs.tshirtSizeC_XS}
            </View>
            <View style={customFormStyles.flexInput}>
              {locals.inputs.tshirtSizeC_SM}
            </View>
            <View style={customFormStyles.flexInput}>
              {locals.inputs.tshirtSizeC_MD}
            </View>
          </View>
          <View style={customFormStyles.horizontalInputContainer}>
            <View style={customFormStyles.flexInput}>
              {locals.inputs.tshirtSizeC_LG}
            </View>
            <View style={customFormStyles.flexInput}>
              {locals.inputs.tshirtSizeY_XL}
            </View>
            <View style={customFormStyles.flexInput}>
              {locals.inputs.tshirtSizeAdult_SM}
            </View>
          </View>
          <View style={customFormStyles.horizontalInputContainer}>
            <View style={customFormStyles.flexInput}>
              {locals.inputs.tshirtSizeAdult_MD}
            </View>
            <View style={customFormStyles.flexInput}>
              {locals.inputs.tshirtSizeAdult_LG}
            </View>
            <View style={customFormStyles.flexInput}>
              {locals.inputs.tshirtSizeAdult_XL}
            </View>
            <View style={customFormStyles.flexInput}>
              {locals.inputs.tshirtSizeAdult_XXL}
            </View>
          </View>
        </View>
        <View style={customFormStyles.border}>
          <View style={customFormStyles.horizontalInputContainer}>
            <View style={customFormStyles.newMemberflexInputNoLabelWrap}>
              <Text style={customFormStyles.label}>
                &#10070;&nbsp;
                <Text style={customFormStyles.italicizedText}>
                  Parents interested in New
                  &nbsp;&nbsp;&nbsp;&nbsp;Member/Get Acquainted Class?
                </Text>
              </Text>
            </View>
            <View style={customFormStyles.newMemberFlexInput}>
              {locals.inputs.isNewMemberClass}
            </View>
          </View>
          <Text style={customFormStyles.helpText}>
            Class meets M/T of VBS Week.
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
            In the event of sickness or some medical emergency, I request that my child
            receive any medical attention or treatment deemed necessary; therefore, I give permission to
            any hospital, doctor, and/or health care provider to transport, treat, and/or admit my child
            for care.  I understand that I am responsible for all expenses and charges for the treatment
            and care of my child.  In the event that I am not present at the time of the emergency or
            cannot be contacted, my care has been entrusted to the staff and designated ministry leadership
            of Oak Ridge UMC.  I also release from liability any and all agents of ORUMC, the volunteers and
            staff in case of an accident and/or injury.
          </Text>
          <View style={customFormStyles.border}>
            <Text style={customFormStyles.sectionHeader3}>
              Insurance Information:
            </Text>
            {locals.inputs.parentInsuranceCompany}
            {locals.inputs.parentInsuranceNumber}
            {locals.inputs.parentInsuranceGroup}
          </View>
          <View style={customFormStyles.horizontalInputContainer}>
            <View style={customFormStyles.flexInputNoLabelWrap}>
              <Text style={customFormStyles.label}>
                Yes, I accept:*
              </Text>
            </View>
            <View style={customFormStyles.flexInput}>
              {locals.inputs.isAcceptTerms}
            </View>
          </View>
          <Text style={customFormStyles.helpText}>
            NOTE:  To register, you must accept the terms of agreement.
          </Text>
        </View>
        <View style={customFormStyles.border}>
          <View style={customFormStyles.horizontalInputContainer}>
            <Text>
             <Text style={customFormStyles.contactText}>
               Oak Ridge UMC
             </Text>
             &nbsp;&nbsp;
             <Text style={customFormStyles.contactText}>
               2424 Oak Rige Rd.
             </Text>
             &nbsp;&nbsp;
             <Text style={customFormStyles.contactText}>
               Oak Ridge, NC 27310
             </Text>
             &nbsp;&nbsp;
             <Text style={customFormStyles.contactText}>
               336-643-4690
             </Text>
           </Text>
          </View>
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
			placeholder: "Child's First Name*",
      // placeholderTextColor: '#3E352F'
		},
		lastName: {
			error: "Child's last name is required",
			placeholder: "Child's Last Name*",
      //placeholderTextColor: '#000000'
		},
		gender: {
			error: "Child's gender is required",
			order: 'asc',
			nullOption: {value: '', text: "Child's Gender*"}
		},
		streetAddress: {
			error: "Street address is required",
			placeholder: "Street Address*",
      //placeholderTextColor: '#000000'
		},
		city: {
			error: "City is required",
			placeholder: "City*",
      //placeholderTextColor: '#000000'
		},
		state: {
			error: "State is required*",
			placeholder: "State*",
      //placeholderTextColor: '#000000'
		},
		zipCode: {
			placeholder: "Zip code*",
      //placeholderTextColor: '#000000'
		},
		homePhoneNumber: {
			error: "A home phone number is required",
			placeholder: "Home Phone Number*",
      //placeholderTextColor: '#000000'
		},
		cellPhoneNumber: {
			placeholder: "Cell Phone Number",
      //placeholderTextColor: '#000000'
		},
		homeEmailAddress: {
			placeholder: "Home Email Address",
      //placeholderTextColor: '#000000'
		},
		age: {
			error: "Child's age is required",
      placeholder: "Child's Age*",
      //placeholderTextColor: '#000000'
		},
		DOB: {
      mode: "date",
      // placeholder: "Child's Date of Birth*"
		},
    schoolGrade: {
      placeholder: "Child's 2016-2017 School Grade",
      //placeholderTextColor: '#000000'
    },
    schoolName: {
			error: "Child's school name is required",
      placeholder: "Child's School Name*",
      //placeholderTextColor: '#000000'
    },
    motherName: {
			// error: "Child's mother's name is required",
      placeholder: "Child's Mother's Name",
      //placeholderTextColor: '#000000'
    },
    fatherName: {
			// error: "Child's father's name is required",
      placeholder: "Child's Father's Name",
      //placeholderTextColor: '#000000'
    },
    otherGuardianName: {
      placeholder: "Guardian Name",
      //placeholderTextColor: '#000000'
    },
    otherGuardianRelationship: {
      placeholder: "Guardian Relationship",
      //placeholderTextColor: '#000000'
    },
    otherGuardianPhoneNumber: {
      placeholder: "Guardian Phone Number",
      //placeholderTextColor: '#000000'
    },
    emergencyName: {
      error: "Emergency contact name is required.",
      placeholder: "Emergency Contact Name*",
      //placeholderTextColor: '#000000'
    },
    emergencyPhoneNumber: {
      error: "Emergency contact phone number is required.",
      placeholder: "Emergency Contact Number*",
      //placeholderTextColor: '#000000'
    },
    allergies:{
      placeholder: "Allergies or other medical conditions",
      //placeholderTextColor: '#000000'
    },
    homeChurch:{
      placeholder: "Home Church",
      //placeholderTextColor: '#000000'
    },
    friendRequest: {
      placeholder: "Friend requested to be placed with",
      //placeholderTextColor: '#000000'
    },
    isVolunteer: {
      label: " ",
      onTintColor: '#5C3B69'
    },
    volunteerAgeGroup: {
			order: 'asc',
			nullOption: {value: '', text: "Volunteer Age Group"}
    },
    isNurseryRequested: {
      label: " ",
      onTintColor: '#5C3B69'
    },
    volunteerChildName: {
      placeholder: "Volunteer Child's Name",
      //placeholderTextColor: '#000000'
    },
    volunteerChildAge: {
      placeholder: "Volunteer Child's Age",
      //placeholderTextColor: '#000000'
    },
    isAcceptTerms: {
        label: " ",
        onTintColor: '#5C3B69'
    },
    parentInsuranceCompany: {
      error: "Parent's insurance company required",
      placeholder: "Parent's Insurance Company*",
      //placeholderTextColor: '#000000'
    },
    parentInsuranceNumber: {
      error: "Parent's insurance number required",
      placeholder: "Parent's Insurance Number*",
      //placeholderTextColor: '#000000'
    },
    parentInsuranceGroup: {
      error: "Parent's insurance group required",
      placeholder: "Parent's Insurance Group*",
      //placeholderTextColor: '#000000'
    },
    cdQuantityOrdered: {
      placeholder: "# of CDs",
      //placeholderTextColor: '#000000'
    },
    cdCheckAmount: {
      placeholder: "Cost",
      //placeholderTextColor: '#000000',
      editable: false
    },
    cdCheckNumber: {
      placeholder: "Check #",
      //placeholderTextColor: '#000000'
    },
    tshirtSizeC_XS: {
      placeholder: "C/XS (2-4)",
      //placeholderTextColor: '#000000'
    },
    tshirtSizeC_SM: {
      placeholder: "C/SM (6-8)",
      //placeholderTextColor: '#000000'
    },
    tshirtSizeC_MD: {
      placeholder: "C/MD (10-12)",
      //placeholderTextColor: '#000000'
    },
    tshirtSizeC_LG: {
      placeholder: "C/LG (14-16)",
      //placeholderTextColor: '#000000'
    },
    tshirtSizeY_XL: {
      placeholder: "Y/XL (18-20)",
      //placeholderTextColor: '#000000'
    },
    tshirtSizeAdult_SM: {
      placeholder: "Adult SM",
      //placeholderTextColor: '#000000'
    },
    tshirtSizeAdult_MD: {
      placeholder: "Adult MD",
      //placeholderTextColor: '#000000'
    },
    tshirtSizeAdult_LG: {
      placeholder: "Adult LG",
      //placeholderTextColor: '#000000'
    },
    tshirtSizeAdult_XL: {
      placeholder: "Adult XL",
      //placeholderTextColor: '#000000'
    },
    tshirtSizeAdult_XXL:{
      placeholder: "Adult XXL",
      //placeholderTextColor: '#000000'
    },
    isNewMemberClass: {
      label: " ",
      onTintColor: '#5C3B69'
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
    //backgroundColor: '#48BBEC',
    backgroundColor: '#5C3B69',
    borderColor: '#5C3B69',
    //borderColor: '#48BBEC',
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
    backgroundColor: '#C8B8AA'
  }
});

module.exports = RegistrationForm;
