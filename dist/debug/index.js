var script     		= document.createElement("script");
script.src     		= chrome.runtime.getURL("src/frontend.js");
script.type 		= "text/javascript";

script.id 			= chrome.runtime.id;

(document.head || document.documentElement).appendChild(script);

document.addEventListener("DOMContentLoaded", () => {
	var link    	= document.createElement("link");
	link.href   	= chrome.runtime.getURL("src/frontend.css");
	link.type 		= "text/css";
	link.rel		= "stylesheet";
	(document.body).appendChild(link);
});