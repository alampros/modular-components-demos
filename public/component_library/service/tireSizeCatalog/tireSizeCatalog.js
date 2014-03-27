define(['model/tireSize/tireSize','json!service/tireSizeCatalog/data.json'], function(MTireSize,mockdata) {
  var widthFilterRE = /^\d{3}$/
  var ratioFilterRE = /^\d{2,3}$/
  var TireSizeCatalog = function() {
    this._raw = mockdata;
  }
  TireSizeCatalog.prototype.search = function(width,ratio,diameter) {
    if(arguments.length === 0) {
      return this.getWidths.call(this);
    }
    if(arguments.length === 1) {
      return this.getRatios.call(this,width);
    }
    if(arguments.length === 2) {
      return this.getDiameters.call(this,width,ratio);
    }
    if(arguments.length === 3) {
      return this.getPerformanceDescriptions.call(this,width,ratio,diameter);
    }
    //throw new Error('Not implemented');
  }
  TireSizeCatalog.prototype.getWidths = function() {
    var self = this;
    var widths = [];
    for (var width in self._raw) {
      if(self._raw.hasOwnProperty(width) && width.match(widthFilterRE) ) {
        widths.push(width);
      }
    }
    return widths;
  }
  TireSizeCatalog.prototype.getRatios = function(width) {
    var self = this;
    var ratios = [];
    var w = self._raw[width];
    for (var ratio in w) {
      if(w.hasOwnProperty(ratio) && ratio.match(ratioFilterRE) ) {
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
  TireSizeCatalog.prototype.getPerformanceDescriptions = function(width,ratio,diameter) {
    if(!width || !ratio || !diameter) throw new Error('Invalid input');
    return this._raw[width][ratio][diameter];
  }
  return new TireSizeCatalog();
});
