const { Octokit } = require('@octokit/rest');

// Replace 'YOUR_PERSONAL_ACCESS_TOKEN' with your actual GitHub personal access token
const personalAccessToken = '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';

const octokit = new Octokit({
  auth: personalAccessToken,
});

module.exports = octokit;