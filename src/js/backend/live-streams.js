function checkForLiveStreams() {
	// Get all live streamers that user follows
	app.request("https://webapi.streamcraft.com/ucenter/follow/getLiveDataForPreview?_t=" + +new Date())
	.then((data) => {
		// Check if succeeded
		if (!data.success) {
			return false;
		}

		// Iterate over all streams
		data.data.liveList.forEach((live) => {
			// Get stream information
			app.request("https://webapi.streamcraft.com/live/room/anchorinfo?_t=" + +new Date() + "&uid=" + live.scid)
			.then((data) => {
				const streamers 				= app.getItem("streamSettings");
				const streamerId 				= data.data.user.uin;
				const streamer 					= streamers.find((s) => s.id === streamerId);
				const streamId 					= data.data.user.show_id;

				// Check if it's a new stream and
				// user has enabled notifications for this streamer
				if (streamer === undefined || (streamer.notifications === true && streamer.lastStream !== streamId)) {
					// Create a new notification
					createNotification({
						type: 					"image",
						title: 					live.nickName + " está ao vivo!",
						message: 				live.roomName,
						iconUrl:				live.headImg,
						imageUrl: 				live.roomcover,
						url: 					"https://streamcraft.com/user/" + streamerId,
						buttons: 				[
							{
								title: 			"Assistir",
								cb: 			() => window.open("https://streamcraft.com/user/" + streamerId)
							},
							{
								title: 			"Agora não",
								cb: 			() => void 0
							}
						]
					});

					// Check if streamer exists
					if (streamer === undefined) {
						streamers.push({
							id: 				streamerId,
							notifications: 		true,
							lastStream: 		streamId
						});
					} else {
						// Replace with newer stream ID
						streamer.lastStream 	= streamId;
					}

					// Save it
					app.setItem("streamSettings", streamers);
				}
			});
		});
	});
}

// Interval to check for online streams
setInterval(() => checkForLiveStreams(), 30000);

checkForLiveStreams();