// Create app object
const app 					= {};

// Check if it's app's first run
app.isFirstRun 				= localStorage.getItem("streamSettings") === null; 

// Get item function
app.getItem 				= (key) => {
	let value;

	try {
		value 				= JSON.parse(localStorage.getItem(key));
	} catch(e) {
		value 				= localStorage.getItem(key);
	}

	return value;
};

// Set item function
app.setItem 				= (key, value) => {
	localStorage.setItem(key, typeof value === "object" ? JSON.stringify(value) : value);
	return true;
};

// Request function
app.request 				= function(url) {
	return new Promise((resolve, reject) => {
		// Create the XMLHttpRequest
		const request 		= new XMLHttpRequest();

		// Listen to "loadend" event
		request.addEventListener("loadend", () => {
			const data 		= JSON.parse(request.responseText);

			resolve(data);
		});

		// Set xhr fields to true
		request.xhrFields 	= true;

		// Open the request
		request.open("GET", url);

		// Set accept header
		request.setRequestHeader("Accept", "application/json, text/plain, */*");

		// Send request
		request.send();
	});
};

// Check if it's app's first run
if (app.isFirstRun) {
	localStorage.setItem("streamSettings", "[]");
	localStorage.setItem("config", "{}");
}

// On chrome external message
chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
	// Check if message is sent from StreamCraft
	if (sender.url.indexOf("streamcraft.com/") === -1 || !request.name) {
		return false;
	}

	// Get request name
	switch(request.name) {
		case "setStorageItem":
			sendResponse(app.setItem(request.data.name, request.data.value));
		break;

		case "getStorageItem":
			sendResponse(app.getItem(request.data));
		break;

		case "createNotification":
			sendResponse(createNotification(request.data));
		break;
	}
});