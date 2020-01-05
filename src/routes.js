const express = require('express');

const routes = express.Router();

const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');

// Users
routes.post('/users', UserController.store);

// Session
routes.post('/sessions', SessionController.store);

module.exports = routes;
