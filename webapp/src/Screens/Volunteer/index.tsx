import React, { FC, useState } from 'react';
import { Box, Button, Card, CardContent, CircularProgress, Step, StepLabel, Stepper} from '@material-ui/core';
import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
import GridBase from '@material-ui/core/Grid';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import getDocumentReference from '../../Utils/getDocumentReference';
import { mixed, number, object } from 'yup';
import styled from 'styled-components';
import sendToServer from '../../Utils/sendToServer';

const Grid = styled(GridBase)`
  .MuiGrid-root {
    flex-grow: 1;
  }
  text-align: center;
`;

const Container = styled(Grid)`
  height: 50%;
`

export interface NGOScreenProps {}

const NGOScreen: FC<NGOScreenProps> = (props) => {
  const [indexData, loading] = useDocumentData(getDocumentReference('display', 'index')); 

  const [step, setStep] = useState(1);
  if (loading) {
    return <CircularProgress size="large" />
  }

  const { heading, message } = (indexData || {}) as {
    heading: string;
    message: string;
  };
  return (
    <div style={{margin: "0 auto", width: "75%"}}>
      <Card>
        <CardContent>
          <FormikStepper
          initialValues={{
            fullName: '',
            phone: '',
            chineseName: '',
            businessNo: '',
            gender: '',
            email: '',
            id: '',
            altEmail: '',
            country: '',
            empStatus: '',
            type: '',
            educationLevel: '',
            volunteerSkill: ''
          }}
          onSubmit={async (values) => {
            await sendToServer(values);
          }}
        >
          <FormikStep label="Volunteer Registration">
            <Box>
            <Container container paddingBottom={2}>
              <Grid item sm={2}>
                <label htmlFor="fullName">Full Name</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="fullName" component={TextField}/>
              </Grid>
              <Grid item sm={2}>
                <label htmlFor="phone">Phone No.</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="phone" component={TextField}/>
              </Grid>
            </Container>
            <Container container paddingBottom={2}>
              <Grid item sm={2}>
                <label htmlFor="chineseName">Chinese Name</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="chineseName" component={TextField}/>
              </Grid>
              <Grid item sm={2}>
                <label htmlFor="businessNo">Business No.</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="businessNo" component={TextField}/>
              </Grid>
            </Container>
            <Container container paddingBottom={2}>
              <Grid item sm={2}>
                <label htmlFor="gender">Gender</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="gender" component={TextField}/>
              </Grid>
              <Grid item sm={2}>
                <label><b>Permanent ID</b></label>
              </Grid>
            </Container>
            <Container container paddingBottom={2}>
              <Grid item sm={2}>
                <label htmlFor="email">Email</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="email" component={TextField}/>
              </Grid>
              <Grid item sm={2}>
                <label htmlFor="id">ID</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="id" component={TextField}/>
              </Grid>
            </Container>
            <Container container paddingBottom={2}>
              <Grid item sm={2}>
                <label htmlFor="altEmail">Alternative Email</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="altEmail" component={TextField}/>
              </Grid>
              <Grid item sm={2}>
                <label htmlFor="country">Country</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="country" component={TextField}/>
              </Grid>
            </Container>
            <Container container paddingBottom={2}>
              <Grid item sm={2}>
                <label htmlFor="empStatus">Employment Status</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="empStatus" component={TextField}/>
              </Grid>
              <Grid item sm={2}>
                <label htmlFor="type">Type</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="type" component={TextField}/>
              </Grid>
            </Container>
            <Container container paddingBottom={2}>
              <Grid item sm={2}>
                <label htmlFor="educationLevel">Education Level</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="empStatus" component={TextField}/>
              </Grid>
            </Container>
            <Container container paddingBottom={2}>
              <Grid item sm={2}>
                <label htmlFor="volunteerSkill">Volunteer Skills</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="volunteerSkill" component={TextField}/>
              </Grid>
            </Container>
            <Container container paddingBottom={2}>
              <Grid item sm={2}>
                <label htmlFor="businessAddr">Business Address</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="volunteerSkill" component={TextField}/>
              </Grid>
            </Container>
            
            </Box>
          </FormikStep>
          </FormikStepper>
        </CardContent>
      </Card>
    </div>
  )
}

export default NGOScreen;

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
  label: string;
}

export function FormikStep({ children }: FormikStepProps) {
  return <>{children}</>;
}

export function FormikStepper({ children, ...props }: FormikConfig<FormikValues>) {
  const childrenArray = React.Children.toArray(children) as React.ReactElement<FormikStepProps>[];
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
        } else {
          setStep((s) => s + 1);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child, index) => (
              <Step key={child.props.label} completed={step > index || completed}>
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {currentChild}

          <Grid container spacing={2}>
            {step > 0 ? (
              <Grid item>
                <Button
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  onClick={() => setStep((s) => s - 1)}
                >
                  Back
                </Button>
              </Grid>
            ) : null}
            <Grid item>
              <Button
                startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
                disabled={isSubmitting}
                variant="contained"
                color="primary"
                type="submit"
              >
                {isSubmitting ? 'Submitting' : isLastStep() ? 'Submit' : 'Next'}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}