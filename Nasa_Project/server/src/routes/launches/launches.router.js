const express = require('express');
const {httpGetAllLaunches,
       httpsAddNewLaunch, 
       httpAbortLaunch} = require('./launches.controller');


const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpsAddNewLaunch);
launchesRouter.delete('/:id', httpAbortLaunch);

module.exports = {
    launchesRouter,
}