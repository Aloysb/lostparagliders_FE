import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//Tailwind's classNames
import './style/tailwind/tailwind.output.css';

//Global style for styled components.
import GlobalStyle from './style/styled_components/globalStyle';

//Components
import Home from './scenes/Home/HomeIndex';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
