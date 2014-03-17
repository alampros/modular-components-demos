// Based on http://javascript.crockford.com/prototypal.html

if (! Object.create) {
  Object.create = function(proto) {
    function F() {}
    F.prototype = proto;
    return new F();
  };
}

module.exports = Object.create;
