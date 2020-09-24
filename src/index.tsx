import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

//Tailwind's classNames
import './style/tailwind/tailwind.output.css';

//Global style for styled components.
import GlobalStyle from './style/styled_components/globalStyle';

//Import scenes
import LandingPage from './scenes/LandingPage/LandingPage';
import Search from './scenes/Search/SearchIndex';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route path='/'>
          <LandingPage />
        </Route>
        <Route path='/search'>
          <Search />
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
