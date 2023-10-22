const express = require('express');
const octokit = require('../github'); // Import Octokit
const router = express.Router();

// Route to delete an existing branch in a GitHub repository
router.get('/delete/:owner/:repo/:branchName', async (req, res) => {
  const { owner, repo, branchName } = req.params;
  
  // Update the author information
  const author = {
    name: 'GOWTHAM',
    email: 'gowthamredddyiv@gmail.com',
  };
  
  try {
    // Delete the specified branch
    await octokit.git.deleteRef({
      owner: owner,
      repo: repo,
      ref: `heads/${branchName}`,
    });

    res.status(200).json({
      message: `Branch "${branchName}" deleted successfully.`,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
