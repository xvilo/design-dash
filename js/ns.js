var ns = function(city) {
    this.city = city;
};

// NS
ns.prototype.getDepartures = function() {
    this.setHeaderText('Vertrektijden station ' + this.city);

    var http = new xhr;
    http.doRequest('data.php', 'type=ns&key=city&value=' + this.city, 'POST', this.parseDepartureData, this);
};

/**
 * Parses XMLHttpRequest response
 * @param http
 */
ns.prototype.parseDepartureData = function(http) {
    var departureData = JSON.parse(http.responseText);
    var domTemplate   = new domTemplates(document.getElementsByClassName('js-template-departure')[0]);
    var departuresList = document.getElementsByClassName('js-ns-departures')[0];

    departureData['VertrekkendeTrein'].forEach(function(entry){
        var htmlElement = domTemplate.createDomElements(entry);
        departuresList.innerHTML = departuresList.innerHTML + htmlElement.innerHTML;
    });

    this.calculateDepartureTime();
    this.setDelayText();
};

/**
 * Creates human readable departure time.
 */
ns.prototype.calculateDepartureTime = function() {
    var departures = document.getElementsByClassName('ns__departure-time');

    for (var i = 0; i < departures.length; i++) {
        moment.locale('nl');

        var el = departures[i],
            elTime = moment(el.dataset['time']);

        el.innerText = moment(elTime).fromNow();
    }
};

/**
 * Check's if departure has delay and add's the `ns__departure--has-delay`-modifier class.
 */
ns.prototype.setDelayText = function() {
    var departures = document.getElementsByClassName('ns__departure');

    for (var i = 0; i < departures.length; i++) {
        var el = departures[i];

        if(el.dataset.delay != ''){
            el.classList.add('ns__departure--has-delay');
        }
    }
};

/**
 * Check's if departure has delay and add's the `ns__departure--has-delay`-modifier class.
 */
ns.prototype.setHeaderText = function(text) {
    console.log('hi');
    var headerElement = document.getElementsByClassName('ns__header-title')[0];
    console.log(headerElement);
    headerElement.innerText = text;
    console.log('bye');
};