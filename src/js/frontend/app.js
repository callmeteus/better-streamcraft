const EventEmitter 					= require("events");

const extId 						= document.currentScript.id;

// Remove ID attribute
document.currentScript.removeAttribute("id");

class App extends EventEmitter {
	constructor() {
		super();

		this.viewerList 			= [];
		this.contributionList 		= [];
		this.fanList 				= [];
		this.extId 					= extId;
		this.config 				= {};
		this.emoji 					= null;

		this.socket 				= {};
		this.video 					= {};
		this.chat 					= {};

		this.isDebug 				= false;

		this.sendMessage("getStorageItem", {
			name: 				"config"
		}, (config) => {
			this.config 			= config ? config : {};
		});
	}

	/**
	 * Add a live event listener to the page
	 * @param  {String}   type    		Event type
	 * @param  {String}   element 		Query string
	 * @param  {Function} cb      		Callback function when the event is fired
	 * @return {Boolean}
	 */
	live(type, element, cb) {
		// Listen to all container events for the desired type
		document.addEventListener(type, function(e) {
			// Do the query
			const query 				= document.querySelectorAll(element);

			// Check if any element match the query
			if (query) {
				let el 					= event.target,
					index 				= -1;

				// Find elements that matches the queries
				while (el && ((index = Array.prototype.indexOf.call(query, el)) === -1)) {
					// Get the parent element
					el 					= el.parentElement;
				}

				// Check if returned any indexes
				if (index > -1) {
					// Callback with the event data
					cb.call(el, event);
				}
			}
		});

		return true;
	}

	log(...args) {
		if (this.isDebug) {
 			console.debug("[bsc]", ...args);
		}
	}

	sendMessage(type, data, cb) {
		return chrome.runtime.sendMessage(this.extId, {
			name: 				type,
			data
		}, cb);
	}

	ucfirst(text) {
		return text.toLowerCase()
	    .split(" ")
	    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
	    .join(" ");
	}

	nextTick(fn) {
		return setImmediate ? setImmediate(fn) : setTimeout(fn);
	}

	request(url, data = {}) {
		data.method 					= data.method ? data.method.toUpperCase(): "GET";
		data.params 					= data.params ? Object.keys(data.params).map((key) => key + "=" + data.params[key]).join("&") : null;

		return new Promise((resolve, reject) => {
			// Create the XMLHttpRequest
			const request 				= new XMLHttpRequest();

			// Listen to "loadend" event
			request.addEventListener("loadend", () => {
				let data 				= request.responseText;

				try {
					data 				= JSON.parse(data);
				} catch(e) {

				}

				resolve(data);
			});

			// Set xhr fields to true
			request.xhrFields 			= true;
			request.withCredentials 	= url.indexOf("streamcraft") > -1;

			// Open the request
			request.open(data.method, url + (data.params ? "?" + data.params : ""));

			// Set accept header
			request.setRequestHeader("Accept", "application/json, text/plain, */*");

			if (data.type) {
				request.setRequestHeader("Content-Type", data.type);
			}

			// Send request
			request.send(data.data ? JSON.stringify(data.data) : null);
		});
	}

	getStreamSettings(streamer) {
		return new Promise((resolve, reject) => {
			// Get stream settings
			app.sendMessage("getStorageItem", "streamSettings", (data) => {
				// Check if data is null
				if (data === null) {
					// Set to JSON array
					return app.sendMessage("setStorageItem", { name: "streamSettings", value: [] }, () => {
						resolve([]);
					});
				} else{
					resolve(data);
				}
			});
		});
	}

	setStreamSettings(streamer, data) {
		return new Promise((resolve, reject) => {
			return this.getStreamSettings()
			.then((settings) => {
				const index				= settings.findIndex((setting) => setting.id === streamer);

				if (index === -1) {
					settings.push(Object.assign({ id: streamer }, data));
				} else {
					settings[index] 	= Object.assign(settings[index], data);
				}

				app.sendMessage("setStorageItem", { name: "streamSettings", value: settings }, resolve);
			});
		});
	}
}

// Create application handler
const app 							= new App();

app.on("startup", () => {
	if (app.user === undefined) {
		app.request("https://webapi.streamcraft.com/tools/common/info?_t=" + (+new Date()))
		.then((data) => {
			app.user 				= data.user;
		});
	}
});