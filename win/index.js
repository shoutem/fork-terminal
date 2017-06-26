const { spawnSync } = require('child_process');

module.exports = function(command, commandArguments, spawnOptions) {
  const spawnArgs = ['cmd', '/C', command].concat(commandArguments);
  
  return spawnSync('start', spawnArgs, {
    shell: true,
    stdio: 'ignore',
    cwd: spawnOptions.cwd
  });
}
