/* @flow */

'use strict';

import React, {PropTypes} from 'react';
import {
  Text
  , ScrollView
  , Image
  , StyleSheet
  , TouchableHighlight
  , View
} from 'react-native';
// import {Tcomb} from 'tcomb-form-native';

const Tcomb = require('tcomb-form-native');
const Component = Tcomb.form.Component;
Tcomb.form.Form.stylesheet.textbox.normal.borderColor = '#9E9382';
Tcomb.form.Form.stylesheet.textbox.notEditable.backgroundColor = '#9E9382';
Tcomb.form.Form.stylesheet.textbox.notEditable.borderColor = '#9E9382';

const CustomFormTemplate = require('./customFormTemplate.js');
const PersistentStorage = require('./persistentStorage.js');
var persistentStorage = new PersistentStorage();
const SubmissionCompleteScreen = require('./submissionCompleteScreen.js');
const Mailer = require('./mailer.js');
var mailer = new Mailer();

// var {
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableHighlight,
//   View,
//   Image,
//   Alert
// } = React;
var Form = Tcomb.form.Form;
// var Gender = Tcomb.enums({
// 		M: 'Male',
// 		F: 'Female'
// });
//
// var ZipCode = Tcomb.refinement(Tcomb.Number,
//   function(n) {
//     return (n > 0 && n.toString().length == 5);
//   }
// );
// ZipCode.getValidationErrorMessage = function(value,path,context) {
// 	return 'A zip code is required';
// };
//
// var Age = Tcomb.refinement(Tcomb.Number,
//   function(n) {
//     return (n >= 3);
//   }
// );
// Age.getValidationErrorMessage = function(value,path,context) {
//   return 'Child must be 3 years of age or older';
// };
//
// var SchoolGrade = Tcomb.refinement(Tcomb.Number,
//   function(n) {
//       return (n <= 10);
//   }
// );
// SchoolGrade.getValidationErrorMessage = function(value,path,context) {
//     return "Child's grade for 2016-2017 school year must be 10th or less"
// };
//
// var VolunteerAgeGroup = Tcomb.maybe(Tcomb.enums({
//     E: 'Elementary',
//     P: 'Preschool',
//     O: 'Other'
// }));
//
var Child = Tcomb.struct({
    firstName: Tcomb.String,
//     lastName: Tcomb.String,
//     gender: Gender,
//     streetAddress: Tcomb.String,
//     city: Tcomb.String,
//     state: Tcomb.String,
//     zipCode: ZipCode,
//     homePhoneNumber: Tcomb.String,
//     cellPhoneNumber: Tcomb.maybe(Tcomb.String),
//     emailAddress: Tcomb.String,
//     age: Age,
//     DOB: Tcomb.Date,
//     schoolGrade: SchoolGrade,
//     schoolName: Tcomb.maybe(Tcomb.String),
//     motherName: Tcomb.String,
//     fatherName: Tcomb.String,
//     otherGuardianName: Tcomb.maybe(Tcomb.String),
//     otherGuardianRelationship: Tcomb.maybe(Tcomb.String),
//     otherGuardianPhoneNumber: Tcomb.maybe(Tcomb.String),
//     emergencyName: Tcomb.String,
//     emergencyPhoneNumber: Tcomb.String,
//     allergies: Tcomb.maybe(Tcomb.String),
//     homeChurch: Tcomb.maybe(Tcomb.String),
//     friendRequest: Tcomb.maybe(Tcomb.String),
//     isVolunteer: Tcomb.Boolean,
//     volunteerAgeGroup: VolunteerAgeGroup,
//     isNurseryRequested: Tcomb.Boolean,
//     volunteerChildName: Tcomb.maybe(Tcomb.String),
//     volunteerChildAge: Tcomb.maybe(Tcomb.Number),
//     parentInsuranceCompany: Tcomb.String,
//     parentInsuranceNumber: Tcomb.String,
//     parentInsuranceGroup: Tcomb.String,
//     cdQuantityOrdered: Tcomb.maybe(Tcomb.Number),
//     cdCheckAmount: Tcomb.maybe(Tcomb.Number),
//     cdCheckNumber: Tcomb.maybe(Tcomb.String),
//     tshirtSizeC_XS: Tcomb.maybe(Tcomb.Number),
//     tshirtSizeC_SM: Tcomb.maybe(Tcomb.Number),
//     tshirtSizeC_MD: Tcomb.maybe(Tcomb.Number),
//     tshirtSizeC_LG: Tcomb.maybe(Tcomb.Number),
//     tshirtSizeY_XL: Tcomb.maybe(Tcomb.Number),
//     tshirtSizeAdult_SM: Tcomb.maybe(Tcomb.Number),
//     tshirtSizeAdult_MD: Tcomb.maybe(Tcomb.Number),
//     tshirtSizeAdult_LG: Tcomb.maybe(Tcomb.Number),
//     tshirtSizeAdult_XL: Tcomb.maybe(Tcomb.Number),
//     tshirtSizeAdult_XXL: Tcomb.maybe(Tcomb.Number),
//     isNewMemberClass: Tcomb.Boolean,
//     isAcceptTerms: Tcomb.Boolean,
});

function getRegistrationFormTemplate(locals) {
  return new CustomFormTemplate(locals);
}

// var Options = {};

var Options = {
  template: getRegistrationFormTemplate,
  auto: 'placeholders',
  fields: {
    firstName: {
      error: "Child's first name is required",
      placeholder: "Child's First Name*",
    },
    lastName: {
      error: "Child's last name is required",
      placeholder: "Child's Last Name*",
    },
    gender: {
      error: "Child's gender is required",
      order: 'asc',
      nullOption: {value: '', text: "Child's Gender*"}
    },
    streetAddress: {
      error: "Street address is required",
      placeholder: "Street Address*",
    },
    city: {
      error: "City is required",
      placeholder: "City*",
    },
    state: {
      error: "State is required*",
      placeholder: "State*",
    },
    zipCode: {
      placeholder: "Zip code*",
    },
    homePhoneNumber: {
      error: "A home phone number is required",
      placeholder: "Home Phone Number*",
    },
    cellPhoneNumber: {
      placeholder: "Cell Phone Number",
    },
    emailAddress: {
      error: "An email address is required",
      placeholder: "Email Address*",
      autoCapitalize: false
    },
    age: {
      error: "Child's age is required",
      placeholder: "Child's Age*",
    },
    DOB: {
      mode: "date",
    },
    schoolGrade: {
      placeholder: "Child's 2016-2017 School Grade*",
    },
    schoolName: {
      error: "Child's school name is required",
      placeholder: "Child's School Name*",
    },
    motherName: {
      // error: "Child's mother's name is required",
      placeholder: "Child's Mother's Name",
    },
    fatherName: {
      // error: "Child's father's name is required",
      placeholder: "Child's Father's Name",
    },
    otherGuardianName: {
      placeholder: "Guardian Name",
    },
    otherGuardianRelationship: {
      placeholder: "Guardian Relationship",
    },
    otherGuardianPhoneNumber: {
      placeholder: "Guardian Phone Number",
    },
    emergencyName: {
      error: "Emergency contact name is required.",
      placeholder: "Emergency Contact Name*",
    },
    emergencyPhoneNumber: {
      error: "Emergency contact phone number is required.",
      placeholder: "Emergency Contact Number*",
    },
    allergies:{
      placeholder: "Allergies or other medical conditions",
    },
    homeChurch:{
      placeholder: "Home Church",
    },
    friendRequest: {
      placeholder: "Friend requested to be placed with",
    },
    isVolunteer: {
      label: " ",
      onTintColor: '#5C3B69'
    },
    volunteerAgeGroup: {
      order: 'asc',
      nullOption: { value: '', text: "Volunteer Age Group" }
    },
    isNurseryRequested: {
      label: " ",
      onTintColor: '#5C3B69'
    },
    volunteerChildName: {
      placeholder: "Volunteer Child's Name",
    },
    volunteerChildAge: {
      placeholder: "Volunteer Child's Age",
    },
    parentInsuranceCompany: {
      error: "Parent's insurance company required",
      placeholder: "Parent's Insurance Company*",
    },
    parentInsuranceNumber: {
      error: "Parent's insurance number required",
      placeholder: "Parent's Insurance Number*",
    },
    parentInsuranceGroup: {
      error: "Parent's insurance group required",
      placeholder: "Parent's Insurance Group*",
    },
    cdQuantityOrdered: {
      placeholder: "# of CDs",
    },
    cdCheckAmount: {
      placeholder: "Cost",
      editable: false
    },
    cdCheckNumber: {
      placeholder: "Check #",
    },
    tshirtSizeC_XS: {
      placeholder: "C/XS (2-4)",
    },
    tshirtSizeC_SM: {
      placeholder: "C/SM (6-8)",
    },
    tshirtSizeC_MD: {
      placeholder: "C/MD (10-12)",
    },
    tshirtSizeC_LG: {
      placeholder: "C/LG (14-16)",
    },
    tshirtSizeY_XL: {
      placeholder: "Y/XL (18-20)",
    },
    tshirtSizeAdult_SM: {
      placeholder: "Adult SM",
    },
    tshirtSizeAdult_MD: {
      placeholder: "Adult MD",
    },
    tshirtSizeAdult_LG: {
      placeholder: "Adult LG",
    },
    tshirtSizeAdult_XL: {
      placeholder: "Adult XL",
    },
    tshirtSizeAdult_XXL: {
      placeholder: "Adult XXL",
    },
    isNewMemberClass: {
      label: " ",
      onTintColor: '#5C3B69'
    },
    isAcceptTerms: {
      label: " ",
      onTintColor: '#5C3B69'
    }
  }
};

var VBSRegistrationForm = React.createClass ({

    // static propTypes = {
    //   title: PropTypes.string.isRequired,
    //   navigator: PropTypes.object.isRequired,
    // }

    // constructor(props, context) {
    //   super(props, context);
    //   this._onPress = this._onPress.bind(this);
    //   // this._onBack = this._onBack.bind(this);
    // }

    _onPress: function() {
      var child = this.refs.form.getValue();
      console.log(child);
      if (child != null) {
        var childUniqueId = persistentStorage.saveChild(child);
        mailer.sendMail(child, childUniqueId);
        this.props.navigator.push({
          component: SubmissionCompleteScreen,
          passProps: {
            emailAddress: child.emailAddress
          }
        });
      }
    },

    // _onBack() {
    //   // this.props.navigator.push({
    //   //   component: VBSRegistrationForm
    //   // });
    // }

  render: function() {
      return (
        <ScrollView contentContainerStyle={VBSRegistrationFormStyles.container}>
          <Form
            ref="form"
            type={Child}
            options={Options}
            />
          <TouchableHighlight
            style={VBSRegistrationFormStyles.button}
            onPress={this._onPress}
            underlayColor='#B09337'>
            <Text style={VBSRegistrationFormStyles.buttonText}>Register</Text>
          </TouchableHighlight>
        </ScrollView>
      );
    }
});

// class VBSRegistrationForm extends Component {
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     navigator: PropTypes.object.isRequired,
//   }
//
//   constructor(props, context) {
//     super(props, context);
//     this._onForward = this._onForward.bind(this);
//     this._onBack = this._onBack.bind(this);
//   }
//
//   _onForward() {
//     var child = this.refs.form.getValue();
//     console.log(child);
//     if (child != null) {
//       var childUniqueId = persistentStorage.saveChild(child);
//       mailer.sendMail(child, childUniqueId);
//       this.props.navigator.push({
//         component: SubmissionCompleteScreen,
//         passProps: {
//           emailAddress: child.emailAddress
//         }
//       });
//     }
//   }
//
//   _onBack() {
//     // this.props.navigator.push({
//     //   component: VBSRegistrationForm
//     // });
//   }
//
//   render() {
//     return (
//       // <Text>This is the VBSRegistrationForm</Text>
//       // options={Options}
//       <ScrollView contentContainerStyle={VBSRegistrationFormStyles.container}>
//         <Form
//           ref="form"
//           type={Child}
//
//           />
//         <TouchableHighlight
//           style={VBSRegistrationFormStyles.button}
//           onPress={this._onForward}
//           underlayColor='#B09337'>
//           <Text style={VBSRegistrationFormStyles.buttonText}>Register</Text>
//         </TouchableHighlight>
//       </ScrollView>
//     )
//   }
// }

var VBSRegistrationFormStyles = StyleSheet.create({
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
    backgroundColor: '#C8B8AA'
  }
});

module.exports = VBSRegistrationForm;
