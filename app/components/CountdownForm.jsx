import React, { Component } from 'react';

class CountdownForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  };
  onSubmit(event) {
    event.preventDefault();

    let strSeconds = this.refs.seconds.value;
    if (strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  };

  render() {
    return (
      <div>
        <form className="countdown-form" ref="form" onSubmit={this.onSubmit}>
          <input type="text" ref="seconds" placeholder="Enter time in seconds" />
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
};

export default CountdownForm;
