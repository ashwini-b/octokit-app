const express = require('express');
const octokit = require('../github'); // Import Octokit
const router = express.Router();

router.get('/:owner/:repo', async (req, res) => {
  const { owner, repo } = req.params;
  try {
    const { data: commits } = await octokit.repos.listCommits({ owner, repo });
  // Extract only the desired fields from each commit
  const filteredCommits = commits.map((commit) => ({
    sha: commit.sha,
    author: commit.commit.author.name,
    date: commit.commit.author.date,
    message: commit.commit.message,
  }));
    res.json(filteredCommits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
