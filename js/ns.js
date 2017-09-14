var ns = function(city) {
    this.city = city;
    this.timezone = "Europe/Amsterdam";
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
    if (http.readyState != 4){
        return;
    }
    var departureData = JSON.parse(http.responseText);
    var domTemplate   = new domTemplates(document.getElementsByClassName('js-template-departure')[0]);
    var departuresList = document.getElementsByClassName('js-departures-list')[0];

    departureData['VertrekkendeTrein'].forEach(function(entry){
        var htmlElement = domTemplate.createDomElements(entry);
        departuresList.innerHTML = departuresList.innerHTML + htmlElement.innerHTML;
    });

    // Remove loading skeleton nodes
    new skeleton();

    this.calculateDepartureTime();
    this.setDelayText();
};

/**
 * Creates human readable departure time.
 */
ns.prototype.calculateDepartureTime = function() {
    var departures = document.getElementsByClassName('js-ns-dept-timeinfo');

    for (var i = 0; i < departures.length; i++) {
        moment.locale('nl');

        var el = departures[i],
            elTime = moment(el.dataset['time']);

        el.querySelector('.js-ns-dept-time').innerText = moment(elTime).tz(this.timezone).format('LT');
    }
};

/**
 * Check's if departure has delay and add's the `ns__departure--has-delay`-modifier class.
 */
ns.prototype.setDelayText = function() {
    var departures = document.getElementsByClassName('ns__departure-delay');

    for (var i = 0; i < departures.length; i++) {
        var el = departures[i];

        if(el.dataset['time'] != ''){
            el.parentElement.parentElement.classList.add('ns__departure--has-delay')
        }
    }
};

/**
 * Check's if departure has delay and add's the `ns__departure--has-delay`-modifier class.
 */
ns.prototype.setHeaderText = function(text) {
    var headerElement = document.getElementsByClassName('ns__header-title')[0];
    headerElement.innerText = text;
};