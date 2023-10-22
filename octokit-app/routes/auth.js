const express = require('express');
const octokit = require('../github'); // Import Octokit
const router = express.Router();

router.get('/user', async (req, res) => {
  try {
    const { data: user } = await octokit.users.getAuthenticated();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
