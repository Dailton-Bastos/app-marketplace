const express = require('express');

const routes = express.Router();

const authMiddleware = require('./app/middlewares/auth');

const controllers = require('./app/controllers');

// Users
routes.post('/users', controllers.UserController.store);

// Session
routes.post('/sessions', controllers.SessionController.store);

// Test token authMiddleware
routes.get('/test', authMiddleware, (req, res) => res.json({ ok: true }));

module.exports = routes;
