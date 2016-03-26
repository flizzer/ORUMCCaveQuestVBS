/* @flow */

'use strict';

const React = require('react-native');
const Tcomb = require('tcomb-form-native');
const Firebase = require('firebase');
const FirebaseURL = 'https://popping-torch-8932.firebaseio.com/';

class PersistentStorage extends React.Component {

  constructor(props: React.PropTypes) {
    super(props);
    this.databaseItems = this.getDatabaseItems().child('items');
  }

  getDatabaseItems() {
    return new Firebase(FirebaseURL);
  }

  saveChild(child : Tcomb.struct) {
    this.databaseItems.push({
      firstName: child.firstName,
      lastName: child.lastName,
      gender: child.gender,
      streetAddress: child.streetAddress,
      city: child.city,
      state: child.state,
      zipCode: child.zipCode,
      homePhoneNumber: child.homePhoneNumber,
      cellPhoneNumber: child.cellPhoneNumber,
      emailAddress: child.emailAddress,
      age: child.age,
      DOB: child.DOB,
      schoolGrade: child.schoolGrade,
      motherName: child.motherName,
      fatherName: child.fatherName,
      otherGuardianName: child.otherGuardianName,
      otherGuardianRelationship: child.otherGuardianRelationship,
      otherGuardianPhoneNumber: child.otherGuardianPhoneNumber,
      emergencyName: child.emergencyName,
      emergencyPhoneNumber: child.emergencyPhoneNumber,
      allergies: child.allergies,
      homeChurch: child.homeChurch,
      friendRequest: child.friendRequest,
      isVolunteer: child.isVolunteer,
      volunteerAgeGroup: child.volunteerAgeGroup,
      isNurseryRequested: child.isNurseryRequested,
      volunteerChildName: child.volunteerChildName,
      volunteerChildAge: child.volunteerChildAge,
      parentInsuranceCompany: child.parentInsuranceCompany,
      parentInsuranceNumber: child.parentInsuranceNumber,
      parentInsuranceGroup: child.parentInsuranceGroup,
      cdQuantityOrdered: child.cdQuantityOrdered,
      cdCheckAmount: child.cdCheckAmount,
      cdCheckNumber: child.cdCheckNumber,
      tshirtSizeC_XS: child.tshirtSizeC_XS,
      tshirtSizeC_SM: child.tshirtSizeC_SM,
      tshirtSizeC_MD: child.tshirtSizeC_MD,
      tshirtSizeC_LG: child.tshirtSizeC_LG,
      tshirtSizeY_XL: child.tshirtSizeY_XL,
      tshirtSizeAdult_SM: child.tshirtSizeAdult_SM,
      tshirtSizeAdult_MD: child.tshirtSizeAdult_MD,
      tshirtSizeAdult_LG: child.tshirtSizeAdult_LG,
      tshirtSizeAdult_XL: child.tshirtSizeAdult_XL,
      tshirtSizeAdult_XXL: child.tshirtSizeAdult_XXL,
      isNewMemberClass: child.isNewMemberClass,
      isAcceptTerms: child.isAcceptTerms
    });
  }
}

module.exports = PersistentStorage;
