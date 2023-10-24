const express = require('express');
const octokit = require('../github'); // Import Octokit
const router = express.Router();
router.get('/delete/:owner/:repo/:branchName', async (req, res) => {       // Route to delete a branch in a GitHub repository
    const { owner, repo, branchName } = req.params; 
        try {                                                              // Get the SHA of the branch you want to delete
        const branchRef = `heads/${branchName}`;
        const refResponse = await octokit.git.getRef({ owner, repo, ref: `heads/${branchName}` });
        const branchSha = refResponse.data.object.sha;   
        const deleteResponse = await octokit.git.deleteRef({ owner, repo, ref: `heads/${branchName}` });       //  delete the branch
         console.log(deleteResponse);
        res.json("Branch has been successfully deleted.");
    } catch (error) {
        console.error("Error deleting branch:", error);
        res.status(500).json("Error deleting branch.");
    }
});
module.exports = router;
