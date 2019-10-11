app.on("startup", () => {
	const chatDialog 							= document.querySelector(".chat-dialog");

	if (!chatDialog) {
		return false;
	}

	/**
	 * Create nickname picker
	 */
	app.nicknamePicker 							= document.createElement("div");
	app.nicknamePicker.addClass("sc-dialog sc-chat-dialog sc-nickname-picker");

	chatDialog.appendChild(app.nicknamePicker);

	let hasMessage 								= false;

	// On click nickname inside nickname picker
	app.live("click", ".sc-nickname-picker .sc-nickname-picker-nickname", function() {
		const html 								= app.textarea.innerHTML;
		app.textarea.innerHTML 					= html.substr(0, html.lastIndexOf("@") - 1);

		const span 								= document.createElement("span");
		span.setAttribute("alt", "@" + this.innerText);
		span.setAttribute("contenteditable", false);
		span.addClass("mention");
		span.innerText 							= this.innerText;

		// Append mention to textarea
		app.textarea.appendChild(span);

		setEndOfContenteditable(app.textarea);

		// Trigger textarea input
		app.textarea.trigger("input");

		app.nicknamePicker.style.display 		= "none";
	});

	// On textarea keydown
	app.textarea.addEventListener("keydown", function(e) {
		// Check if is arrow down or arrow up
		if (e.which === 40 || e.which === 38) {
			let active 							= app.nicknamePicker.querySelector(".active");

			if (!active || (!active.nextSibling && !active.previousSibling)) {
				return false;
			}

			active.classList.remove("active");

			// Arrow up
			if (e.which === 40) {
				active 							= active.nextSibling;
			} else
			// Arrow down
			if (e.which === 38) {
				active 							= active.previousSibling;			
			}

			// Add active class to current active nickname
			return active.classList.add("active");
		} else
		// Enter
		if (e.which === 13) {
			// Get active nickname selected
			const active 						= app.nicknamePicker.querySelector(".active");

			// Check if nickname picker is visible and has a selected nickname
			if (app.nicknamePicker.css("display") !== "none" && active) {
				e.preventDefault();
				e.stopPropagation();

				// Trigger click on the active nickname
				return active.trigger("click");	
			}
		}
	});

	// On textarea key up
	app.textarea.addEventListener("keyup", function(e) {
		// Get input value
		const value 							= this.innerText;

		// Get last space
		const lastValue 						= value.split(" ").pop();

		// Check if it's arrow up or down
		if (e.which === 40 || e.which === 38) {
			return false;
		}

		// Check if last value contains @
		if (lastValue.indexOf("@") > -1) {
			// Check if viewer list has been loaded
			if (app.viewerList.length === 0) {
				app.nicknamePicker.innerHTML 	= "<center>...</center>";

				// Load it
				return app.nextTick(() => app.getViewerList());
			}

			// Crop the @
			const search 						= lastValue.substr(1).toLowerCase().trim();

			// Search for nicknames
			const nicks 						= app.viewerList.filter((viewer) => viewer.NickName.toLowerCase().trim().indexOf(search) > -1);

			// Show nickname picker
			app.nicknamePicker.css("display", "block");

			// Check if contain results
			if (nicks.length) {
				// Clear nickname picker
				app.nicknamePicker.innerHTML 	= "";

				// Put all nicks on nickname picker
				nicks.forEach((nick) => {
					const nickname 				= document.createElement("div");
					nickname.addClass("sc-nickname-picker-nickname");
					nickname.innerText 			= nick.NickName;
					app.nicknamePicker.appendChild(nickname);
				});

				// Highlight first nickname
				app.nicknamePicker.querySelector(".sc-nickname-picker-nickname:first-child").addClass("active");
			} else {
				// No nickname found
				app.nicknamePicker.css("display", "none");
			}
		} else {
			// Hide nickname picker if visible
			if (app.nicknamePicker.css("display") !== "none") {
				app.nicknamePicker.css("display", "none");
			}
		}
	});
});