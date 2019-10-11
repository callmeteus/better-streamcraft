app.player 						= {};

app.on("player.render", () => {
	app.player.container 		= document.querySelector(".iggfe-player");
});

app.player.computeOffset 		= function(node, relative, player, tooltip) {
    const topOffset 			= relative ? relative.offsetTop - 10 : 13,
      	rects 					= node.getBoundingClientRect(),
      	playerRects 			= player.getBoundingClientRect(),
      	leftOffset 				= tooltip.offsetWidth;
    return {
        left: 					Math.max(leftOffset / 2, Math.min(rects.left - playerRects.left + rects.width / 2, playerRects.width - leftOffset / 2)),
        top: 					rects.top - playerRects.top - topOffset
    }
};

app.player.addMenuItem 			= function(icon, title) {
	const controls				= app.player.container.querySelector(".iggfe-player--control-right");

	if (!controls) {
		return false;
	}

	const fragment 				= document.createDocumentFragment();

	const item 					= document.createElement("div");
	item.classList.add("iggfe-player--control-item");
	fragment.appendChild(item);

	const button 				= document.createElement("button");
	button.classList.add("iggfe-player--icon");
	button.classList.add("iggfe-player--fresh-button");
	item.appendChild(button);

	button.appendChild(icon);

	const tooltip 				= app.player.container.querySelector(".iggfe-player--tool-tip");

	item.addEventListener("mouseenter", () => {
		tooltip.textContent 	= title;
		tooltip.style.display 	= "block";

		const offset 			= this.computeOffset(button, item, app.player.container, tooltip);

		tooltip.style.left 		= offset.left + "px";
		tooltip.style.top 		= offset.top + "px";
	});

	item.addEventListener("mouseleave", () => {
		tooltip.style.display 	= "none";
	});

	controls.insertBefore(fragment, controls.querySelector(".iggfe-player--control-item:last-child"));

	return item;
};