module.exports = function(command, commandArguments, spawnOptions) {
  const platform = process.platform;
  
  if (platform.startsWith('win')) {
    return require('./win')(command, commandArguments, spawnOptions);
  }

  if (platform === 'darwin') {
    return require('./mac')(command, commandArguments, spawnOptions);
  }
  
  return require('./linux')(command, commandArguments, spawnOptions);
}
