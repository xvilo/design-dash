var ns = function() {};

// NS
ns.prototype.getDepartures = function() {
    var http = new xhr;
    http.doRequest('/data.php', 'type=ns&key=city&value=leiden', 'POST', this.parseDepartureData);
};

ns.prototype.parseDepartureData = function(http) {
    var departureData = JSON.parse(http.responseText);
    var domTemplate   = new domTemplates(document.getElementsByClassName('js-template-departure')[0]);
    var departuesList = document.getElementsByClassName('js-ns-departures')[0];

    departureData['VertrekkendeTrein'].forEach(function(entry){
        var htmlElement = domTemplate.createDomElements(entry);
        departuesList.innerHTML = departuesList.innerHTML + htmlElement.innerHTML;
    });
};


var xhr =  function() {
    this.http = new XMLHttpRequest();
};

// AJAX
xhr.prototype.doRequest = function(url, params, method, callback) {
    var that = this;

    this.http.open(method, url, true);
    this.http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    this.http.send(params);

    this.http.onreadystatechange = function() {
        if(that.http.readyState == 4) {
            callback(that.http);
        }
    };
};

var domTemplates = function(element) {
    this.elementRaw = this.getAsText(element);
};

// Dom Templates
domTemplates.prototype.getAsText = function(el) {
    var tmp = document.createElement("div");
    tmp.appendChild(el);
    return tmp.innerHTML;
};

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

nsApi = new ns('Leiden');
nsApi.getDepartures();


// Utilities:

var str2DOMElement = function(html) {
    var wrapMap = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        area: [ 1, "<map>", "</map>" ],
        param: [ 1, "<object>", "</object>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        body: [0, "", ""],
        _default: [ 1, "<div>", "</div>"  ]
    };
    wrapMap.optgroup = wrapMap.option;
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    var match = /<\s*\w.*?>/g.exec(html);
    var element = document.createElement('div');
    if(match != null) {
        var tag = match[0].replace(/</g, '').replace(/>/g, '').split(' ')[0];
        if(tag.toLowerCase() === 'body') {
            var dom = document.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', null);
            var body = document.createElement("body");
            // keeping the attributes
            element.innerHTML = html.replace(/<body/g, '<div').replace(/<\/body>/g, '</div>');
            var attrs = element.firstChild.attributes;
            body.innerHTML = html;
            for(var i=0; i<attrs.length; i++) {
                body.setAttribute(attrs[i].name, attrs[i].value);
            }
            return body;
        } else {
            var map = wrapMap[tag] || wrapMap._default, element;
            html = map[1] + html + map[2];
            element.innerHTML = html;
            // Descend through wrappers to the right content
            var j = map[0]+1;
            while(j--) {
                element = element.lastChild;
            }
        }
    } else {
        element.innerHTML = html;
        element = element.lastChild;
    }
    return element;
}