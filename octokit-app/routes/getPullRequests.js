const express = require('express');
const octokit = require('../github'); // Import Octokit
const router = express.Router();

// Route to list all pull requests in a GitHub repository
router.get('/:owner/:repo', async (req, res) => {
  const { owner, repo } = req.params;

  try {
    // List all pull requests for the repository
    const pullRequests = await octokit.pulls.list({
      owner: owner,
      repo: repo,
    });

    res.status(200).json({
      pullRequests: pullRequests.data,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
