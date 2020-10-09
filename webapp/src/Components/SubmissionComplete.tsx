import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import CheckIcon from '../Assets/check_icon.svg';

const RootContainer = styled.div`
  padding: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const CheckIconImage = styled.img`
  margin-bottom: 24px;
  width: 300px;
  height: auto;
`

const SubmissionComplete: React.FC = () => {
  return (
    <RootContainer>
      <CheckIconImage src={CheckIcon} />
      <Typography variant="h3" component="h3">Submission Complete!</Typography>
    </RootContainer>
  );
};

export default SubmissionComplete;
