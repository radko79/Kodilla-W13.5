//modules
var os = require('os');
//var http = require('http');
var colors = require('colors');
//var showDate = require('./modules/gettime');
//var gettime = require('./modules/gettime');
var osinfo = require('./modules/osinfo');

process.stdin.setEncoding('utf-8'); 
process.stdin.on('readable', function() { 
	var input = process.stdin.read();
	if(input !== null) {
		var instruction = input.toString().trim();
		switch(instruction) {
			case '/exit': 
				process.stdout.write('See ye!\n');
				process.exit();
			case 'ver':
				process.stdout.write('Now, you talkin'+'\n');
				process.stdout.write('Process version is: '+process.version+'\n');
				process.stdout.write('\n');
				break;
			case '':
				process.stderr.write('Nothin\'? Seriously???\n');
				break;
			case '/sayhello':
				process.stderr.write('hello :/\n');
				break;
			case '/getOSinfo':
    			osinfo.print();
				break;
			case 'time':
				showDate.print();
				break;
			case 'second':
				gettime.print();
				break;
			default:
				process.stderr.write('Whaaat? o_O\n');
		}
	}
});


