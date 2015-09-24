const strippy = require('./strippy');
const { expect } = require('chai');

describe('The Strippy Function', () => {
  it('extracts nothing when no p tags are present', () => {
    expect(strippy('abc')).to.equal('abc');
  });

  it('will strip a p tag from text', () => {
    expect(strippy('<p>abc</p>')).to.equal('abc');
  });
});
