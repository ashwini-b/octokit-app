const express = require('express');
const authRouter = require('./routes/auth');
const commitsRouter = require('./routes/commits');
const getContentsRouter = require('./routes/getcontents');
const createCommitRouter = require('./routes/createCommit');
const createPullRequestsRouter = require('./routes/createPullRequests');
const getPullRequestsRouter = require('./routes/getPullRequests');
const app = express();

// Middleware for parsing JSON request bodies
app.use(express.json());

// Define routes
app.use('/api/auth', authRouter);
app.use('/api/commits', commitsRouter);
app.use('/api/contents',getContentsRouter);
app.use('/api/crtcommit',createCommitRouter);
app.use('/api/createpr',createPullRequestsRouter);
app.use('/api/getpr', getPullRequestsRouter);
// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});