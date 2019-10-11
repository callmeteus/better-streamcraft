(function() {
	/**
	 * Message mutation observer
	 * Observers DOM mutation for added .chat-list messages
	 * @param  {Function} (mutations
	 */
	const messageObserver 					= new MutationObserver((mutations) => {
		// Cancel flood timer if any
		clearInterval(window.floodTimer);

		const children 						= mutations[0].target.parentNode.children;;
		const msg 							= children[children.length - 1];

		// Process new node
		app.chat.processNode(msg, true);
	});

	let chat;

	app.on("startup", () => {
		// Get original chat list
		const original						= document.querySelector(".chat-list");

		// Check if chat list exists
		if (!original) {
			return false;
		}

		// Clone node
		chat 								= original.cloneNode(false);
		chat.classList.add("sc-chat-list");

		// Prepend to chat container
		document.querySelector(".tab-content .chat").prepend(chat);
		original.style.display 				= "none";

		// Chat auto scroll control
		chat.canScroll 						= true;

		// On mouse enter, cancel auto scroll
		chat.addEventListener("mouseenter", () => chat.canScroll = false);

		// On mouse leave, enable auto scroll
		chat.addEventListener("mouseleave", () => chat.canScroll = true);
	});

	/**
	 * Process a message DOM node
	 * @param  {Element} node  Message node element
	 */
	app.chat.processNode 					= (node, isClone = false) => {
		// Select message container (generally a "p" or "div")
		let msg 							= node.querySelector("p, div");

		// What? Children doesn't exists? QUIT IT! D:
		if (msg === null) {
			return false;
		}

		// Create final element
		let final 							= document.createElement("li");

		// If has no children
		if (msg.children.length <= 1) {
			// Clone the node
			let clone 						= node.cloneNode(true);

			// Format message with cloned node
			app.formatMessage(clone);

			// Append clone to child
			final.appendChild(clone);
		} else {
			// Iterate over all element children elements
			Array.prototype.forEach.call(msg.children, (child) => {
				// Don't include comments
				if (child.nodeName === "#comment") {
					return false;
				}

				// Clone the node
				let clone 					= child.cloneNode(true);

				// Format message with cloned node
				app.formatMessage(clone);

				// Append clone to child
				final.appendChild(clone);
			});
		}

		// For all nicknames inside message
		final.querySelectorAll(".nick").forEach((nick) => {
			// On click clone, click original node
			nick.addEventListener("click", () => node.querySelector(".nick").click());
		});

		// If element contains "cursor" class
		if (msg.querySelector(".cursor")) {
			// On click clone, click original node
			final.querySelector(".cursor").addEventListener("click", () => msg.querySelector(".cursor").click());
		}

		// Append final element to chat
		chat.appendChild(final);

		// Check if it's a clone
		if (!isClone) {
			// Observe node
			messageObserver.observe(node, {
				childList: 					true
			});
		}

		app.nextTick(() => {
			// Check if chat has more than 50 messages
			if (chat.children.length > 50) {
				for(let i = 0; i < (chat.children.length - 50); i++) {
					const el 				= chat.children[i];
					chat.removeChild(el);
				}
			}

			// Check if chat can auto scroll
			if (chat.canScroll) {
				// Scroll chat down
				chat.scrollTop 				= chat.scrollHeight;
			}
		});
	};

	app.chat.handleMessage 				= function(res) {
		const from  					= {
			id: 						res.FromUin,
			nickname: 					res.FromNickname,
			picture: 					res.FromHeadImg,
		};

		const type 						= res.MsgType;

		let data;

		if (res.MsgContent.BuffJson) {
			data 						= res.MsgContent.BuffJson;
		} else {
			data 						= res.MsgContent.Buff;
		}

		switch(type) {
			default:
				app.log(type, data);
			break;

			case 21018:
				app.emit("clip.ready", data);
			break;

			case 20002: 				// Member join
			case 20003: 				// Member left
				app.emit("viewers.update", data);
			break;

			case 1: 					// Normal message
			case 4: 					// Like received
			case 10005: 				// Member follow
			case 20015: 				// Gift sent (emote)

			break;

			// Bet switch (on/off)
			case 21015:
				app.sendChatMessage(null, "As apostas agora estão " + ((data.Switch === 1) ? "habilitadas" : "desabilitadas") + " neste canal", {
					special: 		true
				});
			break;
		}
	}
}());