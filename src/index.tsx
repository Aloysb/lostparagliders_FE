import React from 'react';
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
import Search from './scenes/Search/SearchIndex';
import RegisterStolenGear from './scenes/RegisterStolenGear/RegisterStolenGear';
import NoMatchPage from './scenes/NoMatch/NoMatchPage';
import MatchPage from './scenes/Match/MatchPage';
import MatchRegisterPage from './scenes/MatchRegister/MatchRegisterPage';
import NotMatching from './scenes/NotMatching/NotMatching';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route path='/search'>
          <Search />
        </Route>
        <Route path='/register'>
          <RegisterStolenGear />
        </Route>
        <Route path='/match/register'>
          <MatchRegisterPage />
        </Route>
        <Route exact path='/match'>
          <MatchPage />
        </Route>
        <Route path='/notmatching'>
          <NotMatching />
        </Route>
        <Route path='/nomatch'>
          <NoMatchPage />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
