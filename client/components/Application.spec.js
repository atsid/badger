require('../common.spec/spec.helpers');
const { expect } = require('chai');
const React = require('react');
const ReactTestUtils = require('react-addons-test-utils');
const Application = require('./Application');

describe('Application Component', () => {
  it('should load', () => {
    const renderedComponent = ReactTestUtils.renderIntoDocument(
      <Application />
    );
    expect(renderedComponent).to.exist;
  });
});
