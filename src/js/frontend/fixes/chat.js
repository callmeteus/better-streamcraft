(function() {
	const linkify 							= require("linkifyjs/html");

	/**
	 * Replace current user nickname with mention tag
	 * @param  {String} txt Text to mentionfy
	 * @return {String}
	 */
	function mentionfy(txt) {
		return txt.replace(new RegExp("@" + app.currentUser, "ig"), `<span class="sc-mention">${app.currentUser}</span>`)
	}

	function textify(element, isMessage = false) {
		// Check if it's a message
		if (isMessage) {
			element.querySelectorAll("span, p").forEach((node) => {
				// Secure any containing links
				let final 					= node.innerHTML;

				// If it's not a system message
				if (!node.classList.contains("system")) {
					// Mentionfy, securify and linkify it
					final 					= mentionfy(linkify(final));
				}

				// Emojify it
				node.innerHTML 				= app.emoji.render(final);
			});
		} else {
			// Emojify entire element
			if (element.nodeValue) {
				element.nodeValue 			= app.emoji.render(linkify(mentionfy(element.nodeValue)));
			} else {
				element.innerHTML 			= app.emoji.render(linkify(mentionfy(element.innerHTML)));
			}
		}

		return element;
	}

	app.formatMessage 						= function(search, isMessage = false) {
		// Check if it's a valid element
		if (search.innerHTML !== "undefined") {
			// Check if emojis are ready
			if (app.emoji !== null) {
				// Textify the messaeg
				textify(search, isMessage);
			} else {
				// Wait for them to be ready
				setTimeout(() => app.formatMessage(search, isMessage), 50);
			}
		}
	};

	/**
	 * Create a new chat message
	 * @param  {Object} from  Sender
	 * @param  {String} msg   Message
	 * @param  {Object} props Message properties
	 * @return {jQuery}
	 */
	app.sendChatMessage 					= function(from = null, text, props = {}) {
		const fragment 						= document.createDocumentFragment();

		// Create the <li>
		const li 							= document.createElement("li");
		fragment.appendChild(li);

		// Create the <div>
		const div 							= document.createElement("div");
		li.appendChild(div);

		// Create the <p>
		const msg 							= document.createElement("p");
		div.appendChild(msg);

		// Check if message is special
		if (props.special) {
			// Add "system"
			msg.addClass("system");
		}

		if (from !== null && from !== undefined) {
			const levelIcon 				= document.createElement("i");
			levelIcon.addClass("icon level-icon");

			const nick 						= document.createElement("span");
			nick.addClass("nick");

			nick.innerText 					= from.nickname;

			msg.appendChild(levelIcon);
			msg.appendChild(nick);	
		}

		const message 						= document.createElement("span");
		message.innerText 					= text;

		msg.appendChild(message);

		document.querySelector(".chat-list").appendChild(fragment);

		return li;
	};

	// On insert bulletin board (stream about)
	app.on("about.render", (node) => {
		node.innerHTML 						= node.innerText;

		// Fix for "about" HTML code
		app.formatMessage(node);
	});

	// On app startup
	app.on("startup", () => {
		// Show "welcome to the chat room" message on chat
		// if the chat-list exists
		document.querySelector(".chat-list") && app.sendChatMessage(null, app.language.sc_live_txt_welcome.replace("{msg}", "Olá"), {
			special: 						true
		});
	});
}());