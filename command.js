var fs = require('fs');
var request = require('request');

module.exports = {
  pwd: function(arg){
    process.stdout.write(process.cwd());
  },
  date: function(arg){
    var newDate = new Date();
    process.stdout.write(newDate.toString());
  },
  ls: function(arg){
    fs.readdir('.', function(err, files) {
      if (err) throw err;
        files.forEach(function(file) {
        process.stdout.write(file.toString() + '\n');
      })
        process.stdout.write('\nprompt > ');
    })
  },
  echo: function(arg){
    if (arg[0] === '$'){
      process.stdout.write(process.env[arg.slice(1)]);
    } else {
      process.stdout.write(arg);
    }
  },
  cat: function(arg){
    fs.readFile(arg, function(err, data) {
      if (err) throw err;
      process.stdout.write(data);
      process.stdout.write('prompt > ');
    })
  },
  head: function(arg){
    fs.readFile(arg, 'utf8', function(err, data){
      if (err) throw err;
      var contents = data.split('\n');
      for (var i = 0; i < 5; i++){
        process.stdout.write(contents[i] + '\n')
      }
      process.stdout.write('prompt > ');
    })
  },
  tail: function(arg){
    fs.readFile(arg, 'utf8', function(err, data){
      if (err) throw err;
      var contents = data.split('\n');
      for (var i = contents.length - 6; i < contents.length; i++){
        process.stdout.write(contents[i] + '\n')
      }
      process.stdout.write('prompt > ');
    })
  },
  sort: function(arg){
    fs.readFile(arg, 'utf8', function(err, data) {
      if (err) throw err;
      var str = '';
      var contents = data.split('\n');
      contents = contents.sort();
      for (var i = 0; i < contents.length; i++) {
        str += (contents[i] + '\n');
      }
      process.stdout.write('prompt > ');
    })
  },
  curl: function(arg){
    request(arg, function(err, response, body){
      if (err) throw err;
      process.stdout.write(body + '\n');
      process.stdout.write('prompt > ');
    })
  }
};
