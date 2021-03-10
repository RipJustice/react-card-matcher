import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './index.scss';
import reportWebVitals from './reportWebVitals';

const CardGame = React.lazy(() => import('./pages/CardMatch/CardMatch'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={''}>
      <Router>
        <Route exact path="/" component={CardGame} />      
      </Router>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
