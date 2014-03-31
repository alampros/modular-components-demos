define(function() {
  /***
   * Represents a tire size.
   * 
   * @param {String|Object|Array} size Representation of size. Eg: '205/55R16', {width: 205, ratio: 55, diameter: 16}, [205,55,16].
   * @constructor
   * @example new TireSize('2055516');
   */
  var TireSize = function(size) {
    this.width = null;
    this.ratio = null;
    this.diameter = null;
    switch ((size instanceof Array) ? 'array' : typeof size) {
      case 'string':
        this.fromString(size);
        break;
      case 'object':
        this.fromMap(size);
        break;
      case 'array':
        this.fromArray(size);
        break;
      default:
        throw new Error('Unknown initialization parameter');
    }
  }
  TireSize._RE=/(^\d{2,3})[\/\ ]?(\d{2}).?(\d{2}$)/;
  TireSize.prototype.fromString = function(sizeStr) {
    var matches = sizeStr.match(TireSize._RE);
    this.width    = parseInt(matches[1],10);
    this.ratio    = parseInt(matches[2],10);
    this.diameter = parseInt(matches[3],10);
  }
  TireSize.prototype.fromMap = function(sizeMap) {
    this.width    = parseInt(sizeMap.width,10);
    this.ratio    = parseInt(sizeMap.ratio,10);
    this.diameter = parseInt(sizeMap.diameter,10);
  }
  TireSize.prototype.fromArray = function(sizeArr) {
    this.width    = parseInt(sizeArr[0],10);
    this.ratio    = parseInt(sizeArr[1],10);
    this.diameter = parseInt(sizeArr[2],10);
  }
  TireSize.prototype.toString = function() {
    return '' + this.width + '/' + this.ratio + 'R' + this.diameter;
  }
  return TireSize;
});
