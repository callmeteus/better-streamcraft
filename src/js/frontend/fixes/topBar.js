app.on("emoji.ready", () => {
	/**
	 * Replace nickname
	 */

	// Get nick bar
	const nickBar 						= document.querySelector(".nick-bar .nick");

	// Check if nickbar exists
	if (nickBar) {
		nickBar.innerHTML 				= app.emoji.render(nickBar.innerText);
	}

	/**
	 * Notification button
	 */

	const followBtn 					= document.querySelector(".side-bar div .handle-follow");
	let notificationBtn;

	// Check if follow button exists
	if (!followBtn) {
		return false;
	}

	const fragment 						= document.createDocumentFragment();

	const notification 					= document.createElement("p");
	fragment.appendChild(notification);

	notificationBtn 					= document.createElement("button");
	notificationBtn.classList.add("btn");
	notificationBtn.classList.add("default-btn");
	notificationBtn.classList.add("handle-notification");
	notificationBtn.disabled 			= true;
	notification.appendChild(notificationBtn);

	const icon 							= document.createElement("i");
	icon.classList.add("el-icon-bell");
	notificationBtn.appendChild(icon);

	followBtn.parentNode.parentNode.appendChild(fragment);

	// On click notification notificationBtn
	notificationBtn.addEventListener("click", () => {
		const enableNotifications 		= !notificationBtn.classList.contains("enabled");

		// Get current stream settings
		app.setStreamSettings(app.streamerInfo.user.uin, {
			notifications: 				enableNotifications
		})
		.then((streamer) => {
			if (enableNotifications) {
				notificationBtn.classList.add("enabled");
			} else {
				notificationBtn.classList.remove("enabled");
			}
		});
	});

	function updateBtn(isFollowing) {
		if (!isFollowing) {
			// Disable notification button
			notificationBtn.disabled 	= true;
		} else {
			// Enable notification button
			notificationBtn.disabled 	= false;

			// Get stream settings
			app.getStreamSettings(app.streamerInfo.user.uin)
			.then((streamer) => {
				// Check if has notifications enabled
				if (streamer.notifications === true) {
					// Add enabled class to notification button
					notificationBtn.classList.add("enabled");
				}
			});
		}
	}

	app.on("streamerInfo", () => {
		// Check if user is following channel
		if (app.streamerInfo.isfavor) {
			// Enable notification button
			updateBtn(true);
		}
	});

	// On member follow packet
	app.on(600016, function(data) {
		// Is now following
		if (data.St === 1028) {
			updateBtn(true);
		} else
		// Is not following anymore
		if (data.St === 1024) {
			updateBtn(false);
		}
	});
});