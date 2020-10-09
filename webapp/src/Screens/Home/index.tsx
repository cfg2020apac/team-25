import React, { FC } from 'react';
import { Box, CircularProgress, Typography, Button, Card} from '@material-ui/core';
import GridBase from '@material-ui/core/Grid';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import getDocumentReference from '../../Utils/getDocumentReference';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const cardHeight = 400;

const Title = styled.p`
  font-size: 1.8em;
  color: #e1e1e1;
`

const CardContent = styled.p`
  font-size: 1.6em;
  margin-top: ${cardHeight/3}px;
  color: #eee;
`

const Grid = styled(GridBase)`
  .MuiGrid-root {
    flex-grow: 1;
  }
  a{
    text-decoration: none; 
  }
  text-align: center;
  font-size: 1.75em;
`;

const Container = styled(Grid)`
  height: 50%;
`

const Ngo = styled(Card)`
  background-color: #6200EE;
  height: ${cardHeight}px;
`;

const Admin = styled(Card)`
  background-color: #e94560;
  height: ${cardHeight}px;
`;

const Volunteer = styled(Card)`
  background-color: #018786;
  height: ${cardHeight}px;
`;

export interface LandingScreenProps{ }

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
      <Container container direction="row" justify="center" alignItems="center">
        <Grid item sm={12} align="center">
          <Title>
            Who are you?
          </Title>
        </Grid>
        <Grid item sm={3}>
          <Link to={'/admin'}>
            <Admin>
              <CardContent>
                Admin
              </CardContent>
            </Admin>
          </Link>
        </Grid>
        <Grid item sm={3}>
          <Link to="/ngo">
            <Ngo>
              <CardContent>
                NGO
              </CardContent>
            </Ngo>
          </Link>
        </Grid>
        <Grid item sm={3}>
          <Link to="/volunteer">
            <Volunteer>
              <CardContent>
                Volunteer
              </CardContent>
            </Volunteer>
          </Link>
        </Grid>
    </Container>
  )
}

export default LandingScreen;