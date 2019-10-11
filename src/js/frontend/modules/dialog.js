class Dialog {
	constructor() {
		this.handler 						= document.createElement("div");
		this.handler.classList.add("sc-dialog");

		this.container 						= document.createElement("div");
		this.container.classList.add("sc-dialog-container");

		this.header 						= document.createElement("div");
		this.header.classList.add("sc-dialog-header");

		this.title 							= document.createElement("h3");
		this.header.appendChild(this.title);

		this.close 							= document.createElement("button");
		this.close.setAttribute("type", "button");
		this.close.classList.add("sc-dialog-close");
		this.close.innerHTML 				= `<i class="el-dialog__close el-icon el-icon-close"></i>`;
		this.header.appendChild(this.close);

		this.body 							= document.createElement("div");
		this.body.classList.add("sc-dialog-body");

		this.footer 						= document.createElement("div");
		this.footer.classList.add("sc-dialog-footer");

		this.container.appendChild(this.header);
		this.container.appendChild(this.body);
		this.container.appendChild(this.footer);

		this.handler.appendChild(this.container);

		this.close.addEventListener("click", () => this.hide());

		document.body.appendChild(this.handler);
	}

	setTitle(title) {
		this.title.innerText 				= title;
	}

	setBody(html) {
		this.body.innerHTML 				= html;
	}

	setFooter(html) {
		this.footer.innerHTML 				= html;

		if (html.length === 0) {
			this.footer.style.display 		= "none";
		} else {
			this.footer.style.display 		= "";
		}
	}

	show() {
		this.handler.style.display 			= "block";
		this.handler.style.opacity 			= 0;

		var last 							= +new Date();
		var tick 							= () => {
			this.handler.style.opacity 		= +this.handler.style.opacity + (new Date() - last) / 500;
			last 							= +new Date();

			if (+this.handler.style.opacity < 1) {
				(window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
			} else {
				this.handler.style.opacity 	= 1;
			}
		};

		tick();
	}

	hide() {
		this.handler.style.opacity 			= 1;

		var last 							= +new Date();
		var tick 							= () => {
			this.handler.style.opacity 		= +this.handler.style.opacity - (new Date() - last) / 500;

			last 							= +new Date();

			if (+this.handler.style.opacity > 0) {
				(window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
			} else {
				this.handler.style.display 	= "none";
				this.handler.style.opacity 	= 0;
			}
		};

		tick();
	}
}