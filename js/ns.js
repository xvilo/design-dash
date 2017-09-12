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
