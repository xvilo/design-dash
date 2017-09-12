/**
 * Dom Templates. Create a feed a HTML DOM object with `{ varnames }`-variables.
 * Then use the `createDomElements()`-method with an key value pair array!
 *
 * @param {Element} element
 */
var domTemplates = function(element) {
    this.elementRaw = this.getAsText(element);
};

/**
 * @param {Element} el The element you want to convert to plain-text
 * @returns {Element}
 */
domTemplates.prototype.getAsText = function(el) {
    var tmp = document.createElement("div");
    tmp.appendChild(el);
    return tmp.innerHTML;
};

/**
 * The function to get your DOM object back
 * @param data
 */
domTemplates.prototype.createDomElements = function(data) {
    var newDomElement = this.elementRaw;

    // Fill out all data that exists
    for (var k in data){
        if (data.hasOwnProperty(k)) {
            newDomElement = newDomElement.replace("{ " + k + " }", data[k]);
            newDomElement = newDomElement.replace("{" + k + "}", data[k]);
            newDomElement = newDomElement.replace("{ " + k + "}", data[k]);
            newDomElement = newDomElement.replace("{" + k + " }", data[k]);
        }
    }

    // Filter out all variables that aren't replaced
    newDomElement = newDomElement.replace(/{.*?}/gm, '');

    return str2DOMElement(newDomElement);
};