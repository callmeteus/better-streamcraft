app.on("player.render", () => {
	app.clip 					= {
		/**
		 * Current preview URL
		 * @type {String}
		 */
		previewUrl: 			null,
		/**
		 * Clip operation types
		 * @type {Object}
		 */
		opType: 				{
			CREATE: 			1,
			SAVE: 				2
		}
	};

	app.on("clip.ready", (data) => {
		app.clip.previewUrl = data.sClipUrl;

		// Set dialog body (video and title)
		app.clip.dialog.setBody(`
			<small class="sc-input-helper">${app.language.sc_streamdata_txt_title}</small>
			<input placeholder="${app.language.sc_streamdata_txt_title}" class="sc-input sc-input-block" value="${app.video.title}" />

			<hr/>

			<video controls src="${app.clip.previewUrl}"></video>
		`);

		// Set dialog footer (action buttons)
		app.clip.dialog.setFooter(`
			<button class="sc-btn sc-btn-block sc-btn-save-clip">${app.language.common_txt_save}</button>
			<button class="sc-btn sc-btn-block sc-btn-download-clip">${app.language.web_group_url_download}</button>
		`);
	});

	// On receive clip packet
	app.on(10620006, (data) => {
		data 					= data.Response;

		app.clip.dialog.setBody("");
		app.clip.dialog.setFooter("");

		if (data.OpType === app.clip.opType.SAVE) {
			// Success
			if (data.BaseResponse.Ret === 0) {
				app.clip.dialog.setBody(`
					<center>
						<span class="sc-dialog-big-icon el-icon-success"></span>

						<h3 class="sc-white">
							${app.language.me_privacy_tips_savesucces}<br/>
							<a target="_blank" href="/user/${app.user.scid || app.user.uin}/clips/${data.ClipId}">
								${app.language.contacs_btn_showmore}
							</a>
						</h3>
					</center>
				`);
			} else {
				app.clip.dialog.setBody(`
					<center>
						${app.language.sc_server_txt_error}<br/>
						<small>${data.BaseResponse.ErrMsg}
					</center>
				`);
			}
		}
	});

	// On click "download clip" button
	app.live("click", ".sc-btn-download-clip", function(e) {
		// Disable button
		e.target.setAttribute("disabled", true);
		e.target.innerText 		= app.language.common_txt_waiting;

		// Download file
		app.download(app.clip.previewUrl, app.clip.dialog.handler.querySelector("input").value + ".mp4", null, () => {
			e.target.setAttribute("disabled", false);
			e.target.innerText 	= app.language.welive_download_txt_btn;
		});
	});

	// On click "save clip" button
	app.live("click", ".sc-btn-save-clip", function(e) {
		// Send clip save request
		app.clip.sendClipRequest({
			type: 				app.clip.opType.SAVE,
			title: 				app.clip.dialog.handler.querySelector("input").value,
			duration: 			30
		});

		// Disable all buttons
		app.clip.dialog.footer.querySelectorAll("button").forEach((btn) => {
			btn.setAttribute("disabled", true);
		});
	});

	app.clip.getClipList 		= function() {
		const data 				= {
			RoomId: 			app.socket._sid,
		};

		app.socket.sendPacket(620005, data);
	};

	app.clip.sendClipRequest 	= function(args) {
		// Basic request data
		const data 				= {
			OpType: 			args.type,
			VideoId: 			args.video || app.video.id,
			RoomId: 			args.room || app.socket._sid,
		};

		// Check if is creating a new clip
		if (args.type === app.clip.opType.CREATE || args.type === app.clip.opType.SAVE) {
			data.ClipLength 	= args.duration;
			data.BeginPoint  	= Math.round(app.clip.begin);
			data.EndPoint 		= Math.round(app.clip.end);
		}

		// Check if is saving a clip
		if (args.type === app.clip.opType.SAVE) {
			data.ClipName 		= args.title || app.video.title;
			data.PreviewUrl 	= args.preview || app.clip.previewUrl;
		}

		app.log("clip request", data);

		// Send packet
		app.socket.sendPacket(620006, data);
	};

	/* ------------------------------------------------------------------------------------------- */

	// Create dialog element
	app.clip.dialog 				= new Dialog();

	// Add dialog classes
	app.clip.dialog.handler.classList.add("sc-dialog-center");
	app.clip.dialog.handler.classList.add("sc-clip-dialog");

	// Set title
	app.clip.dialog.setTitle(app.language.live_profile_txt_clip);

	/* ------------------------------------------------------------------------------------------- */

	const icon 					= document.createElementNS("http://www.w3.org/2000/svg", "svg");
	icon.id 					= "icon_clip";
	icon.setAttribute("viewBox", "0 0 30 30");

	const path 					= document.createElementNS("http://www.w3.org/2000/svg", "path");
	path.setAttribute("d", "M23 9.84l-.28-1.98a1.002 1.002 0 0 0-1.131-.852l-2.475.351 1.906 2.76L23 9.84zm-5.03.7l-1.905-2.76-2.97.42 1.904 2.76 2.971-.42zm-5.73.84l-1.904-2.76-2.474.35a1 1 0 0 0-.852 1.13l.28 1.98 4.95-.7zM23 14v8.083c0 .552-.447.918-1 .918H8c-.552 0-1-.366-1-.918v-8.084h5l-2 3h3l2-3h3l-2 3h3l2-3h2V14z");
	path.setAttribute("fill-rule", "nonzero");
	icon.appendChild(path);

	const button 				= app.player.addMenuItem(icon, app.language.live_profile_txt_clip);

	button.addEventListener("click", () => {
		app.clip.dialog.setBody(app.language.common_txt_waiting);
		app.clip.dialog.setFooter("");

		app.clip.dialog.show();

		app.clip.begin 			= app.player.duration - 30;
		app.clip.end 			= app.player.duration;

		app.clip.sendClipRequest({
			type: 				app.clip.opType.CREATE,
			duration: 			30
		});
	});
});