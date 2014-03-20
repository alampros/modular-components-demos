(function(){
  // create the namespace if it's already
  dt = window.dt || {};
  dt.model = dt.model || {};
  /***
   * Map of currency abbreviations to their symbols.
   * 
   * @const
   * @type Map
   */
  dt.model.CURRENCY_SYMBOL_MAP = { 'USD':'$', 'BPS':'£', 'EUR':'€' };
  /***
   * Represents a Price.
   * 
   * @param {Object} props Properties of the tire. Product properties + 'size'
   * @constructor
   */
  dt.model.Price = function(props) {
    props = props || {};
    props = typeof props === 'number' ? {value: props} : props;
    this.value = props.value || 0;
    this.unit = props.unit || 'USD';
  }
  dt.model.Price.prototype.toString = function() {
    return dt.model.CURRENCY_SYMBOL_MAP[this.unit] + this.value.toFixed(2);
  }
})();
