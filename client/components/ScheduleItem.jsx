import React from 'react';
import classnames from 'classnames';

export default class ScheduleItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { schedule } = this.props;

    let times;
    if (schedule) {
      const estimate = schedule.estimate;
      if (Array.isArray(estimate)) {
        times = estimate.map((est, i) => {
          const className = classnames('time-car car', est.color);
          return (<span key={i} className={className}>{est.minutes}{(i===0 && !isNaN(est.minutes))?' min':''}</span>);
        })
      } else {
        const className = classnames('time-car car', estimate.color);
        times = (<span className={className}>{`${estimate.minutes}${isNaN(estimate.minutes)?'':' min'}`}</span>);
      }

    }

    return (
      <li className="train">
        <span className="head-car car">{schedule.destination}</span>
        {times}
      </li>
    );
  }

}

ScheduleItem.propTypes = {
  schedule: React.PropTypes.object
}
