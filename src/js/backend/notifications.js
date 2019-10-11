const queue 									= [];

function toDataUrl(src) {
	return new Promise((resolve, reject) => {
		var img 								= new Image();

		img.crossOrigin 						= "Anonymous";

		img.onload 								= function() {
			var canvas 							= document.createElement("CANVAS");
			var ctx 							= canvas.getContext("2d");

			canvas.height 						= this.naturalHeight;
			canvas.width 						= this.naturalWidth;
			ctx.drawImage(this, 0, 0);

			resolve(canvas.toDataURL());
		};

		img.src 								= "https://images.weserv.nl/?url=" + src + "&w=500";

		if (img.complete || img.complete === undefined) {
			img.onload();
		}
	});
}

window.createNotification 						= function(data) {
	toDataUrl(data.iconUrl)
	.then((icon) => {
		data.iconUrl 							= icon;

		if (data.type === "image") {
			return toDataUrl(data.imageUrl);
		} else {
			return null;
		}
	})
	.then((image) => {
		if (image !== null) {
			data.imageUrl 						= image;
		}

		const finalData 			 			= Object.assign({}, data);

		delete finalData.url;

		finalData.buttons  						= !data.buttons ? [] : data.buttons.map((btn) => {
 			return { title: btn.title };
		});

		const notification 						= chrome.notifications.create(null, finalData, function(id) {
			queue.push({ id, data });
		});
	});
};

chrome.notifications.onClicked.addListener((id) => {
	const notification 							= queue.find((n) => n.id === id);
	
	if (notification !== undefined && notification.data.url !== undefined) {
		window.open(notification.data.url);
	}
});

chrome.notifications.onButtonClicked.addListener((id, index) => {
	const notification 							= queue.find((n) => n.id === id);

	if (notification !== undefined) {
		notification.data.buttons[index].cb.call(notification);
	}
});