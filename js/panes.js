var panes = function(options) {
    this.options = options;

    this.init();
};

panes.prototype.init = function() {
    console.log(this.options['speed']);
};