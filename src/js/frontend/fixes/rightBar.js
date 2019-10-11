app.on("startup", () => {
	const chatButton 				= document.querySelector(".sider-item.chat-online .tab ul li span:first-child");
	const specButton 				= document.querySelector(".sider-item.chat-online .tab ul li:nth-child(2) span");
	const dialog 					= document.querySelector(".chat-dialog");

	if (!dialog) {
		return false;
	}

	function prepareTitle(title) {
		dialog.style.display 		= "none";

		const fragment 				= document.createDocumentFragment();

		const container 			= document.createElement("div");
		container.addClass("sc-tab-container");
		fragment.appendChild(container);

		const button 				= document.createElement("button");
		button.addClass("sc-chat-close sc-btn");
		button.innerText 			= "×";

		button.addEventListener("click", () => {
			// Show chat tab
			chatButton.click();

			const tab 				= document.querySelector(".sc-tab-container");
			tab.parentNode.removeChild(tab);

			// Show chat dialog
			dialog.style.display 	= "block";
		});

		container.appendChild(button);

		const strong 				= document.createElement("strong");
		strong.innerText 			= title;

		strong.style.marginLeft 	= "21px";

		container.appendChild(strong);

		document.querySelector(".sider-item .tab-pane.active").append(fragment);
	}

	/**
	 * Create addon button container
	 */

	const addons 					= document.createElement("div");
	addons.addClass("sc-chat-addons");

	if (document.querySelector(".manage-im")) {
		addons.style.marginLeft		= "38px";
	}

	dialog.appendChild(addons);

	/**
	 * Create viewers button
	 */

	if (specButton) {
		// Create viewers list button
		const viewersBtn 			= document.createElement("button");
		viewersBtn.addClass("sc-viewers sc-btn");
		viewersBtn.innerText 		= specButton.innerText;

		viewersBtn.addEventListener("click", () => {
			specButton.click();

			prepareTitle(app.language.live_scene_txt_online);
		});

		addons.appendChild(viewersBtn);
	}
});