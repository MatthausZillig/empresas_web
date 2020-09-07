import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Spinner, Header } from '../components';
import { UserStorage } from '../contexts/UserContext';

const Main = lazy(() => import('../pages/main/main'));
const Home = lazy(() => import('../pages/home/home'));

const Router = () => {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Suspense fallback={<Spinner lazy />}>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/home" component={Home} />
          </Switch>
        </Suspense>
      </UserStorage>
    </BrowserRouter>
  );
};

export default Router;
