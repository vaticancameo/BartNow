import { Geolocation } from 'meteor/mdg:geolocation';
import { createContainer } from 'meteor/react-meteor-data';
import { Tracker } from 'meteor/tracker';
import { ReactiveDict } from 'meteor/reactive-dict';

import App from './App.jsx';

// this component reactively updates app with geolocation
export default AppContainer = createContainer(({ params }) => {
  if (Geolocation.error()) {
    console.log(Geolocation.error());
  }
  return { loc: Geolocation.latLng()};
}, App);
