const { log } = require('console');
const os = require('os');

//info about current user
const user = os.userInfo();
console.log(user);

//method to return the system uptime
const upt = os.uptime / 60;
console.log(`This is how long the system has been active: ${upt} seconds`);
