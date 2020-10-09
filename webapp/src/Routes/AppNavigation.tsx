import React, { FC, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';
import Page404 from '../Screens/Page404';
import lazyImport from '../lazy-import';
<<<<<<< HEAD
import Complete from '../Screens/Complete';
=======
import { withRouter } from "react-router";
import TopNav from '../Components/TopNav';
>>>>>>> bugfix

const Home = lazyImport('../Screens/Home');
const Admin = lazyImport('../Screens/Admin');
const NGO = lazyImport('../Screens/NGO');
const Volunteer = lazyImport('../Screens/Volunteer');

const Main = withRouter(({location})=>{
  let t = "";
  if(location.pathname.includes('admin'))
    t = "admin";
  else if(location.pathname.includes('ngo'))
    t = "ngo";
  else if(location.pathname.includes('volunteer'))
    t = "volunteer";
  return(
    <>
      {location.pathname != "/" && location.pathname!="error" && (<TopNav type={t}/>)}
      <Route path='/' exact component={Home} />
      <Route path='/admin' exact component={Admin} />
      <Route path='/ngo' exact component={NGO} />
      <Route path='/volunteer' exact component={Volunteer} />
      <Route path='/error' exact component={Page404} />
    </>
    );
});

const Appnavigation: FC = () => {
  return (
    <>
      <Suspense fallback={<LinearProgress />}>
        <Switch>
<<<<<<< HEAD
          <Route path='/' exact component={Home} />
          <Route path='/admin' exact component={Admin} />
          <Route path='/ngo' exact component={NGO} />
          <Route path='/volunteer' exact component={Volunteer} />
          <Route path='/complete' exact component={Complete} />
          <Route path='/*' exact component={Page404} />
=======
          <Main/>
>>>>>>> bugfix
        </Switch>
      </Suspense>
    </>
  )
}

export default Appnavigation;

