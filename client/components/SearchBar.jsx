import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {station} = this.props;
    // console.log(station);
    return (
      <h1>{station && station.name}</h1>
    );
  }
}

SearchBar.propTypes = {
  station: React.PropTypes.object,
}
