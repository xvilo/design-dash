
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