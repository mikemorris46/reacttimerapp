import React, { Component, PropTypes } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.formatSeconds = this.formatSeconds.bind(this);
  };

  formatSeconds(totalSeconds) {
    let seconds = 0;
    let minutes = 0;

    seconds = totalSeconds % 60;
    minutes = Math.floor(totalSeconds / 60);

    if(seconds < 10) {
      seconds = '0' + seconds
    }

    if(minutes < 10) {
      minutes = '0' + minutes
    }

    return minutes + ':' + seconds;
  };

  render() {
    let { totalSeconds } = this.props;

    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
};

Clock.defaultProps = {
  totalSeconds: 0
};

Clock.propTypes = {
  totalSeconds: React.PropTypes.number
};

export default Clock;
