import React, { FC } from 'react';
import { Box, CircularProgress, Typography, Button } from '@material-ui/core';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import getDocumentReference from '../../Utils/getDocumentReference';

export interface VolunteerScreenProps {}

const VolunteerScreen: FC<VolunteerScreenProps> = (props) => {
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
      Volunteer
    </Box>
  )
}

export default VolunteerScreen;