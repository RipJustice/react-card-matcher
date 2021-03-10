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
    <div className="p-grid cm-app">
      <div className="cm-header p-col-12 p-grid p-ai-center p-nogutter">
        <h1>Card Matching Game</h1>
      </div>
      <div className="cm-main-wrapper p-col-12">
        <main className="cm-main-panel p-grid p-jc-center p-ai-center p-nogutter">
          <div className="cm-page-container p-shadow-2">
            <Suspense fallback={''}>
              <Router>
                <Route exact path="/" component={CardGame} />      
              </Router>
            </Suspense>
          </div>
        </main>
      </div>
    </div>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
