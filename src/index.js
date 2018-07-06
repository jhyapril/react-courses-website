'use strict';

import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './styles/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


render(
  <Router browserHistory={browserHistory} routes={routes}/>,
  document.getElementById('app')
);

