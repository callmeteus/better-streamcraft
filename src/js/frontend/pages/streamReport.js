function doCalculate() {
	let lines 			= document.querySelectorAll(".livedata-wrap tr");

	let totalDuration 	= 0;
	let totalSpecs 		= 0;
	let totalAcu 		= 0;
	let totalStreams 	= lines.length;
	let totalGains 		= 0;

	lines.forEach((line) => {
		const rows 		= line.querySelectorAll("td");

		if (rows.length === 0) {
			return false;
		}

		const duration 	= parseFloat(rows[3].innerText);
		const specs 	= parseFloat(rows[4].innerText);
		const acu 		= parseFloat(rows[5].innerText);

		totalAcu 		+= acu;
		totalSpecs 		+= specs;
		totalDuration 	+= duration;
		totalGains 		+= acu * (duration / 60) * 0.2;
	});

	const mediumAcu 	= Math.round(totalAcu / totalStreams);
	const durationHours = totalDuration / 60;

	const div 			= document.querySelector(".sc-stream-data");

	div.innerHTML 	 	= `
		Ganhos totais estimados: <strong>$${totalGains}</strong><br/>
		Total de horas: <strong>${Math.round(durationHours)}h</strong><br/>
		Total de ACU: <strong>${totalSpecs}</strong><br/>
		Média de ACU: <strong>${mediumAcu}</strong>
	`;
}

app.on("livedata.render", () => {
	const table 		= document.querySelector(".table-wrap");

	const handler 		= document.createElement("div");
	handler.classList.add("sc-stream-data");
	table.appendChild(handler);

	doCalculate();

	const observer 		= new MutationObserver(doCalculate);
	observer.observe(table.querySelector("table tbody"), {
		childList: 		true
	});
});