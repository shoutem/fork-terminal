const { spawnSync } = require('child_process');
const commandExistsSync = require('command-exists').sync;

module.exports = function(command, commandArguments, spawnOptions) {
  const terminal = ['gnome-terminal', 'konsole', 'xterm'].find(commandExistsSync);

  const commandToRun = 
    [command]
    .concat(commandArguments.map(arg => arg.replace(/"/g, '\\"')))
    .join(' ');
  
  return spawnSync(terminal, ['-e'].concat([`"${commandToRun}"`]), {
    shell: true,
    stdio: 'ignore',
    cwd: spawnOptions.cwd
  });
}
