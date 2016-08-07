const electron = require('electron');

// Module to control application life.
const app = electron.app;

// top level application abstraction
const Application = require('./application');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let application;

function createApplication () {
	// create options
	var options = {
		window_width: 800,
		window_height: 600,
		app: app
	};

	application = new Application(options);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createApplication);
