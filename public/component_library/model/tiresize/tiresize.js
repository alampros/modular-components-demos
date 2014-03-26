define(function() {
  /***
   * Represents a tire size.
   * 
   * @param {String|Object|Array} size Representation of size. Eg: '205/55R16', {width: 205, ratio: 55, diameter: 16}, [205,55,16].
   * @constructor
   * @example new TireSize('2055516');
   */
  var TireSize = function(size) {
    console.log('TireSize constructor called:', size);
    this.width = null;
    this.ratio = null;
    this.diameter = null;
    switch (typeof size) {
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
    console.log(matches);
    this.width = matches[1];
    this.ratio = matches[2];
    this.diameter = matches[3];
  }
  TireSize.prototype.fromMap = function(sizeMap) {
    this.width = sizeMap.width;
    this.ratio = sizeMap.ratio;
    this.diameter = sizeMap.diameter;
  }
  TireSize.prototype.fromArray = function(sizeArr) {
    this.width = sizeArr[0];
    this.ratio = sizeArr[1];
    this.diameter = sizeArr[2];
  }
  TireSize.prototype.toString = function() {
    return 'stub';
  }
  return TireSize;
});
