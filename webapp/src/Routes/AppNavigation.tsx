import React, { FC, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';
import Page404 from '../Screens/Page404';
import lazyImport from '../lazy-import';
import Complete from '../Screens/Complete';

const Home = lazyImport('../Screens/Home');
const Admin = lazyImport('../Screens/Admin');
const NGO = lazyImport('../Screens/NGO');
const Volunteer = lazyImport('../Screens/Volunteer');

const Appnavigation: FC = () => {
  return (
    <>
      <Suspense fallback={<LinearProgress />}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/admin' exact component={Admin} />
          <Route path='/ngo' exact component={NGO} />
          <Route path='/volunteer' exact component={Volunteer} />
          <Route path='/complete' exact component={Complete} />
          <Route path='/*' exact component={Page404} />
        </Switch>
      </Suspense>
    </>
  )
}

export default Appnavigation;

