/*
   Nicely modular Gulp file. 
   Loads all taks from ./gulp/tasks/
   Inspired by / taken from: https://github.com/greypants/gulp-starter
*/
var fs = require('fs');
var onlyScripts = require('./gulp/util/scriptFilter');
var tasks = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);
var paths = require('./gulp/util/paths.js');

// Load all tasks
tasks.forEach(function(task) {
	require('./gulp/tasks/' + task);
});