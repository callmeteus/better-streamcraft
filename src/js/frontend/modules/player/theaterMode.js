app.on("player.render", () => {
	const icon 					= document.createElementNS("http://www.w3.org/2000/svg", "svg");
	icon.id 					= "icon_theatre";
	icon.setAttribute("viewBox", "0 0 30 30");

	const path 					= document.createElementNS("http://www.w3.org/2000/svg", "path");
	path.setAttribute("d", "M23 8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h16zm-4 12h3V10h-3v10zM8 20h9V10H8v10z");
	path.setAttribute("fill-rule", "nonzero");
	icon.appendChild(path);

	const button 				= app.player.addMenuItem(icon, "Modo teatro");

	button.addEventListener("click", () => {
		document.body.classList.toggle("sc-theater");
	});
});