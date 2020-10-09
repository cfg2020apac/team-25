import React, { FC, useState } from 'react';
import { Box, Button, Card, CardContent, CircularProgress, Step, StepLabel, Stepper} from '@material-ui/core';
import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
import GridBase from '@material-ui/core/Grid';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import getDocumentReference from '../../Utils/getDocumentReference';
import { mixed, number, object } from 'yup';
import styled from 'styled-components';

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
            gName: '',
            corpName: '',
            position: '',
            corpPosition: '',
            email: '',
            corpEmail: '',
            phone: '',
            corpPhone: '',
            affiliate: '',
            facility: '',
            focusArea: '',
            funding: '',
            IRDNo: '',
            location: '',
            beneficiaries: '',
            staff: '',
            servedPopGrp: '',
            SATYear: '',
            section88: '',
            subvented: '',
            skillbased: '',
            recruitPlat: '',
            recruitRemark: '',
          }}
          onSubmit={async (values) => {
            console.log('values', values);
          }}
        >
          <FormikStep label="Partner Registration - Contact Person(1/3)">
            <Box>
            <Container container paddingBottom={2}>
              <Grid item sm={2}>
                <label htmlFor="gName">Name</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="gName" component={TextField}/>
              </Grid>
              <Grid item sm={2}>
                <label htmlFor="corpName">Name</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="corpName" component={TextField}/>
              </Grid>
            </Container>
            <Container container paddingBottom={2}>
              <Grid item sm={2}>
                <label htmlFor="position">Position</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="position" component={TextField}/>
              </Grid>
              <Grid item sm={2}>
                <label htmlFor="corpPosition">Position</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="corpPosition" component={TextField}/>
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
                <label htmlFor="corpEmail">Email</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="corpEmail" component={TextField}/>
              </Grid>
            </Container>
            <Container container paddingBottom={2}>
              <Grid item sm={2}>
                <label htmlFor="phone">Phone number</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="phone" component={TextField}/>
              </Grid>
              <Grid item sm={2}>
                <label htmlFor="corpPhone">Phone Number</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="corpPhone" component={TextField}/>
              </Grid>
            </Container>
            </Box>
          </FormikStep>
          <FormikStep label="Partner Registration - Contact Person(2/3)">
            <Box>
            <Container container paddingBottom={2}>
              <Grid item sm={2}>
                <label htmlFor="affiliate">Affiliate</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="affiliate" component={TextField}/>
              </Grid>
              <Grid item sm={2}>
                <label htmlFor="servedPopGrp">servedPopGrp</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="servedPopGrp" component={TextField}/>
              </Grid>
            </Container>
            <Container container paddingBottom={2}>
              <Grid item sm={2}>
                <label htmlFor="facility">facility</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="facility" component={TextField}/>
              </Grid>
              <Grid item sm={2}>
                <label htmlFor="section88">section88</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="section88" component={TextField}/>
              </Grid>
            </Container>
            <Container container paddingBottom={2}>
              <Grid item sm={2}>
                <label htmlFor="focusArea">focusArea</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="focusArea" component={TextField}/>
              </Grid>
              <Grid item sm={2}>
                <label htmlFor="subvented">subvented</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="subvented" component={TextField}/>
              </Grid>
            </Container>
            <Container container paddingBottom={2}>
              <Grid item sm={2}>
                <label htmlFor="funding">funding</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="funding" component={TextField}/>
              </Grid>
              <Grid item sm={2}>
                <label htmlFor="skillbased">skillbased Number</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="skillbased" component={TextField}/>
              </Grid>
            </Container>
            <Container container paddingBottom={2}>
              <Grid item sm={2}>
                <label htmlFor="IRDNo">IRDNo</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="IRDNo" component={TextField}/>
              </Grid>
              <Grid item sm={2}>
                <label htmlFor="recruitPlat">recruitPlat Number</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="recruitPlat" component={TextField}/>
              </Grid>
            </Container>
            <Container container paddingBottom={2}>
              <Grid item sm={2}>
                <label htmlFor="location">location</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="location" component={TextField}/>
              </Grid>
              <Grid item sm={2}>
                <label htmlFor="recruitRemark">recruitRemark Number</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="recruitRemark" component={TextField}/>
              </Grid>
            </Container>
            <Container container paddingBottom={2}>
              <Grid item sm={2}>
                <label htmlFor="beneficiaries">beneficiaries</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="beneficiaries" component={TextField}/>
              </Grid>
            </Container>
            <Container container paddingBottom={2}>
              <Grid item sm={2}>
                <label htmlFor="staff">staff</label>
              </Grid>
              <Grid item sm={4}>
                <Field name="staff" component={TextField}/>
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