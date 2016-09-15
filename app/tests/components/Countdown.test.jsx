import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import expect from 'expect';
import $ from 'jQuery';

import Countdown from 'Countdown';

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });
  describe('setHandleCountdown', () => {
    it('should set state and countdown properly', (done) => {
      const countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      // Have to use 'done' because setTimeout is asynchronous

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);
    });

    it('should not allow count to be negative', (done) => {
      const countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(1);

      // Have to use 'done' because setTimeout is asynchronous

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001);
    });
  });
});
