import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';

import {App} from '../../ui/layouts/app';
import {LandingPage} from '../../ui/pages/landingpage'

Meteor.startup(()=>{
  render(
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={LandingPage} />
      </Route>
    </Router>
    ,document.getElementById('react-root'));
});
