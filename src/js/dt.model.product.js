(function(){
  // create the namespace if it's already
  dt = window.dt || {};
  dt.model = dt.model || {};
  /***
   * Represents a product.
   * 
   * @param {Object} props Properties of the tire. Product properties + 'size'
   * @constructor
   */
  dt.model.Product = function(props) {
    console.log('Product constructor called with options:',props);
    this.price = new dt.model.Price(props.price);
    this.description = props.description || 'Untitled product';
  }
  dt.model.Product.prototype.toString = function() {
    return this.description + ': ' + this.price;
  }
})();
