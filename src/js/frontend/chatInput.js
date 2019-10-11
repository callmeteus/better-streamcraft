app.on("startup", () => {
	// Send button
	const sendBtn 					= document.querySelector(".chat-dialog .send-btn");

	// Get textarea parent
	const parent 					= document.querySelector(".channel-sider .chat-textarea");

	if (!parent || !sendBtn) {
		return false;
	}

	// Find original textarea
	const input 					= parent.querySelector("textarea");

	// Hide original textarea
	input.css("display", "none");

	/**
	 * Create fake textarea
	 */

	app.textarea 					= document.createElement("div");
	app.textarea.setAttribute("contenteditable", true);
	parent.appendChild(app.textarea);

	// Save original textarea reference
	app.textarea.original 			= input;

	// Copy original textarea attributes
	app.textarea.setAttribute("placeholder", input.getAttribute("placeholder"));
	app.textarea.setAttribute("maxlength", input.getAttribute("maxlength"));

	/**
	 * Set listener to parent click
	 */
	parent.addEventListener("click", () => {
		setEndOfContenteditable(app.textarea);
	});

	// Create a hidden element to make text changes
	const text 						= document.createElement("div");
	text.css("display", "none");

	function updateValue() {
		// Copy content from current div
		text.innerHTML 				= app.textarea.innerHTML;

		// Iterate over elements with alt attr
		text.querySelectorAll("[alt]").forEach((node) => {
			// Replace with alt code
			node.outerHTML 			= node.getAttribute("alt");
		});

		// Iterate over elements without alt attr
		text.querySelectorAll("[alt]").forEach((node) => {
			// Remove it lol
			// Trying to put sum HTML, huh!?
			node.parentNode.removeChild(node);
		});

		// Update value
		input.value 				= text.innerText;

		// Trigger input
		input.trigger("input");
	}

	// On fake textarea input
	app.textarea.addEventListener("input", () => updateValue());

	// On fake textarea keydown
	app.textarea.addEventListener("keydown", function(e) {
		setTimeout(() => {
			if (e.returnValue && e.which === 13 && !e.shiftKey) {
				e.stopPropagation();
				e.preventDefault();

				// Update value
				updateValue();

				// Trigger send button click because I'm too lazy
				// to rewrite the keydown() function z_z
				sendBtn.click();

				return false;
			}
		}, 2);
	});

	// On send button click
	sendBtn.addEventListener("click", () => {
		// Clear textarea
		app.textarea.innerText 	= "";
	});
});