const express = require('express');
const octokit = require("../github");
const router = express.Router();

  // Route to create a pull request in a GitHub repository
router.post('/:owner/:repo', async (req, res) => {
    const { owner, repo } = req.params;
    const { title, head, base, body } = req.body; // Assuming these are provided in the request body
  
    try {
      // Create a pull request
      const pullRequest = await octokit.pulls.create({
        owner: owner,
        repo: repo,
        title: title,
        head: head, // The branch you want to merge from
        base: base, // The branch you want to merge into
        body: body, // Description or comments for the pull request
      });
  
      res.status(201).json({
        message: `Pull request created successfully.`,
        pullRequest: pullRequest.data,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  module.exports = router;