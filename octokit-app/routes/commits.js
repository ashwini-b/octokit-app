const express = require('express');
const octokit = require('../github'); // Import Octokit
const router = express.Router();

router.get('/:owner/:repo', async (req, res) => {
  const { owner, repo } = req.params;
  try {
    const { data: commits } = await octokit.repos.listCommits({ owner, repo });
    res.json(commits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
