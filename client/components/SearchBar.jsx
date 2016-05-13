import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {station} = this.props;
    return (
      <div className="header">
        <h1>{station && station.name}</h1>
      </div>
    );
  }
}

SearchBar.propTypes = {
  station: React.PropTypes.object,
}
