var xhr =  function() {
    this.http = new XMLHttpRequest();
};

/**
 * Do XML Request
 * @param url The URL it has to go to.
 * @param params The URL params.
 * @param method POST or GET
 * @param callback Callback function?
 * @param scope Original scope to bind callback function with.
 */
xhr.prototype.doRequest = function(url, params, method, callback, scope) {
    this.http.open(method, url, true);
    this.http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    this.http.send(params);

    this.http.onreadystatechange = callback.bind(scope, this.http);
};