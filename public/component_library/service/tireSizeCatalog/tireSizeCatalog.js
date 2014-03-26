define(['model/tireSize/tireSize','json!service/tireSizeCatalog/data.json'], function(MTireSize,mockdata) {
  var widthFilterRE = /^\d{3}$/
  var TireSizeCatalog = function() {
    var self = this;
    var data = mockdata;
    self._raw = data;
    self.widths = [];
    self.sizes = [];
    for (var width in data) {
      if(data.hasOwnProperty(width)) {
        //model.tireSize doesn't handle high floatation or LT tires for this demo.
        if(width.match(widthFilterRE)) {
          self.widths.push(width);
          for(var ratio in data[width]) {
            if(data[width].hasOwnProperty(ratio)) {
              for(var diameter in data[width][ratio]) {
                if(data[width][ratio].hasOwnProperty(diameter)) {
                  self.sizes.push(new MTireSize([width,ratio,diameter]));
                }
              }
            }
          }
        }
      }
    }
  }
  TireSizeCatalog.prototype.search = function(width,ratio) {
    if(arguments.length === 1) {
      return this.getRatios.call(this,width);
    } else if(arguments.length === 2) {
      return this.getDiameters.call(this,width,ratio);
    }
    //throw new Error('Not implemented');
  }
  TireSizeCatalog.prototype.getRatios = function(width) {
    var self = this;
    var ratios = [];
    var w = self._raw[width];
    for (var ratio in w) {
      if(w.hasOwnProperty(ratio)) {
        ratios.push(ratio);
      }
    }
    return ratios;
  }
  TireSizeCatalog.prototype.getDiameters = function(width,ratio) {
    if(!width || !ratio) throw new Error('Invalid input');
    var self = this;
    var diameters = [];
    var r = self._raw[width][ratio];
    for (var diam in r) {
      if(r.hasOwnProperty(diam)) {
        diameters.push(diam);
      }
    }
    return diameters;
  }
  return TireSizeCatalog;
});
