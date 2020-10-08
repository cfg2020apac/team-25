import React, { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Box, CircularProgress, Typography } from '@material-ui/core';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import getDocumentReference from '../../Utils/getDocumentReference';

export interface LandingScreenProps {

}

const LandingScreen: FC<LandingScreenProps> = (props) => {
  const classes = useStyles();
  const [indexData, loading, error] = useDocumentData(getDocumentReference('display', 'index'));

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

const useStyles = makeStyles<Theme, any>((theme) => ({

}));

export default LandingScreen;