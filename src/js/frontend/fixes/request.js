const _XMLHttpRequest 					= window.XMLHttpRequest;
window.XMLHttpRequest 					= function() {
	const request 						= new _XMLHttpRequest();

	request.addEventListener("loadend", (e) => {
		console.log(request.responseURL);

		// Check if it's streamer info
		if (request.responseURL.indexOf("live/room/anchorinfo") > -1) {
			app.streamerInfo 			= JSON.parse(request.responseText).data;
			app.socket._sid 			= app.streamerInfo.user.roomid;

			app.emit("streamerInfo", app.streamerInfo);
		} else
		// Check if it's current user info
		if (request.responseURL.indexOf("tools/common/info") > -1) {
			app.user 					= JSON.parse(request.responseText).user;

			app.emit("userInfo", app.user);
		} else
		// Check if it's video info
		if (request.responseURL.indexOf("live/video/historyinfo") > -1) {
			app.video 					= JSON.parse(request.responseText).data;
		}
	});

	return request;
};