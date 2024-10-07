const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber : 200,
    mission : 'KEX', 
    rocket : 'EX ES', 
    launchDate : new Date('December 26, 2030'),
    target : 'kepler-442 b',
    customer :[ 'NASA', 'ZTN'] , 
    upcoming : true,
    success: true
};


launches.set(launch.flightNumber, launch);

function existsLaunchWithId(launchId){
    return launches.has(launchId);
}

function getAllLaunches(){
    return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(latestFlightNumber, Object.assign(launch, {
    success : true, 
    upcoming : true,
    customers : ['ZTM', 'NASA'],
    flightNumber : latestFlightNumber,

  }));
}

function abortLaunchById(launchId){
    const aborted = launches.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}

module.exports = {
    existsLaunchWithId,
    getAllLaunches,
    addNewLaunch,
    abortLaunchById
};