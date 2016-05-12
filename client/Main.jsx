import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import AppContainer from './components/AppContainer';

Meteor.startup(() => {
  render(<AppContainer />, document.getElementById('app'));
});
