import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const UseComponents = lazy(() => import('../pages/UseComponents'));
const UseEvents = lazy(() => import('../pages/UseEvents'));
const RenderTools = lazy(() => import('../pages/RenderTools'));
const UseApis = lazy(() => import('../pages/UseApis'));
const UseRedux = lazy(() => import('../pages/UseRedux'));

class AppRouter extends Component {

  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<div></div>}>
          <Switch>
            <Route path="/home" component={Home} exact />
            <Route path="/use-components" component={UseComponents} exact />
            <Route path="/use-events" component={UseEvents} exact />
            <Route path="/render-tools" component={RenderTools} exact />
            <Route path="/use-apis" component={UseApis} exact />
            <Route path="/use-redux" component={UseRedux} exact />
            <Route>
              <Redirect to="/home" />
            </Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default AppRouter;
