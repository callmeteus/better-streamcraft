// Require byte buffer module
const ByteArray 			 		= require("byte-buffer");

class Socket {
	constructor() {
		this.num 					= 81;
	}

	/**
	* Generate a sequential number
	* @return {Number}		Unique sequential number for this session
	*/
	seqno() {
		return new Promise((resolve, reject) => {
			app.socket.worker.postMessage(["seqno" + this.num]);
			app.once("rseqno" + this.num, (data) => resolve(data.Response));
		});
	}

	sendPacket(packet, data) {
		let seq 					= 0;

		return app.socket.seqno()
		.then((no) => {
			seq 					= no;
			return app.socket.jsonstr(data, seq);	
		})
		.then((json) => {
			app.socket.worker.postMessage(["sendpacket" + this.num, packet, json, seq]);

			return json;
		});
	};

	/**
	* Create a packet JSON string to be attached to the packet
	* @param  {Object} data 	Aditional data to be attached
	* @param  {Number} seq 	Sequential number
	* @return {Object}   		New JSON string
	*/
	jsonstr(data, seq) {
		return new Promise((resolve, reject) => {
			app.socket.worker.postMessage(["jsonstr" + this.num, data, seq]);

			const listener 			= (data) => {
				if (data.Response && data.Response.indexOf('"Seq":' + seq) > -1) {
					resolve(data.Response);
					app.removeListener("rjsonstr" + this.num, listener);
				}
			};

			app.addListener("rjsonstr" + this.num, listener);
		});
	}
}

// Create socket object
app.socket 							= new Socket();