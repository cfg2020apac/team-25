import React, { FC } from 'react';
import { Box, CircularProgress, Typography } from '@material-ui/core';
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
      <Typography component="h1" variant="h1">{heading}</Typography>
      <Typography>{message}</Typography>
    </Box>
  )
}

export default LandingScreen;