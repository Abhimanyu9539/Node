const express = require('express');
const {httpGetAllLaunches, httpsAddNewLaunch} = require('./launches.controller');

const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpsAddNewLaunch);

module.exports = {
    launchesRouter,
}