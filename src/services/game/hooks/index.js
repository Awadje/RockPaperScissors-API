'use strict';


const postWeapon = require('./postWeapon');


const removeGame = require('./removeGame');

const firstEncounter = require('./firstEncounter');

const isGameFull = require('./isGameFull');

const joinGame = require('./joinGame');

const createGame = require('./createGame');

const playerInput = require('./playerInput');

// const gameResult = require('./gameResult');

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
  ],
  find: [],
  get: [],
  create: [createGame()],
  update: [joinGame()],
  patch: [joinGame(), playerInput()],
  remove: [removeGame()]
};

exports.after = {
  all: [hooks.populate('players', {
    service: 'users',
    field: 'playerIds'
  }), isGameFull(), firstEncounter()],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
