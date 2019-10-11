(function() {
	/**
	 * Process an added node
	 * @param  {Element} node 		Node to be processed
	 */
	function processNode(node) {
		// Check if contains a parent
		if (node.parentNode) {
			// Check if it's the chat list
			if (node.parentNode.classList.contains("chat-list") && !node.parentNode.classList.contains("sc-chat-list")) {
				app.chat.processNode(node);
			} else
			// Check if it's a viewer or a player message
			if (
				node.parentNode.classList.contains("iggfe-player--dan-mu") ||
				node.parentNode.classList.contains("viewer-list")
			) {
				app.formatMessage(node, false);
			} else
			// Check if it's top three
			if (node.querySelector(".top-three")) {
				app.formatMessage(node);
			} else
			// Check if it's stream "about"
			if (node.closest(".bulletin-board")) {
				node.innerHTML 		= node.innerText;
				app.formatMessage(node);
			} else
			// Check if it's stream player
			if (node.classList.contains("iggfe-player")) {
				app.emit("player.render");
			}
		} else
		// Check if it's a normal page
		if (node.classList.contains("content")) {
			// Format all "li"
			node.querySelectorAll("li").forEach((li) => {
				app.formatMessage(li);
			});
		}
	}

	/**
	 * Observe a node for changes
	 * @param  {Element} node 		Node to be observed
	 */
	function observe(node) {
		observer.observe(node, {
			childList: 				true,
			subtree: 				true
		});
	}

	/**
	 * Create mutation observer
	 */

	let lastRemovedNode 			= null;
	const observer 					= new MutationObserver((mutations) => {
		// For each mutation
		mutations.forEach((mutation) => {
			if (
				mutation.target && (
					mutation.target instanceof Text ||
					(
						mutation.target.classList &&
						mutation.target.classList.contains("linkified")
					)
				)
			) {
				return false;
			}

			// For each added node
			mutation.addedNodes.forEach((node) => {
				// Check if node is valid
				if (node === null || node.nodeName === "#comment" || node.nodeName === "#text") {
					return false;
				} else
				// Check if is side container
				if (node.classList && node.classList.contains("contaniner")) {
					// Disconnect observer
					observer.disconnect();

					// Observe new node
					return observe(node);
				} else
				if (
					(node.classList && 
						(
							node.classList.contains("wrapper") ||
							node.classList.contains("table-wrap")
						)
					) || (
						node.parentNode &&
						node.parentNode.tagName === "BODY" &&
						node.querySelector(".main")
					)
				) {
					// Disconnect observer
					observer.disconnect();

					if (node.classList.contains("table-wrap")) {
						return app.emit("livedata.render");
					}

					// Observe new elements
					observe(node);

					// Emit startup
					return app.emit("startup");
				}

				processNode(node);
			});
		});
	});

	// First, observe body
	observer.observe(document.body, {
		childList: 					true
	});

	// Then, observe head
	new MutationObserver((mutations) => {
		mutations.forEach((mutation) => {
			mutation.addedNodes.forEach((node) => {
				// Check if it's the language script
				if (node.tagName === "SCRIPT" && node.src.indexOf("/lang/") > -1) {
					// Request content
					app.request(node.src)
					.then((data) => {
						let lang 	= /exports\=\{(.*)\}/g.exec(data)[1];
							lang 	= lang.substr(0, lang.length - 1);

						lang 		= new Function("return { " + lang)();

						app.language 	= lang;
					});
				}
			});
		});

		//if (script.src.indexOf("/lang/") > -1)
	}).observe(document.head, {
		childList: 					true
	});
}());