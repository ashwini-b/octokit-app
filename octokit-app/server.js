const express = require('express');
const authRouter = require('./routes/auth');
const commitsRouter = require('./routes/commits');
const getContentsRouter = require('./routes/getcontents');
const createCommitRouter = require('./routes/createCommit');
const app = express();

// Middleware for parsing JSON request bodies
app.use(express.json());

// Define routes
app.use('/api/auth', authRouter);
app.use('/api/commits', commitsRouter);
app.use('/api/contents',getContentsRouter);
app.use('/api/crtcommit',createCommitRouter);
// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});