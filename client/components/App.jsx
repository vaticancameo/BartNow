import React from 'react';

import { quadtreePromise } from '../quadtree.js';
import SearchBar from './SearchBar';
import Schedules from './Schedules';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quadtree: {}
    }

    this.returnNearestStation = this.returnNearestStation.bind(this);
  }

  componentDidMount() {
    quadtreePromise.then((tree) => {
      this.setState({quadtree: tree});
    }).catch((err) => {
      console.log(err);
    });
  }

  returnNearestStation(loc) {
    if (loc && Object.keys(this.state.quadtree).length) {
      return this.state.quadtree.find(loc.lat, loc.lng);
    }
  }

  render() {
    const {loc} = this.props;
    const station = this.returnNearestStation(loc);

    return (
      <div>
        <SearchBar station={station} />
        <Schedules station={station} />
      </div>
    );
  }
}

App.propTypes = {
  loc: React.PropTypes.object
}
