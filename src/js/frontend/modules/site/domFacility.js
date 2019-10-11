/**
 * DOMFacility by Prometeus
 * Adds some jQuery facilities to DOM elements
 */

/**
 * Triger a HTML event on element
 * @param  {String} name Event name
 * @param  {Object} data Event data
 * @return {HTMLElement}
 */
HTMLElement.prototype.trigger		= function(name, data = {}) {
	const event						= document.createEvent("HTMLEvents");
	event.initEvent(name, true, true);

	Object.keys(data).forEach((key) => {
		event[key]					= data[key];
	});

	this.dispatchEvent(event);

	return this;
};

/**
 * Adds one or more CSS classes from element
 * @param  {String} classes Classes to add
 * @return {HTMLElement}
 */
HTMLElement.prototype.addClass		= function(classes) {
	classes.split(" ").forEach((name) => this.classList.add(name));
	return this;
};

/**
 * Removes one or more CSS classes from element
 * @param  {String} classes Classes to remove
 * @return {HTMLElement}
 */
HTMLElement.prototype.removeClass 	= function(classes) {
	classes.split(" ").forEach((name) => this.classList.add(name));
	return this;
};

/**
 * Changes or get element's CSS propertie(s)
 * @param  {String} index CSS property
 * @param  {String} value CSS value
 * @return {HTMLElement}
 */
HTMLElement.prototype.css 			= function(index, value = null) {
	if (value !== null) {
		this.style[index] 			= value;
		return this;
	} else {
		return this.style[index];
	}
};

function setEndOfContenteditable(contentEditableElement) {
	let range, selection;

	//Firefox, Chrome, Opera, Safari, IE 9+
	if(document.createRange) {
		range 						= document.createRange();//Create a range (a range is a like the selection but invisible)
		range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
		range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
		selection 					= window.getSelection();//get the selection object (allows you to change selection)
		selection.removeAllRanges();//remove any selections already made
		selection.addRange(range);//make the range you have just created the visible selection
	} else
	//IE 8 and lower
	if(document.selection) { 
		range 						= document.body.createTextRange();//Create a range (a range is a like the selection but invisible)
		range.moveToElementText(contentEditableElement);//Select the entire contents of the element with the range
		range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
		range.select();//Select the range (make it the visible selection
	}
}