(function() {
	function processWorker(data) {
		// Packet number
		const packet 					= data.cmd;

		// Packet response
		const res 						= data.Response;

		switch(packet) {
			// Default command
			default:
				app.log("unhandled packet", packet, data);
			break;

			// Chat message
			case 300104:
				app.chat.handleMessage(res);
			break;

			// Members list
			case 10300101:
				app.viewerList 			= res.List;
			break;

			// Fan list
			case 10300151:
				app.fanList 			= res.List;
			break;

			// History contribution
			case 10300113:
				app.contributionList 	= res.List;
			break;

			// Studio enter packet
			case 10300100:
				app.channelData 		= res;

				// Save some socket data
				app.socket.deviceId 	= data.DeviceId;
				app.socket._sid 		= res.StudioId;

				app.video.id 			= res.CurVideoId;
				app.video.title 		= res.Title;
				app.video.thumb 		= res.Cover;

				app.emit("login");
			break;

			// Packets to ignore
			case 10300102: 				// Channel config
			case 10900083: 				// Reward list (egg)
			case 600016: 				// Bet related packet
			case 10300103: 				// Chat message confirmation
			case 10900084: 				// Egg confirmation packet
			case 10300147: 				// Medal list
			case 10300120: 				// Increase view count
			case 10300143: 				// Get mall goods by page!?
				// Do nothing! :O
			break;
		}
	}

	// Instantiate the window.Blob class
	const originalBlob 					= window.Blob;

	// Hook the Blob class
	window.Blob 						= function([content]) {
		let outContent 					= content;

		if (typeof outContent === "string") {
			// Replace seqno function
			outContent 					= outContent.replace(new RegExp("return this._seq\\+\\+", "g"), `
				var a 					= this._seq++;

				this.postMessage("onmessage", {
					cmd: 				"rseqno" + this._socketNameSpace,
					Response: 			a
				});

				return a;
			`);

			// Replace jsonstr function
			outContent 					= outContent.replace(new RegExp("return r=JSON\\.stringify\\(r\\)", "g"), `
				r 						= JSON.stringify(r);

				this.postMessage("onmessage", {
					cmd: 				"rjsonstr" + this._socketNameSpace,
					Response: 			r
				});

				return r;
			`);
		}

		return new originalBlob([outContent]);
	};

	// Save worker reference
	const _Worker 						= window.Worker;

	const firstInteraction 				= (finalWorker) => {
		// Save postMessage reference
		const finalWorkerPostMsg 		= finalWorker.postMessage;

		// Save worker reference
		app.socket.worker 				= finalWorker;	

		// Add event listener, listening to blob messages
		finalWorker.addEventListener("message", (e) => {
			const data 					= e.data[1];

			if (data === undefined || e.data[0] === undefined) {
				return false;
			}

			app.emit(data.cmd, data);

			if (isNaN(data.cmd)) {
				app.log(">>>", data);
				return false;
			}			

			// Check if it's a valid message
			if ((e.data[0] !== "onmessage81" && e.data[0] !== "onmessage82")) {
				return app.log("unhandled worker message", e.data[0], data);
			} else {
				app.log("<<", data);
			}

			processWorker(data);
		});

		// Override postMessage function
		finalWorker.postMessage 		= function(data) {
			if (data[0] === "signin82") {
				app.currentUser 		= data[2];
				app.socket._token 		= data[3];
			} else
			if (data[0] === "enter82") {
				app.streamerId 			= data[1];
			}
			if (data.cmd !== "demux" && data.cmd !== "init") {
				app.log(">>", data);
				app.emit(data.cmd || data[0], data);
			}

			return finalWorkerPostMsg.apply(this, arguments);
		};

		app.postSocketMessage 			= (...args) => finalWorker.postMessage(...args);
		app.triggerMessage 				= function(data) {
			return finalWorker.onmessage({
				data: 				data
			});
		};

		// Create get viewer list function
		app.getViewerList 				= function() {
			return finalWorker.postMessage(["memberscopy82", 1, 0, 0])
		};
	};

	const firstPlayerInteraction 		= (finalWorker) => {
		app.player.worker 				= finalWorker;
		app.player.seq 					= 0;
		app.player.duration 			= 0;

		finalWorker.addEventListener("message", (e) => {
			const data 					= e.data;

			if (data.event === "hlsFragParsed") {
				if (app.player.seq < data.data.frag.sn) {
					app.player.seq 		= data.data.frag.sn;
					app.player.duration = Math.round(data.data.frag.sn * 3 * data.data.frag.duration) / 60;
				}
			}
		});
	};

	// Create our modified worker
	window.Worker 						= function(url) {
		// Create a new worker from the old reference
		const finalWorker 				= new _Worker(url);

		// Set up a one-time listener
		const listener 					= (data) => {
			// Check if it's a socket start message
			if (data.data[0] === "onstart81" || data.data[0] === "onstart82") {
				firstInteraction(finalWorker);
			} else {
				firstPlayerInteraction(finalWorker);
			}

			finalWorker.removeEventListener("message", listener);
		};

		finalWorker.addEventListener("message", listener);

		return finalWorker;
	};

	// StreamCraft network packets
	app.packets 						= {
		CLIP_REQUEST: 					10620006
	};
})();