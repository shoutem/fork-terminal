const { spawn } = require('child_process');
const path = require('path');

module.exports = function(command, commandArguments, spawnOptions) {
  const spawnArgs = ['cmd', '/C', command].concat(commandArguments);
  
  return spawn('start', spawnArgs, {
    shell: true,
    stdio: 'ignore',
    cwd: spawnOptions.cwd
  });
}
