const fs = require('fs');
const { spawnSync } = require('child_process');
const tmp = require('tmp');

module.exports = function(command, commandArguments, { cwd }) {
	const { name } = tmp.fileSync({
		mode: 0777,
		postfix: '.command',
		discardDescriptor: true,
		keep: true 
	});
	
	const commandString = `cd ${cwd}\n` +
		[command]
		.concat(commandArguments.map(arg => arg.indexOf(' ') > -1 ? `"${arg}"` : arg))
		.join(' ') + '\n' +
		`rm ${name}`;
	
	fs.writeFileSync(name, commandString);
	return spawnSync('open', [name]);
}
