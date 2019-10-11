app.on("emoji.ready", () => {
	const parent 					= document.querySelector(".chat-dialog");

	if (!parent) {
		return false;
	}

	app.emojiPicker 				= document.createElement("div");

	app.emojiPicker.classList.add("sc-dialog");
	app.emojiPicker.classList.add("sc-chat-dialog");
	app.emojiPicker.classList.add("sc-emoji-picker");

	parent.appendChild(app.emojiPicker);

	app.inlineEmojiPicker 			= document.createElement("div");

	app.inlineEmojiPicker.classList.add("sc-dialog");
	app.inlineEmojiPicker.classList.add("sc-chat-dialog");
	app.inlineEmojiPicker.classList.add("sc-inline-emoji-picker");

	parent.appendChild(app.inlineEmojiPicker);

	// Create emoji picker emoji handler
	const categories 				= {};

	/* ------------------------------------------------------------------------------------------------------------------ */

	// Iterate over normal emojis
	app.emoji.lib.ordered.forEach((emojiName) => {
		// Get emoji from emoji library
		const emoji 				= app.emoji.lib.lib[emojiName];
		const cat 					= emoji.category;

		// Check if category exists
		if (categories[cat] === undefined) {
			categories[cat] 		= [];
		}

		const img 					= document.createElement("img");
		img.addClass("sc-emoji-picker-emoji");
		img.dataset.code 			= emoji.char;
		img.src 					= emoji.image;
		img.alt 					= emoji.char;

		categories[emoji.category].push(img);
	});

	// Create a document fragment
	let final 						= document.createDocumentFragment();

	// Iterate over categories
	Object.keys(categories).forEach((name) => {
		// Create category handler
		const category 				= document.createElement("div");
		category.addClass("sc-emoji-picker-category");
		category.innerHTML 			= "<h3>" + app.ucfirst(name.replace(/_/g, " ")) + "</h3>";

		// Iterate over elements
		categories[name].forEach((emoji) => {
			category.appendChild(emoji);
		});

		// Append category
		final.appendChild(category);
	});

	// Append emojis to emoji picker
	app.emojiPicker.appendChild(final);

	/* ------------------------------------------------------------------------------------------------------------------ */

	app.emojiPicker.addEventListener("wheel", (e) => {
		app.emojiPicker.scrollTop 	+= e.deltaY;
	});

	// On click emoji
	app.live("mousedown", ".sc-emoji-picker-emoji", function(e) {
		const emoji 				= this.cloneNode(true);
		emoji.classList.add("emoji");
		emoji.classList.remove("sc-emoji-picker-emoji");

		// Update textarea value
		app.textarea.appendChild(emoji);

		// Dispatch "input" event to update textarea
		app.textarea.trigger("input");
		app.textarea.focus();

		// Stop propagation
		e.stopPropagation();
		e.preventDefault();

		setEndOfContenteditable(app.textarea);
	});

	// On click everywhere
	document.addEventListener("mousedown", function(e) {
		// Check if is clicking an emoji or one of
		// emoji picker's categories
		if (
			!e.target.classList.contains("sc-emoji-picker-emoji") && 
			!e.target.classList.contains("sc-emoji-picker") && 
			!e.target.classList.contains("sc-emoji-picker-category")
		) {
			// If not, hide the emoji picker
			app.emojiPicker.style.display 	= "none";
		}
	});

	/* ------------------------------------------------------------------------------------------------------------------ */

	// Create emoji picker button
	const pickerBtn 						= document.createElement("button");
	pickerBtn.classList.add("sc-btn");
	pickerBtn.classList.add("sc-emoji-picker-btn");

	pickerBtn.innerHTML 					= '<img src="https://twemoji.maxcdn.com/2/72x72/1f600.png" />';

	// On button click, toggle picker
	pickerBtn.addEventListener("mouseup", () => {
		if (app.emojiPicker.style.display === "none") {
			app.emojiPicker.style.display 	= "block";
		} else {
			app.emojiPicker.style.display 	= "none";
		}
	});

	parent.appendChild(pickerBtn);
});