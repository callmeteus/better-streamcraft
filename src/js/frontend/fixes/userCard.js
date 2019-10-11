app.on("startup", () => {
	// Get original node
	const original 			= document.querySelector(".user-card .nick");

	// Check if user card exists
	if (!original) {
		return false;
	}

	// Clone original node
	const handler 			= original.cloneNode(true);

	// Add fixed class
	handler.classList.add("sc-nick");

	// Append clone before original
	original.before(handler);

	// Hide original one
	original.style.display 	= "none";

	// Create the mutation observer
	const observer 			= new MutationObserver((mutations) => {
		// Get the nickname
		let target 			= mutations[0].target.closest(".info-bar").querySelector(".nick:not(.sc-nick)");

		// Update the clone HTML
		handler.innerHTML 	= target.innerText;

		// Format the clone
		app.formatMessage(handler);
	});

	// Here is the trick: observe avatar URL changes
	// If it changes, nick may be changed too! :O
	observer.observe(document.querySelector(".user-card .avatar"), {
		attributes: 	true
	});
});