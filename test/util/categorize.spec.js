import { expect } from 'chai';
import categorize from '../../src/util/categorize';

const TRAVIS_BADGE = '<a href="https://travis-ci.org/atsid/badger"><img src="https://travis-ci.org/atsid/badger.svg?branch=master" alt="Build Status"></a>';
const WERCKER_BADGE = '<a href="https://app.wercker.com/project/bykey/e39e9ad81e711bf363bb159deddb9e7a"><img src="https://camo.githubusercontent.com/" alt="wercker status" data-canonical-src="https://app.wercker.com/status/e39e9ad81e711bf363bb159deddb9e7a/s/master"></a>';
const CODECLIMATE_GPA_BADGE = '<a href="https://codeclimate.com/github/atsid/badger"><img src="https://codeclimate.com/github/atsid/badger/badges/gpa.svg" alt="Code Climate"></a>';
const DAVID_BADGE = '<a href="https://david-dm.org/atsid/amd-plugins"><img src="https://david-dm.org/atsid/amd-plugins.svg" alt="Dependency Status"></a>';
const DAVID_DEV_BADGE = '<a href="https://david-dm.org/atsid/amd-plugins"><img src="https://david-dm.org/atsid/amd-plugins/dev-status.svg" alt="Dev Dependency Status"></a>';
const NODE_BADGE = '<a href="https://nodei.co/npm/express-mountie/"><img src="https://nodei.co/npm/express-mountie.png" alt="NPM"></a>';

describe('The Badge Categorizer Function', () => {
  it('can categorize a travis build badge', () => {
    const result = categorize(TRAVIS_BADGE);
    expect(result.category).to.equal('build');
    expect(result.content).to.equal(TRAVIS_BADGE);
  });

  it('can categorize a wercker build badge', () => {
    const result = categorize(WERCKER_BADGE);
    expect(result.category).to.equal('build');
    expect(result.content).to.equal(WERCKER_BADGE);
  });

  it('can categorize a codeclimate quality badge', () => {
    const result = categorize(CODECLIMATE_GPA_BADGE);
    expect(result.category).to.equal('quality');
    expect(result.content).to.equal(CODECLIMATE_GPA_BADGE);
  });

  it('can categorize a dependency badge', () => {
    const result = categorize(DAVID_BADGE);
    expect(result.category).to.equal('dependencies');
    expect(result.content).to.equal(DAVID_BADGE);
  });

  it('can categorize a dev dep badge', () => {
    const result = categorize(DAVID_DEV_BADGE);
    expect(result.category).to.equal('devDependencies');
    expect(result.content).to.equal(DAVID_DEV_BADGE);
  });

  it('cat categorize a node badge', () => {
    const result = categorize(NODE_BADGE);
    expect(result.category).to.equal('npm');
    expect(result.content).to.equal(NODE_BADGE);
  });
});
