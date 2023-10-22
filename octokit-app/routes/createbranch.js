const express = require('express');
const octokit = require('../github'); // Import Octokit
const router = express.Router();

// Route to create a new branch in a GitHub repository
router.get('/create/:owner/:repo/:branchName/:baseCommitSHA', async (req, res) => {
  const { owner, repo, branchName, baseCommitSHA } = req.params;
  
  // Update the author information
  const author = {
    name: 'GOWTHAM',
    email: 'gowthamredddyiv@gmail.com',
  };
  
  try {
    // Create the new branch based on the specified base commit SHA
    const response = await octokit.git.createRef({
      owner: owner,
      repo: repo,
      ref: `refs/heads/${branchName}`,
      sha: baseCommitSHA,
    });

    // Construct a detailed response with branch and commit details
    const branch = response.data.ref;
    const newCommitSHA = response.data.object.sha;

    res.status(201).json({
      message: `Branch "${branchName}" created successfully.`,
      branch: branch,
      newCommitSHA: newCommitSHA,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
