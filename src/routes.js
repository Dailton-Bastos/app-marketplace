const express = require('express');

const routes = express.Router();

const authMiddleware = require('./app/middlewares/auth');

const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');

// Users
routes.post('/users', UserController.store);

// Session
routes.post('/sessions', SessionController.store);

// Test token authMiddleware
routes.get('/test', authMiddleware, (req, res) => res.json({ ok: true }));

module.exports = routes;
