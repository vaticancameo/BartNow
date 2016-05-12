import React from 'react';

export default class ScheduleItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { schedule } = this.props;

    let times;
    if (schedule) {
      const estimates = schedule.estimate;
      if (Array.isArray(estimates)) {
        times = estimates.map((est, i) => {
          return (<span key={i} className="time-car">{est.minutes}{isNaN(est.minutes)?'':'min'}</span>);
        })
      } else {
        times = (<span className="time-car">{estimates.minutes}{isNaN(estimates.minutes)?'':'min'}</span>);
      }

    }

    return (
      <li className="train">
        <span className="head-car">{schedule.abbreviation}</span>
        {times}
      </li>
    );
  }

}

ScheduleItem.propTypes = {
  schedule: React.PropTypes.object
}
