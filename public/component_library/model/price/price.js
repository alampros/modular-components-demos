define(['model/constants/constants'], function(consts) {
  /***
   * Represents a Price.
   * 
   * @param {Object} props Properties of the tire. Product properties + 'size'
   * @constructor
   */
  var Price = function(props) {
    props = props || {};
    props = typeof props === 'number' ? {value: props} : props;
    this.value = props.value || 0;
    this.unit = props.unit || 'USD';
  }
  Price.prototype.toString = function() {
    return consts.CURRENCY_SYMBOL_MAP[this.unit] + this.value.toFixed(2);
  }
  return Price;
});
