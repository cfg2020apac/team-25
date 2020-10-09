import React, { FC } from 'react';
import { Box, CircularProgress, Typography, Button } from '@material-ui/core';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import getDocumentReference from '../../Utils/getDocumentReference';

export interface LandingScreenProps {}

const LandingScreen: FC<LandingScreenProps> = (props) => {
  const [indexData, loading] = useDocumentData(getDocumentReference('display', 'index'));

  if (loading) {
    return <CircularProgress size="large" />
  }

  const { heading, message } = (indexData || {}) as {
    heading: string;
    message: string;
  };

  return (
    <Box>
      <Button variant="contained" href="/admin">
         Admin
      </Button>
      <Button variant="contained" href="/ngo">
         NGO
      </Button>
      <Button variant="contained" color="primary" href="/volunteer">
        Volunteer
      </Button>
    </Box>
  )
}

export default LandingScreen;