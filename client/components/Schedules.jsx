import React from 'react';

import getEstimates from '../getEstimates.js';
import ScheduleItem from './ScheduleItem';

export default class Schedules extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departures: []
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.station) {
      getEstimates(nextProps.station.abbr).then((departures) => {
        this.setState({departures});
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  render() {
    const {departures} = this.state;

    let scheduleItems;
    if (departures) {
      scheduleItems = departures.map((route, i) => {
        return <ScheduleItem key={i} schedule={route} />;
      });
    }

    return (
      <ul className="trains">
       {scheduleItems}
      </ul>
    );
  }
}

Schedules.propTypes = {
  station: React.PropTypes.object
}
