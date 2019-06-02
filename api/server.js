const express = require('express');
const helmet = require('helmet');

const router = require('../router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/recipes', router);

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Recipes Home' });
});

module.exports = server;
