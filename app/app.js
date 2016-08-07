const electron = require('electron');

// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

class Application {
	constructor(options) {
		// save electron.app reference
		this.app = options.app || null;

		if (this.app == null) {
			throw new Error("options.app not specified");
		}

		this.options = options;
		this.mainWindow = null;
		this.init(this.options);
	}

	quit() {
		if (process.platform !== 'darwin') {
			this.app.quit();
		}
	}

	init(options) {
		// create size of window options
		var size_main_w = {};
		size_main_w.width = options.window_width || 800;
		size_main_w.height = options.window_height || 600;

		// create main window
		this.mainWindow = new BrowserWindow(size_main_w);

		// open main window with dev tools
		this.mainWindow.loadURL(`file://${__dirname}/index.html`);
		this.mainWindow.webContents.openDevTools();

		// attach window events handlers
		this.mainWindow.on('closed', function () {
			this.mainWindow = null;
		});

		// attach this.app event handlers
		this.app.on('window-all-closed', function () {
			this.quit();
		});

		this.app.on('activate', function () {
			if (this.mainWindow === null) {
				this.init(this.options);
			}
		});
	}
}

module.exports = Application;