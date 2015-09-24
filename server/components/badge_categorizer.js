
function categorize(text) {
  let category = 'unknown';
  if (text.indexOf('travis-ci.org') > -1 || text.indexOf('wercker.com') > -1) {
    category = 'build';
  } else if (text.indexOf('codeclimate.com') > -1) {
    if (text.indexOf('/coverage') > -1) {
      category = 'coverage';
    } else {
      category = 'quality';
    }
  } else if (text.indexOf('david-dm.org') > -1) {
    if (text.indexOf('/dev-status') > -1) {
      category = 'devDependencies';
    } else {
      category = 'dependencies';
    }
  } else if (text.indexOf('nodei.co') > -1) {
    category = 'npm';
  }

  return {category, content: text};
}

module.exports = categorize;
