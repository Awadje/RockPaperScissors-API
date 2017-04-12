'use strict';

const winGame = require('./winGame');

const removeGame = require('./removeGame');

const firstEncounter = require('./firstEncounter');

const isGameFull = require('./isGameFull');

const joinGame = require('./joinGame');

const createGame = require('./createGame');

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ],
  find: [],
  get: [],
  create: [createGame()],
  update: [joinGame()],
  patch: [joinGame()],
  remove: [removeGame()]
};

exports.after = {
  all: [hooks.populate('players', {
    service: 'users',
    field: 'playerIds'
  }), isGameFull(), firstEncounter(), winGame()],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
