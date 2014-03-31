/** @license
 * RequireJS plugin for loading DT versioned assets
 * Author: Aaron Lampros
 * Version: 0.0.1 (2014/03/27)
 */
define(function(){
  var re_path = /(.+?)\/([a-z0-9-\.]*)\/?([a-z0-9-\.]*)?(@(.*))?/i;

  var Path = function(inpStr) {
    this._requested = inpStr;
    var matches = inpStr.match(re_path);
    this.namespace = matches[1] || null;
    this.package = matches[2] || null;
    this.filename = matches[3] || this.package;
    this.version = matches[5] || 'LATEST';
  }
  Path.prototype.toString = function() {
    return [this.namespace, this.package, this.version, this.filename].join('/');
  }

  return {
    parse: function(inpStr) {
      return new Path(inpStr);
    }
  };
});

