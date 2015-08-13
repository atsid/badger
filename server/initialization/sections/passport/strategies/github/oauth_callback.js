const convert = require('./convert_github_profile');
const commonOAuth = require('../../common_oauth_callback');
function findProfile(profile) {
    return { githubId: '' + profile.id };
}

function handleTokens(user, token) {
    user.githubToken = token;
    return user.saveQ().spread((u) => u);
}

module.exports = commonOAuth(findProfile, convert, 'Github', handleTokens);
