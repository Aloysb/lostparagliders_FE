import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//React-router
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Router Transitions
import { AnimatedSwitch } from 'react-router-transition';
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

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <AnimatedSwitch
      // atEnter={{ opacity: 0 }}
      // atLeave={{ opacity: 0 }}
      // atActive={{ opacity: 1 }}
      // className='switch-wrapper'
      >
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
      </AnimatedSwitch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
