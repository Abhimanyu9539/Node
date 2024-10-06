const launch = {
    flightNumber : 200,
    mission : 'KEX', 
    rocket : 'EX ES', 
    launchDate : new Date('December 26, 2030'),
    destination : 'kepler-442 b',
    customer :[ 'NASA', 'ZTN'] , 
    upcoming : true,
    success: true
};

const launches = new Map();
launches.set(launch.flightNumber, launch);

function getAllLaunches(){
    return Array.from(launches.values());
}

module.exports = {
    launches,
};