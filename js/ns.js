var ns = function() {};

// NS
ns.prototype.getDepartures = function() {
    var http = new xhr;
    http.doRequest('/data.php', 'type=ns&key=city&value=leiden', 'POST', this.parseDepartureData, this);
};

ns.prototype.calculateDepartureTime = function() {
    var departures = document.getElementsByClassName('ns__departure-time');

    for (var i = 0; i < departures.length; i++) {
        moment.locale('nl');

        var el = departures[i],
        elTime = moment(el.dataset.time);

        el.innerText = moment(elTime).fromNow();
    }
};

ns.prototype.parseDepartureData = function(http) {
    var departureData = JSON.parse(http.responseText);
    var domTemplate   = new domTemplates(document.getElementsByClassName('js-template-departure')[0]);
    var departuresList = document.getElementsByClassName('js-ns-departures')[0];

    departureData['VertrekkendeTrein'].forEach(function(entry){
        var htmlElement = domTemplate.createDomElements(entry);
        departuresList.innerHTML = departuresList.innerHTML + htmlElement.innerHTML;
    });

    this.calculateDepartureTime();
};