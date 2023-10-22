const express = require('express');
const octokit = require('../github'); // Import Octokit
const router = express.Router();

author = {
    name: 'Akshith',
    email: 'myemail@domain.com',
};


router.get('/:owner/:repo', async (req,res)=>{
    const {owner,repo} = req.params;

    const commits = await octokit.repos.listCommits({
        owner,
        repo
    });

    const latestCommit = commits.data[0].sha;

    


    try{
        const {
            data : {sha: newCommitSHA},
        } = await octokit.git.createCommit({
            owner,
            repo,
            author,
            message: 'Changes via API',
            parents: [latestCommit]
        });
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
});

module.exports = router;


