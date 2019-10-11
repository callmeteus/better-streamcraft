app.on("streamerInfo", (data) => {
	// This regex will match all emojis until dec 2018, including private areas (for custom emotes)
	const emojiRegex 					= /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|[\ue000-\uf8ff])/g;

	// Emoji to unicode
	const emojiUnicode 					= require("emoji-unicode");

	// Custom emotes (THIS IS FOR DEBUG PURPOSES ONLY)
	const customEmotes 					= require("../src/static/customEmotes.json");

	// Get channel emotes
	const channelEmotes 				= customEmotes[data.user.uin] || {};

	Object.values(channelEmotes).forEach((emote) => {
		emote.image 					= "chrome-extension://" + app.extId + "/static/img/" + data.user.uin + "/" + emote.image;
		emote.isCustom 					= true;
	});

	/**
	 * Converts an unicode emoji to string (char)
	 * @param  {String} unicode Unicode emoji
	 * @return {String}
	 */
	function emojiToString(unicode) {
		try {
			return String.fromCodePoint(parseInt(unicode, 16));
		} catch(e) {
			console.error("[bsc] Failed to convert emoji", unicode, "to string:", e);
			return unicode;
		}
	}

	/**
	 * Convert an emoji to image (svg / custom)
	 * @param  {String} emoji Emoji
	 * @return {String}
	 */
	function emojiToImage(emoji) {
		const data 						= Object.values(emojiLib.lib).find((e) => e.char.indexOf(emoji) > -1);
		return data ? `<img draggable="false" class="emoji" alt="${emoji}" src="${data.image}" />` : `${emoji}`;
	}

	/**
	 * Parses emojis in an string
	 * @param  {[type]} txt [description]
	 * @return {[type]}     [description]
	 */
	function emojify(txt) {
		const matches 					= [...new Set(txt.match(emojiRegex))];

		if (matches !== null) {
			// While has emojis to parse
			matches.forEach((emoji) => {
				// Render emoji
				txt         			= txt.split(emoji).join(emojiToImage(emoji));
			});
		}

		return txt;
	}

	// Emoji library (contains all emojis)
	const emojiLib						= {
		fitzpatrick_scale_modifiers: 	["🏻","🏼","🏽","🏾","🏿"]
	};

	/**
	 * Request external emoji files
	 */

	app.request("https://cdn.jsdelivr.net/npm/emojilib/ordered.json")
	.then((ordered) => {
		emojiLib.ordered 				= ordered;

		return app.request("https://cdn.jsdelivr.net/npm/emojilib/emojis.json");
	})
	.then((emojis) => {
		emojiLib.lib 					= emojis;

		return true;
	})
	.then(() => {
		// Update emoji lib with custom emotes
		emojiLib.lib 					= Object.assign({}, emojiLib.lib, channelEmotes);

		// Update emoji ordered list with custom emotes
		emojiLib.ordered 				= Object.keys(channelEmotes).concat(emojiLib.ordered);

		// Iterate over normal emojis
		emojiLib.ordered.forEach((emojiName) => {
			// Get emoji from emoji library
			const emoji 				= emojiLib.lib[emojiName];

			// Get unicode emoji code
			let emojiCode				= emojiUnicode(emoji.char);

			// Check if emoji is inside special range (wtf reasons... /shrug)
			if (emojiCode > 22 && emojiCode < 40 || emojiCode === "2a") {
				emojiCode 				= emojiCode + "-20e3";
			}

			// Set emoji image
			emoji.image 				= emoji.image || `https://twitter.github.io/twemoji/2/svg/${emojiCode}.svg`;
		});

		// Create app emoji handler
		app.emoji 						= {
			string: 					emojiToString,
			unicode: 					emojiUnicode,
			lib: 						emojiLib,
			regex: 						emojiRegex,
			render: 					emojify
		};

		// Emit emoji ready
		app.emit("emoji.ready");
	});
});