import React, { FC } from 'react';
import { Box, CircularProgress } from '@material-ui/core';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';

import * as firebase from 'firebase/app';
import 'firebase/firestore';

const db = firebase.firestore();

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
  // gender: string;
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
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
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