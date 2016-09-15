import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import expect from 'expect';
import $ from 'jQuery';

import Controls from 'Controls';

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render pause when status is started', () => {
      const controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" onStatusChange={() => {}} />);
      const $el = $(ReactDOM.findDOMNode(controls));

      const $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    });

    it('should render start when status is paused', () => {
      const controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" onStatusChange={() => {}} />);
      const $el = $(ReactDOM.findDOMNode(controls));

      const $pauseButton = $el.find('button:contains(Start)');

      expect($pauseButton.length).toBe(1);
    });
  });
});
