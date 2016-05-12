import React from 'react';

export default class ScheduleItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { schedule } = this.props;
    console.log(schedule.estimate);
    let estimate;
    if (schedule) {
      estimate = schedule.estimate.map((est) => {
        return (
            <span>{est.minutes}&nbsp;</span>
        );
      });
    }

    return (
      <li>
        <strong>{schedule.abbreviation}</strong>
        {estimate}
      </li>
    );
  }
}

ScheduleItem.propTypes = {
  schedule: React.PropTypes.object
}
