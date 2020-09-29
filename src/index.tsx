import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//React-router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Router Transitions
import './style/react_router_transition/animatedSwitch.css';

//Tailwind's classNames
import './style/tailwind/tailwind.output.css';

//Global style for styled components.
import GlobalStyle from './style/styled_components/globalStyle';

//Import scenes
import LandingPage from './scenes/LandingPage/LandingPage';

const Search = React.lazy(() => import('./scenes/Search/SearchIndex'));
const RegisterStolenGear = React.lazy(() =>
  import('./scenes/RegisterStolenGear/RegisterStolenGear')
);
const NoMatchPage = React.lazy(() => import('./scenes/NoMatch/NoMatchPage'));

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path='/'>
            <LandingPage />
          </Route>
          <Route path='/search'>
            <Search />
          </Route>
          <Route path='/register'>
            <RegisterStolenGear />
          </Route>
          <Route path='/nomatch'>
            <NoMatchPage />
          </Route>
        </Suspense>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
