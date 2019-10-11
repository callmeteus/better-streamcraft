app.on("startup", () => {
	// Get handle bar
	const handleBar 				= document.querySelector(".header .handle-bar");

	// Check if it's present in DOM
	if (!handleBar) {
		return false;
	}

	// Create the fragment to insert elements
	const fragment 					= document.createDocumentFragment();

	// Create the logo button (div)
	const logoButton 				= document.createElement("div");
	logoButton.classList.add("handle-item");
	logoButton.classList.add("dropdown");
	fragment.appendChild(logoButton);

	// Create the logo link
	const link 						= document.createElement("a");
	link.setAttribute("href", "#");
	link.classList.add("sc-text-yellow");
	logoButton.appendChild(link);

	// Create the heart icon
	const icon 						= document.createElement("i");
	icon.classList.add("icon");
	icon.classList.add("heart-icon");
	link.appendChild(icon);
	link.append("Better StreamCraft");

	// Create the dialog (dropdown menu)
	const settingsDialog 			= document.createElement("div");
	settingsDialog.innerHTML 		= require("./views/settings.ejs")(app);
	logoButton.appendChild(settingsDialog);

	// Insert into dom
	handleBar.prepend(fragment);

	/**
	 * On change settings
	 */

	// On change config input
	settingsDialog.querySelectorAll("input").forEach((input) => {
		input.addEventListener("change", (e) => {
			// Update config
			app.config[input.name] 	= input.type === "checkbox" ? input.checked : input.value;

			// Save config
			app.sendMessage("setStorageItem", {
				name: 				"config",
				value: 				JSON.stringify(app.config)
			});
		});
	});
});