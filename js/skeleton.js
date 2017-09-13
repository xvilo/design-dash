var skeleton =  function() {
    this.init();
};

/**
 * Do XML Request
 * @param url The URL it has to go to.
 * @param params The URL params.
 * @param method POST or GET
 * @param callback Callback function?
 * @param scope Original scope to bind callback function with.
 */
skeleton.prototype.init = function() {
    var removables = document.getElementsByClassName('js-skeleton-remove');

    for (var i = 0; i < removables.length; i++) {
        removables[i].parentNode.removeChild(removables[i]);
    }

    var removables = document.getElementsByClassName('js-skeleton-remove');

    for (var i = 0; i < removables.length; i++) {
        removables[i].parentNode.removeChild(removables[i]);
    }

    var removables = document.getElementsByClassName('js-skeleton-remove');

    for (var i = 0; i < removables.length; i++) {
        removables[i].parentNode.removeChild(removables[i]);
    }

    var removables = document.getElementsByClassName('js-skeleton-remove');

    for (var i = 0; i < removables.length; i++) {
        removables[i].parentNode.removeChild(removables[i]);
    }

    var removables = document.getElementsByClassName('js-skeleton-remove');

    for (var i = 0; i < removables.length; i++) {
        removables[i].parentNode.removeChild(removables[i]);
    }
};