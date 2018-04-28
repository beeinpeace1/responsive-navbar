import React from 'react';
import ReactDOM from 'react-dom';
import './Misc/misc';
import './index.css';
import Layout from './Components/Layout';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>, document.getElementById('root'));
  registerServiceWorker();
