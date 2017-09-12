var xhr =  function() {
    this.http = new XMLHttpRequest();
};

// AJAX
xhr.prototype.doRequest = function(url, params, method, callback, scope) {
    this.http.open(method, url, true);
    this.http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    this.http.send(params);

    this.http.onreadystatechange = callback.bind(scope, this.http);
};