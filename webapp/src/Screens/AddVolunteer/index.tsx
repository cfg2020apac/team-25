import React, { FC } from 'react';
//import { Box, CircularProgress } from '@material-ui/core';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
//import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { makeStyles } from '@material-ui/core/styles';

const db = firebase.firestore();

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'grid',
      marginTop: theme.spacing(8),
      flexDirection: 'column',
      alignItems: 'center',
    }
  }));



const volunteerSchema = yup.object().shape({
  // address: {
  //   business: admin.firestore.GeoPoint;
  //   primaryAddress: true;
  //   residential: admin.firestore.GeoPoint;
  // };
  // alternateEmail: string;
  alternateEmail: yup.string(),
  // birthdate: admin.firestore.Timestamp;
  // chineseName: string;
  chineseName: yup.string(),
  // codeOfConduct: {
  //   timestamp: admin.firestore.Timestamp;
  //   typedSignature: string;
  //   waiverSigned: boolean;
  //   wasConvincted: boolean;
  // };
  // createdOn: admin.firestore.Timestamp;
  // educationLevel: string;
  educationLevel: yup.string(),
  // employmentStatus: string;
  employmentStatus: yup.string(),
  // firstName: string;
  firstName: yup.string(),
  // gender: string;
  gender: yup.string(),
  // lastLoggedInOn: admin.firestore.Timestamp;
  // lastModifiedOn: admin.firestore.Timestamp;
  // mainEmail: string;
  // permanentId: {
  //   country: string;
  //   type: string;
  //   value: string;
  // };
  // phoneInfo: {
  //   business: string;
  //   cell: null;
  //   home: null;
  //   primaryPhone: string;
  // };
  // registrationStatus: boolean;
  // volunteerSkills: {
  //     proficiencyLevel: number;
  //     skillId: admin.firestore.DocumentReference;
  // }[];
});

const AddVolunteerScreen: FC = () => {
  const history = useHistory();

  const onVolunteerFormSubmit = async (formValues) => {
    // '2012-01-08'
    const currentServerTime = firebase.firestore.FieldValue.serverTimestamp();

    const createdOn = firebase.firestore.FieldValue.serverTimestamp();

    const lastLoggedInOn = firebase.firestore.FieldValue.serverTimestamp();
    
    const lastModifiedOn = firebase.firestore.FieldValue.serverTimestamp();
    
    // Generating Firebase timestamp from JS Date object
    // var myTimestamp = firebase.firestore.Timestamp.fromDate(new Date());

    const newVolunteerRef = db.collection('volunteers').doc();
    try {
      await newVolunteerRef.set(formValues);
      history.push('/complete')
    } catch (e) {
      // Error handling
    }
  }

  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={onVolunteerFormSubmit}
        validationSchema={volunteerSchema}
      >
        {({ isSubmitting }) => (
          <Form>
              
            <Field type="fullName" name="fullName" />
            <ErrorMessage name="fullName" component="div" />
            
            <Field type="chineseName" name="chineseName" />
            <ErrorMessage name="chineseName" component="div" />

            <Field type="gender" name="gender" />
            <ErrorMessage name="gender" component="div" />

            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />

            <Field type="alternativeEmail" name="alternativeEmail" />
            <ErrorMessage name="alternativeEmail" component="div" />

            <Field type="employmentStatus" name="employmentStatus" />
            <ErrorMessage name="employmentStatus" component="div" />
            
            <Field type="educationLevel" name="educationLevel" />
            <ErrorMessage name="educationLevel" component="div" />

            <Field type="volunteerSkills" name="volunteerSkills" />
            <ErrorMessage name="volunteerSkills" component="div" />
            

            <Field type="phoneNumber" name="phoneNumber" />
            <ErrorMessage name="phoneNumber" component="div" />

            <Field type="businessNumber" name="businessNumber" />
            <ErrorMessage name="businessNumber" component="div" />
 
            <Field type="permanentIDValue" name="permanentIDValue" />
            <ErrorMessage name="permanentIDValue" component="div" />

            <Field type="permanentIDCountry" name="permanentIDCountry" />
            <ErrorMessage name="permanentIDCountry" component="div" />

            <Field type="permanentIDType" name="permanentIDType" />
            <ErrorMessage name="permanentIDType" component="div" />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default AddVolunteerScreen;