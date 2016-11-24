/* @flow */

'use strict';

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const Tcomb = require('tcomb-form-native');

class CustomFormTemplate extends React.Component {
  constructor(locals: Tcomb.object, props: React.PropTypes) {
    super(props);
    return this.getCustomFormTemplate(locals);
  }

  getCustomFormTemplate(locals: Tcomb.object) {
    const customFormStyles = StyleSheet.create({
      horizontalInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      flexInput: {
        flex: 1,
        padding: 2,
        flexWrap: 'nowrap'
      },
      flexInputNoLabelWrap: {
        flex: 2,
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center'
      },
      helpText: {
        color: '#878B3F',
        fontSize: 17,
        marginBottom: 2
      },
      border: {
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#9E9382',
        marginBottom: 5,
        padding: 7
      },
      label: {
        color: '#A3938B',
        fontWeight: 'normal',
        fontSize: 17
      },
      sectionHeader1: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 17,
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        textAlign: 'center'
      },
      sectionHeader2: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center'
      },
      sectionHeader3: {
        color: '#000000',
        fontWeight: '500',
        fontSize: 17,
        padding: 5
      },
      disclaimerText: {
        color: '#000000',
        fontSize: 11,
        textAlign: 'justify',
        padding: 7
      },
      musicHeader: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
        textDecorationLine: 'underline'
      },
      underlinedText: {
        textDecorationLine: 'underline'
      },
      italicizedText: {
        fontStyle: 'italic'
      },
      boldText: {
        fontWeight: 'bold'
      },
      musicText: {
        color: '#000000',
        fontSize: 11,
        textAlign: 'justify',
        padding: 7
      },
      tshirtHeader: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'left'
      },
      tshirtText: {
        color: '#000000',
        fontSize: 11,
        textAlign: 'justify',
        padding: 7
      },
      newMemberflexInputNoLabelWrap: {
        flex: 2,
        padding: 2,
      },
      newMemberFlexInput: {
        alignItems: 'center',
        flex: 1,
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
        paddingTop: 30,
      }
     });

  //    return (
  //     <View>
  //       <View style={customFormStyles.imgContainer}>
  //          <Image
  //          source={require('./img/cave-quest-vbs-logo-LoRes-RGB.png')}
  //          style={customFormStyles.logo}/>
  //       </View>
  //       <View style={customFormStyles.border}>
  //         <View style={customFormStyles.horizontalInputContainer}>
  //           <View style={customFormStyles.flexInput}>
  //             {locals.inputs.firstName}
  //           </View>
  //           <View style={customFormStyles.flexInput}>
  //             {locals.inputs.lastName}
  //           </View>
  //         </View>
  //       </View>
  //     </View>
  //  );

    return (
      <View>
        <View style={customFormStyles.imgContainer}>
          <Image
            source={require('./img/cave-quest-vbs-logo-LoRes-RGB.png')}
            style={customFormStyles.logo}
          />
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
            <View>
              <View>
                {locals.inputs.DOB}
              </View>
            </View>
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
          <View style={customFormStyles.flexInput}>
            {locals.inputs.emailAddress}
          </View>
          <View style={customFormStyles.horizontalInputContainer}>
            <View style={customFormStyles.flexInput}>
              {locals.inputs.cellPhoneNumber}
            </View>
          </View>
          <Text style={customFormStyles.helpText}>
            Please enter a valid email address.  A confirmation email will be sent once your child has been registered.
            This email address will also be used for updates regarding VBS week.
            If you'd rather receive updates via cell phone, please provide a valid number.
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
}
module.exports = CustomFormTemplate;
