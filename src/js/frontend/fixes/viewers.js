app.on("startup", () => {
	// Get stream info container
	const info 				= document.querySelector(".video-info .status");

	// Check if stream status exists
	if (!info) {
		return false;
	}

	// Create viewers element
	const viewers 			= document.createElement("span");
	viewers.classList.add("viewers");

	// Insert befores "views" element
	info.insertBefore(viewers, info.querySelector(".viewer"));

	// On update viewers
	app.on("viewers.update", (data) => {
		viewers.innerHTML 	= app.language.live_goldbox_txt_audiencenumber.replace("{msg}", "<em>" + data.RealCount + "</em>") + " &nbsp;&middot;";
	});
});