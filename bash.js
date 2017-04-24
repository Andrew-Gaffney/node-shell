var commands = require('./command.js');
// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  var comm = cmd.slice(0, cmd.indexOf(' '));
  var str = cmd.slice(cmd.indexOf(' ') + 1);

  if (cmd === 'pwd'){
    commands.pwd();
  }
  if (cmd === 'date'){
    commands.date();
  }
  if (cmd === 'ls'){
    commands.ls();
  }
  if (comm === 'echo'){
    commands.echo(str);
  }
  if (comm === 'cat'){
    commands.cat(str);
  }
  if (comm === 'head'){
    commands.head(str);
  }
  if (comm === 'tail'){
    commands.tail(str);
  }
  if (comm === 'sort') {
    commands.sort(str);
  }
  if (comm === 'curl') {
    commands.curl(str);
  }
});

var done = function(output){
  
}
